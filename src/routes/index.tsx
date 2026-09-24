import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/youdes/LegacyPage";
import { homePage } from "@/content/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YouDesing — Identidade visual e marketing" },
      { name: "description", content: "A YouDesing cria logos, identidade visual e marketing para negócios que estão começando." },
      { property: "og:title", content: "YouDesing — Identidade visual e marketing" },
      { property: "og:description", content: "Marcas prontas para competir desde o primeiro dia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LegacyPage {...homePage} pageClass="home-page" />;
}
