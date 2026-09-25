import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { processosPage } from "@/content/processos";

export const Route = createFileRoute("/processos")({
  head: () => ({ meta: [
    { title: "Processo — Youdes" },
    { name: "description", content: "Como funciona o processo de criação de marca da Youdes, do briefing à entrega final." },
    { property: "og:title", content: "Processo — Youdes" },
    { property: "og:description", content: "Conheça as seis etapas do processo criativo da Youdes." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegacyPage {...processosPage} pageClass="process-page" />,
});