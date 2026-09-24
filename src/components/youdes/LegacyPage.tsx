import { useEffect } from "react";

import { SiteHeader } from "./SiteHeader";

type LegacyPageProps = {
  css: string;
  markup: string;
  pageClass?: string;
};

export function LegacyPage({ css, markup, pageClass = "" }: LegacyPageProps) {
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
  }, [markup]);

  return (
    <>
      <style>{css}</style>
      <SiteHeader />
      <div
        className={`legacy-page ${pageClass}`.trim()}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </>
  );
}