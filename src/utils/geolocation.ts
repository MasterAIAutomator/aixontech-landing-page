// Maximum number of retry attempts
const MAX_RETRIES = 3;

// Initial delay in milliseconds (1 second)
const INITIAL_DELAY = 1000;

// Cache duration in milliseconds (1 hour)
const CACHE_DURATION = 60 * 60 * 1000;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getCachedCountry = (): string | null => {
  const cached = localStorage.getItem('userCountry');
  if (!cached) return null;

  try {
    const { country, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return country;
    }
    localStorage.removeItem('userCountry');
    return null;
  } catch (error) {
    localStorage.removeItem('userCountry');
    return null;
  }
};

const cacheCountry = (country: string) => {
  try {
    localStorage.setItem('userCountry', JSON.stringify({
      country,
      timestamp: Date.now()
    }));
  } catch (error) {
    console.error('Failed to cache country:', error);
  }
};

async function fetchWithRetry(
  url: string,
  retryCount = 0
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (response.status === 429 && retryCount < MAX_RETRIES) {
      // Calculate exponential backoff delay
      const delay = INITIAL_DELAY * Math.pow(2, retryCount);
      console.log(`Rate limited, retrying in ${delay}ms...`);
      await sleep(delay);
      return fetchWithRetry(url, retryCount + 1);
    }

    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export const detectUserCountry = async (): Promise<string> => {
  // Check cache first
  const cachedCountry = getCachedCountry();
  if (cachedCountry) {
    return cachedCountry;
  }

  try {
    const response = await fetchWithRetry('https://ipapi.co/json/');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Validate the response data
    if (!data || typeof data.country_code !== 'string') {
      throw new Error('Invalid response format from geolocation API');
    }

    // Cache the successful result
    cacheCountry(data.country_code);
    return data.country_code;
  } catch (error) {
    console.error('Geolocation detection failed:', error instanceof Error ? error.message : 'Unknown error');
    return 'US'; // Default to US if detection fails
  }
};