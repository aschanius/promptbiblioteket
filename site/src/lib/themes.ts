export interface Theme {
  id: string;
  title: string;
  description: string;
  tags: string[];
  why: string;
}

/**
 * Teman grupperar prompts tvärs yrkeskategorier. Varje tema filtrerar på en
 * uppsättning taggar — samma prompt kan därför ingå i flera teman.
 */
export const themes: Theme[] = [
  {
    id: 'ai-styrning',
    title: 'AI-styrning i organisationen',
    description: 'Prompts som hjälper organisationer styra AI-användning: policy, compliance, utbildning och kommunikation.',
    tags: ['ai-styrning', 'GDPR', 'compliance', 'IMY', 'AI-verktyg', 'personuppgifter'],
    why: 'Från februari 2025 kräver EU AI Act tillräcklig AI-kompetens hos alla som arbetar med AI. Ämnet sträcker sig över HR, juridik och utbildning — därför finns det som tema, inte egen kategori.',
  },
  {
    id: 'ai-kundkommunikation',
    title: 'AI & kundkommunikation',
    description: 'Prompts som hjälper yrkesverksamma bemöta kunder professionellt: mejl, samtal, svåra besked och återkoppling över olika kanaler.',
    tags: ['kundkommunikation', 'mejl', 'ton', 'svar', 'kundmöte', 'kund', 'kommunikation'],
    why: 'Kundbemötande är en kärnuppgift i roller från receptionist till VD. Tonen sätter skillnaden mellan behållen kund och tappad affär. Prompts fångar upp återkommande kommunikationssituationer som finns i alla branscher.',
  },
  {
    id: 'ai-dokumentation',
    title: 'AI & dokumentation',
    description: 'Prompts för strukturerad dokumentation: sammanfatta, extrahera nyckelinformation, skriva protokoll, journaler och rapporter.',
    tags: ['dokumentation', 'sammanfattning', 'extraktion', 'protokoll', 'journal', 'rapport'],
    why: 'Dokumentation är en av de uppgifter där AI ger störst tidsvinst. Från SBAR-överlämning i vården till mötesprotokoll i administrationen — samma mönster återkommer i olika kontexter. Temat samlar prompts som gör dokumentation till en naturlig del av arbetet i stället för ett efterarbete.',
  },
  {
    id: 'ai-analys',
    title: 'AI & analys',
    description: 'Prompts som strukturerar analytiskt arbete: mönsterigenkänning, avvikelsedetektering, rapportering och datadrivna insikter.',
    tags: ['analys', 'data', 'mönster', 'insikt', 'avvikelse', 'rapport'],
    why: 'Att tolka data är en kompetens som breddar sig från ekonomi och BI till alla roller som fattar beslut. Prompts hjälper strukturera analytiskt tänkande oavsett om det gäller budget, trender i kundfeedback eller avvikelser i produktionen.',
  },
];

export function getThemeById(id: string): Theme | undefined {
  return themes.find(t => t.id === id);
}
