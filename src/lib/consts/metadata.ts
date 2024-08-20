export const METADATA = {
  title: {
    default: "CmCol",
    template: "%s | CmCol",
  },
  description: "CmCol's personal website.",
  author: "CmCol",
  openGraph: {
    description: "CmCol's personal website.",
    type: "website",
    locale: "es-ES",
    url: import.meta.env.SITE_URL,
    image: import.meta.env.SITE_URL + "/cmcol.webp",
  },
} as const;
