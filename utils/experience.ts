/**
 * Calculate years of experience from a start year to now.
 * @param startYear - The year the career started (e.g. 2021)
 * @returns Number of full years of experience
 */
export function getYearsOfExperience(startYear: number = 2021): number {
  const now = new Date()
  const start = new Date(startYear, 5, 1) // June 2021 (month is 0-indexed)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000))
}
