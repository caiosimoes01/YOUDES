import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { portfolioPage } from "@/content/portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Portfólio — Youdes" },
    { name: "description", content: "Marcas e identidades visuais criadas pela Youdes para negócios em fase inicial." },
    { property: "og:title", content: "Portfólio — Youdes" },
    { property: "og:description", content: "Conheça os projetos de identidade visual da Youdes." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegacyPage {...portfolioPage} pageClass="portfolio-page" />,
});