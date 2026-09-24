import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { lumeAteliePage } from "@/content/lumeAtelie";

export const Route = createFileRoute("/cases/lume-atelie")({
  head: () => ({ meta: meta("Lume Ateliê", "Identidade orgânica e leve criada pela YouDesing para uma marca de moda autoral.") }),
  component: () => <LegacyPage {...lumeAteliePage} pageClass="case-lume" />,
});
function meta(name: string, description: string) { return [{ title: `${name} — YouDesing` }, { name: "description", content: description }, { property: "og:title", content: `${name} — YouDesing` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }]; }