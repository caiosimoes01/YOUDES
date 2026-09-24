import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { pulsoFitnessPage } from "@/content/pulsoFitness";

export const Route = createFileRoute("/cases/pulso-fitness")({
  head: () => ({ meta: meta("Pulso Fitness", "Identidade de energia e ritmo criada pela YouDesing para um estúdio funcional.") }),
  component: () => <LegacyPage {...pulsoFitnessPage} pageClass="case-pulso" />,
});
function meta(name: string, description: string) { return [{ title: `${name} — YouDesing` }, { name: "description", content: description }, { property: "og:title", content: `${name} — YouDesing` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }]; }