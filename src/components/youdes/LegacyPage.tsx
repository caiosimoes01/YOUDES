import { useEffect } from "react";

import { ContactFooter } from "./ContactFooter";
import { SiteHeader } from "./SiteHeader";

type LegacyPageProps = {
  css: string;
  markup: string;
  pageClass?: string;
};

export function LegacyPage({ css, markup, pageClass = "" }: LegacyPageProps) {
  const contentWithoutLegacyFooter = markup.replace(/<footer\b[\s\S]*?<\/footer>/gi, "");

  useEffect(() => {
    const revealItems = document.querySelectorAll(".legacy-page .reveal");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [contentWithoutLegacyFooter]);

  return (
    <>
      <style>{css}</style>
      <SiteHeader />
      <div
        className={`legacy-page ${pageClass}`.trim()}
        dangerouslySetInnerHTML={{ __html: contentWithoutLegacyFooter }}
      />
      <ContactFooter />
    </>
  );
}