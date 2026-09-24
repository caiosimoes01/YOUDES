import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { verticeContabilidadePage } from "@/content/verticeContabilidade";

export const Route = createFileRoute("/cases/vertice-contabilidade")({
  head: () => ({ meta: meta("Vértice Contabilidade", "Identidade sóbria e clara criada pela YouDesing para serviços financeiros.") }),
  component: () => <LegacyPage {...verticeContabilidadePage} pageClass="case-vertice" />,
});
function meta(name: string, description: string) { return [{ title: `${name} — YouDesing` }, { name: "description", content: description }, { property: "og:title", content: `${name} — YouDesing` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }]; }