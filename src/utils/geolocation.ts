// Maximum number of retry attempts
const MAX_RETRIES = 3;

// Initial delay in milliseconds (1 second)
const INITIAL_DELAY = 1000;

// Cache duration in milliseconds (1 hour)
const CACHE_DURATION = 60 * 60 * 1000;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface GeolocationCache {
  country: string;
  timestamp: number;
}

const getCachedCountry = (): string | null => {
  const cached = localStorage.getItem('userCountry');
  if (!cached) return null;

  try {
    const { country, timestamp } = JSON.parse(cached) as GeolocationCache;
    if (Date.now() - timestamp < CACHE_DURATION) {
      return country;
    }
    localStorage.removeItem('userCountry');
    return null;
  } catch (error) {
    console.error('Failed to parse cached country:', error);
    localStorage.removeItem('userCountry');
    return null;
  }
};

const cacheCountry = (country: string): void => {
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
  retryCount = 0,
  signal?: AbortSignal
): Promise<Response> {
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  const controller = new AbortController();

  try {
    const response = await fetch(url, { 
      signal: signal || controller.signal,
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      if (response.status === 429 && retryCount < MAX_RETRIES) {
        const delay = INITIAL_DELAY * Math.pow(2, retryCount);
        console.log(`Rate limited, retrying in ${delay}ms...`);
        await sleep(delay);
        return fetchWithRetry(url, retryCount + 1, signal);
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out');
      }
    }
    throw error;
  }
}

interface GeolocationResponse {
  country_code: string;
  error?: boolean;
  reason?: string;
}

export const detectUserCountry = async (): Promise<string> => {
  // Check cache first
  const cachedCountry = getCachedCountry();
  if (cachedCountry) {
    return cachedCountry;
  }

  try {
    const response = await fetchWithRetry('https://ipapi.co/json/');
    const data = await response.json() as GeolocationResponse;
    
    if (data.error || !data.country_code) {
      throw new Error(data.reason || 'Invalid response from geolocation API');
    }

    const countryCode = data.country_code.toUpperCase();
    cacheCountry(countryCode);
    return countryCode;
  } catch (error) {
    console.error('Geolocation detection failed:', error instanceof Error ? error.message : 'Unknown error');
    return 'US'; // Default to US if detection fails
  }
};