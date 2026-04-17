import { getCollection } from 'astro:content';

/**
 * Hämta alla flöden som innehåller en viss prompt (för badge på prompt-sida).
 */
export async function getFlowsForPrompt(promptSlug: string) {
  const allFlows = await getCollection('flows');
  return allFlows.filter(flow =>
    flow.data.steps.some(step => step.prompt === promptSlug)
  );
}

/**
 * Nivå-etiketter på svenska.
 */
export const levelLabels: Record<string, string> = {
  nyborjare: 'Nybörjare',
  medel: 'Medel',
  expert: 'Expert',
};
