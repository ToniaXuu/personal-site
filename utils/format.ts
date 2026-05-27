/**
 * Format a date string to Chinese locale (e.g. "2026年5月27日")
 */
export function formatDate(d?: string | Date): string {
  if (!d) return ''
  const date = new Date(d)
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
