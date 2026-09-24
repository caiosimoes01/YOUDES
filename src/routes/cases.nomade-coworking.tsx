import { createFileRoute } from "@tanstack/react-router";
import { LegacyPage } from "@/components/youdes/LegacyPage";
import { nomadeCoworkingPage } from "@/content/nomadeCoworking";

export const Route = createFileRoute("/cases/nomade-coworking")({
  head: () => ({ meta: meta("Nômade Coworking", "Sistema visual flexível criado pela YouDesing para um espaço de trabalho contemporâneo.") }),
  component: () => <LegacyPage {...nomadeCoworkingPage} pageClass="case-nomade" />,
});
function meta(name: string, description: string) { return [{ title: `${name} — YouDesing` }, { name: "description", content: description }, { property: "og:title", content: `${name} — YouDesing` }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }]; }