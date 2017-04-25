export const FILTER_COURSES = 'courses/FILTER'

export function filterCourses(searchTerm: string) {
  return {
    type: FILTER_COURSES,
    searchTerm
  }
}