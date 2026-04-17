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
];

export function getThemeById(id: string): Theme | undefined {
  return themes.find(t => t.id === id);
}
