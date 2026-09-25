import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { raizCafePage } from "@/content/raizCafe";

export const Route = createFileRoute("/cases/raiz-cafe")({
  head: () => ({ meta: meta("Raiz Café", "Identidade acolhedora criada pela Youdes para uma cafeteria de bairro.") }),
  component: () => <LegacyPage {...raizCafePage} pageClass="case-raiz" />,
});
function meta(name: string, description: string) { return [{ title: `${name} — Youdes` }, { name: "description", content: description }, { property: "og:title", content: `${name} — Youdes` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }]; }