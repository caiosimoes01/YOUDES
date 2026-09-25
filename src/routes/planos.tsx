import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { planosPage } from "@/content/planos";

export const Route = createFileRoute("/planos")({
  head: () => ({ meta: [
    { title: "Planos — Youdes" },
    { name: "description", content: "Planos de branding e marketing da Youdes para negócios em diferentes fases." },
    { property: "og:title", content: "Planos — Youdes" },
    { property: "og:description", content: "Escolha o plano de marca ideal para a fase do seu negócio." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegacyPage {...planosPage} pageClass="plans-page" />,
});