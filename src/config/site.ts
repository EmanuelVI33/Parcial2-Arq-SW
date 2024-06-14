export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Microservicios",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    // {
    //   title: "Home",
    //   href: "/",
    // },
    {
      title: "Categorías",
      href: "/categories",
    },
    {
      title: "Productos",
      href: "/products",
    },
    {
      title: "Pedidos",
      href: "/orders",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}