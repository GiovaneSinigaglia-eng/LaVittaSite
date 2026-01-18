import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = ["", "contato", "midia", "quem-somos", "trabalhe-conosco"]

  const staticUrls = staticPages.map((page) => ({
    url: `https://www.lavittacosmeticos.com.br/${page}`,
    lastModified: new Date().toISOString(),
  }))

  return [...staticUrls]
}
