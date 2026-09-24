import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { servicosPage } from "@/content/servicos";

export const Route = createFileRoute("/servicos")({
  head: () => ({ meta: [
    { title: "Serviços — YouDesing" },
    { name: "description", content: "Serviços de branding, marketing visual e identidade para negócios em fase inicial." },
    { property: "og:title", content: "Serviços — YouDesing" },
    { property: "og:description", content: "Branding, marketing visual, aplicações, naming e rebranding." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegacyPage {...servicosPage} pageClass="services-page" />,
});