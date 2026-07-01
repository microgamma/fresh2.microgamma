import { Marked } from "marked";

const marked = new Marked({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Convert line breaks to <br>
});

/**
 * Parse markdown text to HTML
 * @param markdown - Raw markdown text
 * @returns HTML string
 */
export function parseMarkdown(markdown: string): string {
  if (!markdown) return "";

  try {
    const html = marked.parse(markdown) as string;
    return html;
  } catch (error) {
    console.error("Error parsing markdown:", error);
    // Fallback to plain text with HTML escaping
    return escapeHtml(markdown).replace(/\n/g, "<br>");
  }
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
