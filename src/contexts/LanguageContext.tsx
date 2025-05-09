import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'sr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export const translations = {
  en: {
    'trustedby.title': 'Trusted by Industry Leaders',
    'trustedby.header': 'Trusted by',
    'trustedby.client': 'Client logo',
    'hero.title': 'Remove manual work. Save $50,000+ yearly. Scale without stress.',
    'hero.subtitle': 'We implement AI automation for companies wanting faster processes, lower costs, and more clients — without technical knowledge or additional staff.',
    'hero.cta': '📅 Schedule 30-min audit— discover what your business can automate',
    'hero.secondary': '🔍 See how others saved $10,000+ monthly',
    'hero.rightTitle': 'Save Time and Money with AI',
    'hero.benefit1.title': '8+ hours weekly savings',
    'hero.benefit1.description': 'Automate repetitive tasks and free up time for strategic activities.',
    'hero.benefit2.title': '30% reduction in operational costs',
    'hero.benefit2.description': 'Eliminate manual work and reduce business expenses.',
    'hero.benefit3.title': '300%+ ROI',
    'hero.benefit3.description': 'Our clients see return on investment in the first week.',
    'benefits.title': 'Results in 7 days. No programmers. No stress.',
    'benefits.subtitle': 'Automate the most tedious processes and free your team. Our clients save time and money in the first week — with 0 lines of code and no complications.',
    'benefits.metric1.title': 'Time Savings',
    'benefits.metric1.description': 'Save 8+ hours weekly by eliminating manual and repetitive tasks.',
    'benefits.metric2.title': 'Cost Reduction',
    'benefits.metric2.description': 'Reduce operational costs up to 30% through automation of manual processes.',
    'benefits.metric3.title': 'Increased Profits',
    'benefits.metric3.description': 'Boost efficiency, speed, and business volume through AI automation.',
    'benefits.metric4.title': 'More Clients',
    'benefits.metric4.description': 'Attract and retain more clients through faster and higher quality services.',
    'benefits.metric5.title': 'System Integration',
    'benefits.metric5.description': 'Seamless integration with all your existing business systems.',
    'benefits.metric6.title': 'Measurable Results',
    'benefits.metric6.description': 'Clear and measurable results with ROI from the first week.',
    'services.title': 'AI Solutions That Work Instead of You',
    'services.subtitle': 'Comprehensive AI Solutions for Modern Companies',
    'services.item1.title': 'AI Assistants',
    'services.item1.description': 'AI assistants that handle inquiries, sales, and support — instead of you. 24/7',
    'services.item1.feature1': '24/7 customer support',
    'services.item1.feature2': 'Personalized recommendations',
    'services.item1.feature3': 'Automated question answering',
    'services.item1.feature4': 'Multilingual support',
    'services.item2.title': 'Process Automation',
    'services.item2.description': 'Eliminate tedious and slow processes. Automate workflows and focus on growth.',
    'services.item2.feature1': 'Automated document processing',
    'services.item2.feature2': 'Data streaming between systems',
    'services.item2.feature3': 'Reporting automation',
    'services.item2.feature4': 'Workflow optimization',
    'services.item3.title': 'Analytics and Prediction',
    'services.item3.description': 'Advanced analytics and predictive models for better business decisions.',
    'services.item3.feature1': 'Predictive analytics',
    'services.item3.feature2': 'Trend and pattern analysis',
    'services.item3.feature3': 'Data visualization',
    'services.item3.feature4': 'Automated reports',
    'services.item4.title': 'LLM Integrations',
    'services.item4.description': 'Integrate Large Language Models (LLM) into your existing systems and applications.',
    'services.item4.feature1': 'Customized AI models',
    'services.item4.feature2': 'Integration with existing systems',
    'services.item4.feature3': 'Natural language processing',
    'services.item4.feature4': 'Generative AI solutions',
    'services.item5.title': 'AI Portals',
    'services.item5.description': 'Specialized AI portals for your industry that automate key processes.',
    'services.item5.feature1': 'Custom business interfaces',
    'services.item5.feature2': 'Centralized data access',
    'services.item5.feature3': 'KPI metrics dashboard',
    'services.item5.feature4': 'Multi-user access',
    'services.item6.title': 'AI Cloud Infrastructure',
    'services.item6.description': 'Secure and scalable cloud infrastructure for your AI applications.',
    'services.item6.feature1': 'Scalable cloud architecture',
    'services.item6.feature2': 'High availability and reliability',
    'services.item6.feature3': 'Data security and encryption',
    'services.item6.feature4': 'Continuous updates and maintenance',
    'services.cta': 'Learn More',
    'cases.title': 'Clients already saving $10,000+ monthly with AI automation',
    'cases.subtitle': 'See how our clients save tens of thousands of dollars and conquer the market through AI automation',
    'cases.sidebar.title': 'Proven in Practice: How our clients save time, money and win markets with AI automation',
    'cases.finance.title': 'Financial Consulting',
    'cases.finance.industry': 'Industry: Finance',
    'cases.finance.problem': '15+ hours weekly spent on manual financial report processing, with frequent errors costing thousands of dollars.',
    'cases.finance.solution': 'We developed an AI system that automatically collects, analyzes and generates financial reports, eliminating human error.',
    'cases.finance.results.time': 'Processing time reduced by 85%',
    'cases.finance.results.savings': 'Annual savings $25,000',
    'cases.finance.results.roi': 'Return on Investment (ROI): 320%',
    'cases.finance.conclusion': 'Today, our client makes better financial decisions, faster and more reliably than ever before.',
    'cases.marketing.title': 'Marketing Agency',
    'cases.marketing.industry': 'Industry: Marketing',
    'cases.marketing.problem': 'Team was losing hours daily on manual campaign data collection and analysis, slowing results and frustrating clients.',
    'cases.marketing.solution': 'We implemented an AI system that analyzes performance in real-time and automatically creates reports.',
    'cases.marketing.results.time': '70% time saved on reporting',
    'cases.marketing.results.savings': 'Annual savings $18,000',
    'cases.marketing.results.productivity': 'Team productivity increased by 40%',
    'cases.marketing.results.conversion': 'Conversion rate improved by 25%',
    'cases.marketing.conclusion': 'Thanks to automation, the agency now optimizes campaigns faster and increases value for clients.',
    'cases.ecommerce.title': 'E-commerce Platform',
    'cases.ecommerce.industry': 'Industry: Online Sales',
    'cases.ecommerce.problem': 'Slow customer support frustrated buyers and lost sales. Team couldn\'t handle query volume.',
    'cases.ecommerce.solution': 'We implemented an AI assistant that automatically handles 80% of queries and provides 24/7 support.',
    'cases.ecommerce.results.response': 'Instant responses to most queries',
    'cases.ecommerce.results.satisfaction': 'Significantly improved customer satisfaction',
    'cases.ecommerce.results.savings': 'Annual savings $30,000',
    'cases.ecommerce.results.roi': 'Return on Investment (ROI): 350%',
    'cases.ecommerce.conclusion': 'Now the team focuses on growth and strategic initiatives while AI handles routine requests.',
    'results.title': 'Real Client Results',
    'results.subtitle': 'See how our AI solutions transform businesses',
    'results.categories.all': 'All Industries',
    'results.categories.saas': 'SaaS',
    'results.categories.coaching': 'Coaching',
    'results.categories.finance': 'Finance',
    'results.cta': 'Get Similar Results',
    'results.testimonials.willnitze': 'Logistics automation saved us over 20 hours per week. Instead of chasing inventory, we now scale marketing. Product grows, operations no longer hold back growth.',
    'results.testimonials.alexbrodsky': 'Too many senior devs were doing routine work. Now the AI system creates performance reports on its own, and the team works 30% more on core features. Clients notice it immediately.',
    'results.testimonials.sudhanshuheda': 'We used to analyze data manually - now we have a real-time dashboard that filters, visualizes, and sends conclusions to the team. Our efficiency jumped 40% in 2 months.',
    'results.testimonials.dennisgoedheid': 'Check-in, guest messages, and follow-up offers now work by themselves. We have more bookings, more 5* ratings, and less team stress. Everything is smooth and automated.',
    'results.testimonials.doganergun': 'We used to communicate with clients manually. Now AI leads the project flow - reminds, updates, and even suggests next steps. 80% of communication is automated, and client feedback is top.',
    'results.testimonials.larsletonoff': 'Incidents previously required hours of documentation. Now the system records everything, analyzes, and reports errors in real-time. We\'re faster, more precise, and clients see it immediately.',
    'results.testimonials.gwengottlieb': 'AI now personalizes content for each person. Our CTR increased 4x, time on site doubled, and people return on their own - without additional marketing.',
    'results.testimonials.daniellewolfe': 'Before, we spent hours on notes, follow-up emails, and session preparation. Today? All that happens automatically. Your system turns each coaching session into a clear action plan, sends follow-up to the client, and suggests next steps. My focus is now 100% on the client - not on logistics. Clients feel it - and the results are deeper.',
    'results.testimonials.daniellewolfe.result': '70% less time in operations, more deep transformations in less time.',
    'results.testimonials.rashelleisip': 'Paradoks je da sam kao productivity coach bila zatrpana taskovima. Tvoj sistem je sinhronizovao sve: sastanke, emailove, taskove i planere – i sada imam sistem koji i moji klijenti zavide.',
    'results.testimonials.rashelleisip.result': '+3h freed time daily, +1 additional client weekly.',
    'results.testimonials.bisilabokoko': 'Before, each new lead meant 10 minutes of manual communication. Now my system knows who the lead is, where they come from, and automatically sends a personalized response in my tone.',
    'results.testimonials.bisilabokoko.result': '40% less time on communication, +28% more qualified calls.',
    'results.testimonials.cathywhite': 'Our PR team was in chaos juggling events, content, and media. Your AI system now writes initial drafts, sends reminders, and synchronizes the team.',
    'results.testimonials.cathywhite.result': 'Double the campaigns with the same number of people.',
    'results.testimonials.ramahluwalia': 'Before, we used 3 tools and 2 analysts for analyses. Now we get AI-generated insights in real-time.',
    'results.testimonials.ramahluwalia.result': '-65% time for analysis preparation, +32% faster investment decisions.',
    'results.testimonials.zachwalsh': 'We work with thousands of transactions daily - before, oversights and errors were inevitable. Now your system warns us before something happens.',
    'results.testimonials.zachwalsh.result': '-80% operational incidents.',
    'results.testimonials.alejandrolitovsky': 'Your AI tool shortened our data analysis by 60% and enabled us to react while other firms were still in Excel.',
    'results.testimonials.alejandrolitovsky.result': '3x faster strategic responses.',
    'results.testimonials.conorsvensson': 'Manual smart contract analysis was slowing us down and exposing us to risk. Your system now does this in real-time, without error.',
    'results.testimonials.conorsvensson.result': '-90% time for inspection, +300% more investor confidence.',
    'results.testimonials.mustafasiddiqui': 'Your tool eliminated manual analysis and generates the most important insights immediately.',
    'results.testimonials.mustafasiddiqui.result': '+22% more successfully closed opportunities with shorter decision-making cycle.',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s Discuss Your AI Strategy',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    'footer.rights': '© 2023 AixonTech. All Rights Reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.email': 'main@aixontech.com',
    'multistepForm.intro.title': "Let's book a call",
    'multistepForm.intro.text': "If you want to work together, this is the right place. Next up is a few questions & a calendar you can use to schedule your call.",
    'multistepForm.intro.startButton': "Start",
    'multistepForm.intro.disclaimer': "Takes ~1 minute 30 seconds",
    'multistepForm.step1.question': "What type of business do you run?",
    'multistepForm.step1.option.service': "Service",
    'multistepForm.step1.option.ecommerce': "E-commerce",
    'multistepForm.step1.option.software': "Software",
    'multistepForm.step1.option.brickAndMortar': "Brick-and-mortar",
    'multistepForm.step1.option.other': "Other (please specify)",
    'multistepForm.step1.nextButton': "Ok",
    'multistepForm.step2.question': "What does it do?",
    'multistepForm.step2.subtext': "Three sentences or less. For instance: \"I help dentists get more patients using FB ads for $2k–$5k/mo.\"",
    'multistepForm.step2.nextButton': "Ok",
    'multistepForm.step3.question': "One-time project or ongoing monthly support?",
    'multistepForm.step3.subtext': "We offer custom one-time builds or discounted ongoing automation retainers.",
    'multistepForm.step3.option.oneTime': "One-time project",
    'multistepForm.step3.option.ongoing': "Ongoing monthly service",
    'multistepForm.step3.nextButton': "Ok",
    'multistepForm.step4.question': "What would you like help with?",
    'multistepForm.step4.subtext': "Be as detailed as possible. We'll use this to scope your needs so our call is time-effective.",
    'multistepForm.step4.nextButton': "Ok",
    'multistepForm.step5.question': "What's your current monthly revenue (USD)?",
    'multistepForm.step5.option.a': "<$10k",
    'multistepForm.step5.option.b': "$10k–$25k",
    'multistepForm.step5.option.c': "$25k–$50k",
    'multistepForm.step5.option.d': "$50k–$100k",
    'multistepForm.step5.option.e': "$100k–$200k",
    'multistepForm.step5.option.f': "$200k–$500k",
    'multistepForm.step5.option.g': ">$500k",
    'multistepForm.step5.nextButton': "Ok",
    'multistepForm.step6.question': "What's your website URL? (or LinkedIn if no site)",
    'multistepForm.step6.nextButton': "Ok",
    'multistepForm.step7.question': "How do we reach you?",
    'multistepForm.step7.field.firstName': "First name",
    'multistepForm.step7.field.lastName': "Last name",
    'multistepForm.step7.field.email': "Email",
    'multistepForm.step7.field.company': "Company",
    'multistepForm.step7.nextButton': "Ok",
    'multistepForm.calendar.title': "Book a time",
    'multistepForm.calendar.subtext': "You will receive a confirmation email upon booking.",
    'multistepForm.thankYou': "Thanks! You'll receive a confirmation email shortly.",
    'multistepForm.progress': "{{current}} of {{total}}",
    'form.error.required': "Required"
  },
  sr: {
    'trustedby.title': 'Kompanije Koje Nam Veruju',
    'trustedby.header': 'Ukazali nam povjerenje',
    'trustedby.client': 'Logo klijenta',
    'hero.title': 'Uklonite manuelni rad. Uštedite €50.000+ godišnje. Skalirajte bez stresa.',
    'hero.subtitle': 'Implementiramo AI automatizaciju za firme koje žele brže procese, niže troškove i više klijenata — bez tehničkog znanja ili dodatnog osoblja.',
    'hero.cta': '📅 Zakaži 30-min audit— otkrij šta tvoj biznis može da automatizuje',
    'hero.secondary': '🔍 Pogledaj kako su drugi uštedeli €10.000+ mesečno',
    'hero.rightTitle': 'Uštedite vreme i novac sa AI',
    'hero.benefit1.title': '8+ časova nedeljno uštede',
    'hero.benefit1.description': 'Automatizujte repetitivne zadatke i oslobodite vreme za strateške aktivnosti.',
    'hero.benefit2.title': '30% smanjenje operativnih troškova',
    'hero.benefit2.description': 'Eliminišite manuelni rad i smanjite troškove poslovanja.',
    'hero.benefit3.title': 'ROI od 300%+',
    'hero.benefit3.description': 'Naši klijenti vide povraćaj investicije već u prvoj nedelji dana.',
    'benefits.title': 'Rezultati za 7 dana. Bez programera. Bez stresa.',
    'benefits.subtitle': 'Automatizuj najdosadnije procese i oslobodi svoj tim. Naši klijenti štede vreme i novac već u prvoj nedelji — uz 0 linija koda i bez komplikacija.',
    'benefits.metric1.title': 'Ušteda vremena',
    'benefits.metric1.description': 'Uštedite 8+ sati nedeljno eliminacijom manuelnih i repetitivnih zadataka.',
    'benefits.metric2.title': 'Smanjenje troškova',
    'benefits.metric2.description': 'Smanjite operativne troškove do 30% kroz automatizaciju manuelnih procesa.',
    'benefits.metric3.title': 'Povećanje profita',
    'benefits.metric3.description': 'Povećajte efikasnost, brzinu i obim poslovanja kroz AI automatizaciju.',
    'benefits.metric4.title': 'Više klijenata',
    'benefits.metric4.description': 'Privucite i zadržite više klijenata kroz brže i kvalitetnije usluge.',
    'benefits.metric5.title': 'Integracija sa sistemima',
    'benefits.metric5.description': 'Besprekorna integracija sa svim vašim postojećim poslovnim sistemima.',
    'benefits.metric6.title': 'Merljivi rezultati',
    'benefits.metric6.description': 'Jasni i merljivi rezultati sa povraćajem investicije već u prvo nedelju dana.',
    'services.title': 'AI Rešenja Koja Rade Posao Umesto Vas',
    'services.subtitle': 'Sveobuhvatna AI Rešenja za Moderne Kompanije',
    'services.item1.title': 'AI Asistenti',
    'services.item1.description': 'AI asistenti koji odgovaraju na upite, prodaju i pružaju podršku — umesto vas. 24/7',
    'services.item1.feature1': '24/7 podrška klijentima',
    'services.item1.feature2': 'Personalizovane preporuke',
    'services.item1.feature3': 'Automatsko odgovaranje na pitanja',
    'services.item1.feature4': 'Višejezična podrška',
    'services.item2.title': 'Automatizacija procesa',
    'services.item2.description': 'Eliminišite dosadne i spore procese. Automatizujte tokove rada i fokusirajte se na rast.',
    'services.item2.feature1': 'Automatska obrada dokumenata',
    'services.item2.feature2': 'Striming podataka između sistema',
    'services.item2.feature3': 'Automatizacija izveštavanja',
    'services.item2.feature4': 'Optimizacija radnih tokova',
    'services.item3.title': 'Analitika i predviđanje',
    'services.item3.description': 'Napredna analitika i prediktivni modeli za donošenje boljih poslovnih odluka.',
    'services.item3.feature1': 'Prediktivna analitika',
    'services.item3.feature2': 'Analiza trendova i obrazaca',
    'services.item3.feature3': 'Vizualizacija podataka',
    'services.item3.feature4': 'Automatski izveštaji',
    'services.item4.title': 'Integracije sa LLM',
    'services.item4.description': 'Integrišite velike jezičke modele (LLM) u vaše postojeće sisteme i aplikacije.',
    'services.item4.feature1': 'Kastomizovani AI modeli',
    'services.item4.feature2': 'Integracija sa postojećim sistemima',
    'services.item4.feature3': 'Obrada prirodnog jezika',
    'services.item4.feature4': 'Generativna AI rešenja',
    'services.item5.title': 'AI portali',
    'services.item5.description': 'Specijalizovani AI portali za vašu industriju koji automatizuju ključne procese.',
    'services.item5.feature1': 'Prilagođeni poslovni interfejsi',
    'services.item5.feature2': 'Centralizovan pristup podacima',
    'services.item5.feature3': 'Kontrolna tabla sa KPI metrikama',
    'services.item5.feature4': 'Višekorisnički pristup',
    'services.item6.title': 'AI cloud infrastruktura',
    'services.item6.description': 'Bezbedna i skalabilna cloud infrastruktura za vaše AI aplikacije.',
    'services.item6.feature1': 'Skalabilna cloud arhitektura',
    'services.item6.feature2': 'Visoka dostupnost i pouzdanost',
    'services.item6.feature3': 'Sigurnost i enkripcija podataka',
    'services.item6.feature4': 'Kontinuirano ažuriranje i održavanje',
    'services.cta': 'Saznajte Više',
    'cases.title': 'Klijenti koji već štede €10.000+ mesečno uz AI automatizaciju',
    'cases.subtitle': 'Pogledajte kako kroz AI automatizaciju naši klijenti štede desetine hiljada evra i osvajaju tržište',
    'cases.sidebar.title': 'Dokazano u praksi: Kako naši klijenti štede vreme, novac i osvajaju tržište uz AI automatizaciju',
    'cases.finance.title': 'Finansijski konsalting',
    'cases.finance.industry': 'Industrija: Finansije',
    'cases.finance.problem': '15+ sati nedeljno potrošenih na manuelnu obradu finansijskih izveštaja, sa čestim greškama koje koštaju hiljade evra.',
    'cases.finance.solution': 'Razvili smo AI sistem koji automatski prikuplja, analizira i generiše finansijske izveštaje, eliminišući ljudske greške.',
    'cases.finance.results.time': 'Vreme obrade smanjeno za 85%',
    'cases.finance.results.savings': 'Godišnja ušteda 25.000€',
    'cases.finance.results.roi': 'Povraćaj investicije (ROI): 320%',
    'cases.finance.conclusion': 'Danas, naš klijent donosi bolje finansijske odluke, brže i pouzdanije nego ikad pre.',
    'cases.marketing.title': 'Marketinška agencija',
    'cases.marketing.industry': 'Industrija: Marketing',
    'cases.marketing.problem': 'Tim je gubio sate dnevno na manuelno prikupljanje i analizu podataka o kampanjama, usporavajući rezultate i frustrirajući klijente.',
    'cases.marketing.solution': 'Implementirali smo AI sistem koji analizira performanse u realnom vremenu i automatski kreira izveštaje.',
    'cases.marketing.results.time': '70% uštede vremena na izveštavanju',
    'cases.marketing.results.savings': 'Godišnja ušteda 18.000€',
    'cases.marketing.results.productivity': 'Produktivnost tima povećana za 40%',
    'cases.marketing.results.conversion': 'Stopa konverzije poboljšana za 25%',
    'cases.marketing.conclusion': 'Zahvaljujući automatizaciji, agencija sada brže optimizuje kampanje i povećava vrednost za klijente.',
    'cases.ecommerce.title': 'E-commerce platforma',
    'cases.ecommerce.industry': 'Industrija: Online prodaja',
    'cases.ecommerce.problem': 'Spora korisnička podrška frustrirala je kupce i gubila prodaje. Tim nije mogao da upravlja obimom upita.',
    'cases.ecommerce.solution': 'Implementirali smo AI asistenta koji automatski obrađuje 80% upita i pruža 24/7 podršku.',
    'cases.ecommerce.results.response': 'Trenutni odgovori na većinu upita',
    'cases.ecommerce.results.satisfaction': 'Značajno poboljšano zadovoljstvo kupaca',
    'cases.ecommerce.results.savings': 'Godišnja ušteda 30.000€',
    'cases.ecommerce.results.roi': 'Povraćaj investicije (ROI): 350%',
    'cases.ecommerce.conclusion': 'Sada se tim fokusira na rast i strateške inicijative dok AI upravlja rutinskim zahtevima.',
    'results.title': 'Stvarni Rezultati Klijenata',
    'results.subtitle': 'Pogledajte kako naša AI rešenja transformišu biznise',
    'results.categories.all': 'Sve Industrije',
    'results.categories.saas': 'SaaS',
    'results.categories.coaching': 'Coaching',
    'results.categories.finance': 'Finansije',
    'results.cta': 'Želim Ovakav Sistem',
    'results.testimonials.willnitze': 'Logistička automatizacija nam je uštedela preko 20 sati nedeljno. Umesto da jurimo zalihe, sada skaliramo marketing. Proizvod raste, operacije ne koče više rast.',
    'results.testimonials.alexbrodsky': 'Previše senior devova radilo je rutinske stvari. Sada AI sistem sam pravi performance reporte, a tim radi 30% više na core feature-ima. Klijenti to odmah primećuju.',
    'results.testimonials.sudhanshuheda': 'Pre smo analizirali podatke ručno – sada imamo real-time dashboard koji filtrira, vizualizuje i šalje zaključke timu. Efikasnost nam je skočila 40% u 2 meseca.',
    'results.testimonials.dennisgoedheid': 'Check-in, poruke gostima i follow-up ponude sada rade sami od sebe. Imamo više rezervacija, više 5* ocena i manje stresa u timu. Sve je glatko i automatizovano.',
    'results.testimonials.doganergun': 'Pre smo ručno komunicirali sa klijentima. Sada AI vodi tok projekta — podseća, ažurira i čak predlaže sledeće korake. 80% komunikacije je automatizovano, a feedback klijenata je top.',
    'results.testimonials.larsletonoff': 'Incidenti su ranije tražili sate dokumentacije. Sada sistem sve sam beleži, analizira i javlja greške u realnom vremenu. Brži smo, precizniji i klijenti to vide odmah.',
    'results.testimonials.gwengottlieb': 'AI sada personalizuje sadržaj za svaku osobu. CTR nam je porastao 4x, vreme na sajtu duplo, i ljudi se vraćaju sami — bez dodatnog marketinga.',
    'results.testimonials.daniellewolfe': 'Pre toga smo trošili sate na beleške, follow-up emailove i pripremu sesija. Danas? Sve to se dešava automatski. Tvoj sistem pretvara svaku coaching sesiju u jasan akcioni plan, šalje follow-up klijentu i predlaže sledeće korake. Moj fokus je sada 100% na klijentu – a ne na logistici. Klijenti to osećaju – i rezultati su dublji.',
    'results.testimonials.daniellewolfe.result': '70% manje vremena u operativi, više dubinskih transformacija u kraćem vremenu.',
    'results.testimonials.rashelleisip': 'Paradoks je da sam kao productivity coach bila zatrpana taskovima. Tvoj sistem je sinhronizovao sve: sastanke, emailove, taskove i planere – i sada imam sistem koji i moji klijenti zavide.',
    'results.testimonials.rashelleisip.result': '+3h oslobođenog vremena dnevno, +1 dodatni klijent nedeljno.',
    'results.testimonials.bisilabokoko': 'Pre, svaki novi lead značio je 10 minuta manuelne komunikacije. Sada moj sistem zna ko je lead, odakle dolazi i automatski šalje personalizovani odgovor u mom tonu.',
    'results.testimonials.bisilabokoko.result': '40% manje vremena na komunikaciju, +28% više kvalifikovanih poziva.',
    'results.testimonials.cathywhite': 'Naš PR tim je u haosu žonglirao događaje, sadržaj i medije. Tvoj AI sistem sada piše initial draftove, šalje podsetnike i sinhronizuje tim.',
    'results.testimonials.cathywhite.result': 'Duplo više kampanja sa istim brojem ljudi.',
    'results.testimonials.ramahluwalia': 'Pre smo za analize koristili 3 alata i 2 analitičara. Sada dobijamo AI generisane uvide u realnom vremenu.',
    'results.testimonials.ramahluwalia.result': '-65% vremena za pripremu analiza, +32% brže donošenje investicionih odluka.',
    'results.testimonials.zachwalsh': 'Radimo sa hiljadama transakcija dnevno – pre toga su propusti i greške bile neizbežne. Sada nas tvoj sistem upozori pre nego što se nešto desi.',
    'results.testimonials.zachwalsh.result': '-80% operativnih incidenata.',
    'results.testimonials.alejandrolitovsky': 'Tvoj AI alat nam je skratio analizu podataka za 60% i omogućio nam da reagujemo dok su druge firme još u Excelu.',
    'results.testimonials.alejandrolitovsky.result': '3x brži strateški odgovori.',
    'results.testimonials.conorsvensson': 'Ručna analiza smart kontrakata nas je usporavala i izlagala riziku. Tvoj sistem to sada radi u realnom vremenu, bez greške.',
    'results.testimonials.conorsvensson.result': '-90% vremena za inspekciju, +300% više poverenja investitora.',
    'results.testimonials.mustafasiddiqui': 'Tvoj alat je eliminisao ručnu analizu i generiše najvažnije uvide odmah.',
    'results.testimonials.mustafasiddiqui.result': '+22% više uspešno zatvorenih prilika uz kraći decision-making ciklus.',
    'contact.title': 'Kontaktirajte Nas',
    'contact.subtitle': 'Razgovarajmo o Vašoj AI Strategiji',
    'contact.name': 'Ime',
    'contact.email': 'Email',
    'contact.message': 'Poruka',
    'contact.submit': 'Pošalji Poruku',
    'contact.success': 'Poruka uspešno poslata!',
    'contact.error': 'Greška pri slanju poruke. Pokušajte ponovo.',
    'footer.rights': '© 2023 AixonTech. Sva Prava Zadržana',
    'footer.privacy': 'Politika Privatnosti',
    'footer.terms': 'Uslovi Korišćenja',
    'footer.email': 'main@aixontech.com',
    'multistepForm.intro.title': "Zakaži razgovor",
    'multistepForm.intro.text': "Ako razmišljate o saradnji, ovo je prvi korak. Odgovorite na nekoliko kratkih pitanja i izaberite termin koji vam odgovara.",
    'multistepForm.intro.startButton': "Počni",
    'multistepForm.intro.disclaimer': "Traje ~1 minut i 30 sekundi",
    'multistepForm.step1.question': "Koji tip biznisa vodite?",
    'multistepForm.step1.option.service': "Usluge",
    'multistepForm.step1.option.ecommerce': "E-commerce",
    'multistepForm.step1.option.software': "Softver",
    'multistepForm.step1.option.brickAndMortar': "Fizička prodavnica",
    'multistepForm.step1.option.other': "Ostalo (unesite)",
    'multistepForm.step1.nextButton': "U redu",
    'multistepForm.step2.question': "Čime se bavite?",
    'multistepForm.step2.subtext': "Tri rečenice ili manje. Na primer: \"Pomažem stomatolozima da dobiju više pacijenata putem FB oglasa za 2k–5k€/mesečno.\"",
    'multistepForm.step2.nextButton': "U redu",
    'multistepForm.step3.question': "Tražite li jednokratnu uslugu ili dugoročnu saradnju?",
    'multistepForm.step3.subtext': "Radimo na oba načina — kroz prilagođene projekte ili mesečne pakete sa posebnim pogodnostima.",
    'multistepForm.step3.option.oneTime': "Jednokratni projekat",
    'multistepForm.step3.option.ongoing': "Mesečna usluga",
    'multistepForm.step3.nextButton': "U redu",
    'multistepForm.step4.question': "S čim želite pomoć?",
    'multistepForm.step4.subtext': "Budite što detaljniji. Ovo koristimo za pripremu kako bi naš poziv bio efikasan.",
    'multistepForm.step4.nextButton': "U redu",
    'multistepForm.step5.question': "Koliki je vaš mesečni prihod (EUR)?",
    'multistepForm.step5.option.a': "<10k€",
    'multistepForm.step5.option.b': "10k€–25k€",
    'multistepForm.step5.option.c': "25k€–50k€",
    'multistepForm.step5.option.d': "50k€–100k€",
    'multistepForm.step5.option.e': "100k€–200k€",
    'multistepForm.step5.option.f': "200k€–500k€",
    'multistepForm.step5.option.g': ">500k€",
    'multistepForm.step5.nextButton': "U redu",
    'multistepForm.step6.question': "Vaš web sajt? (ili LinkedIn ako nemate sajt)",
    'multistepForm.step6.nextButton': "U redu",
    'multistepForm.step7.question': "Kako da vas kontaktiramo?",
    'multistepForm.step7.field.firstName': "Ime",
    'multistepForm.step7.field.lastName': "Prezime",
    'multistepForm.step7.field.email': "Email",
    'multistepForm.step7.field.company': "Kompanija",
    'multistepForm.step7.nextButton': "U redu",
    'multistepForm.calendar.title': "Izaberite termin",
    'multistepForm.calendar.subtext': "Na mail dobijate potvrdu rezervacije.",
    'multistepForm.thankYou': "Hvala! Potvrda stiže na vaš email uskoro.",
    'multistepForm.progress': "{{current}} od {{total}}",
    'form.error.required': "Obavezno"
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children,
  initialLanguage = 'en' 
}) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const translate = (key: string, params?: Record<string, string | number>): string => {
    let translation = translations[language][key as keyof typeof translations[typeof language]] || key;
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation.replace(`{{${key}}}`, String(value));
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage,
        t: translate
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};