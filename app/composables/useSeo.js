// app/composables/useSeo.js

/**
 * useSeo — call once per page to set all meta, OG & Twitter tags.
 *
 * @param {{ title: string, description: string, image?: string, type?: string, path?: string }} opts
 */
export function useSeo(opts) {
  const config = useRuntimeConfig()
  const { siteUrl, siteName, twitterHandle } = config.public

  const fullTitle = opts.title.includes(siteName)
    ? opts.title
    : `${opts.title} — ${siteName}`

  const canonicalUrl = `${siteUrl}${opts.path ?? ''}`

  const ogImage = opts.image
    ? (opts.image.startsWith('http') ? opts.image : `${siteUrl}${opts.image}`)
    : `${siteUrl}/og-default.png`

  useSeoMeta({
    title:              fullTitle,
    description:        opts.description,
    ogTitle:            fullTitle,
    ogDescription:      opts.description,
    ogImage:            ogImage,
    ogImageAlt:         fullTitle,
    ogUrl:              canonicalUrl,
    ogType:             opts.type ?? 'website',
    ogSiteName:         siteName,
    twitterCard:        'summary_large_image',
    twitterTitle:       fullTitle,
    twitterDescription: opts.description,
    twitterImage:       ogImage,
    twitterSite:        twitterHandle,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
  })
}
