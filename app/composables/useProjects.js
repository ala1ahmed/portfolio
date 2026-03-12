// app/composables/useProjects.js
import { projects, getProjectBySlug, getAdjacentProjects } from '~/data/projects'

/**
 * useProjects — access the full projects list reactively.
 * Swap `projects` for a $fetch call here if you later add an Express API.
 */
export function useProjects() {
  const allProjects = computed(() => projects)
  const liveProjects = computed(() => projects.filter(p => p.status === 'live'))
  return { allProjects, liveProjects }
}

/**
 * useProject — single project lookup by slug.
 * Throws a 404 if the slug is unknown so Nuxt renders the error page.
 */
export function useProject(slug) {
  const project = computed(() => {
    const s = unref(slug)
    const found = getProjectBySlug(s)
    if (!found) throw createError({ statusCode: 404, message: `Project "${s}" not found` })
    return found
  })

  const adjacent = computed(() => getAdjacentProjects(unref(slug)))

  return { project, adjacent }
}
