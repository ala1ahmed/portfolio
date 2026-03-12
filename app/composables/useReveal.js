// app/composables/useReveal.js

/**
 * useReveal — attaches an IntersectionObserver to all `.reveal` elements.
 *
 * Usage:
 *   const { init } = useReveal()
 *   onMounted(init)
 */
export function useReveal(containerRef) {
  let observer = null

  function init() {
    if (import.meta.server) return

    const root = containerRef?.value ?? document

    observer?.disconnect()
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )

    root.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }

  onBeforeUnmount(() => observer?.disconnect())

  return { init }
}
