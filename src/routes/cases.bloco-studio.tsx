import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { blocoStudioPage } from "@/content/blocoStudio";

export const Route = createFileRoute("/cases/bloco-studio")({
  head: () => ({ meta: meta("Bloco Studio", "Identidade modular criada pela Youdes para uma software house.") }),
  component: () => <LegacyPage {...blocoStudioPage} pageClass="case-bloco" />,
});
function meta(name: string, description: string) { return [{ title: `${name} — Youdes` }, { name: "description", content: description }, { property: "og:title", content: `${name} — Youdes` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }]; }