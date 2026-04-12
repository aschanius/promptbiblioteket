/**
 * Extract the raw prompt text from a markdown body.
 * Prompts are wrapped in ```txt blocks.
 */
export function extractPromptText(body: string): string {
  const match = body.match(/```(?:txt|text)\n([\s\S]*?)```/);
  return match ? match[1].trim() : '';
}

/**
 * Highlight # headings inside prompt text for display.
 * Returns HTML with spans for styling.
 */
export function highlightPromptHeadings(text: string): string {
  return text
    .split('\n')
    .map(line => {
      if (/^#\s/.test(line)) {
        return `<span class="prompt-heading">${escapeHtml(line)}</span>`;
      }
      return escapeHtml(line);
    })
    .join('\n');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
