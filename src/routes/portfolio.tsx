import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { portfolioPage } from "@/content/portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Portfólio — YouDesing" },
    { name: "description", content: "Marcas e identidades visuais criadas pela YouDesing para negócios em fase inicial." },
    { property: "og:title", content: "Portfólio — YouDesing" },
    { property: "og:description", content: "Conheça os projetos de identidade visual da YouDesing." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegacyPage {...portfolioPage} pageClass="portfolio-page" />,
});