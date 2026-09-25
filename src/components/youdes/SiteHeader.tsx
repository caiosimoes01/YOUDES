import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const primaryLinks = [
  { to: "/" as const, label: "Início" },
  { to: "/portfolio" as const, label: "Portfólio" },
  { to: "/servicos" as const, label: "Serviços" },
  { to: "/processos" as const, label: "Processos" },
  { to: "/planos" as const, label: "Planos" },
];

const caseLinks = [
  { to: "/cases/bloco-studio" as const, label: "Bloco Studio" },
  { to: "/cases/lume-atelie" as const, label: "Lume Ateliê" },
  { to: "/cases/nomade-coworking" as const, label: "Nômade Coworking" },
  { to: "/cases/pulso-fitness" as const, label: "Pulso Fitness" },
  { to: "/cases/raiz-cafe" as const, label: "Raiz Café" },
  { to: "/cases/vertice-contabilidade" as const, label: "Vértice Contabilidade" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-brand" onClick={() => setOpen(false)}>
          <img src="/brand/youdes-logo.png" alt="YOUDES" className="site-brand__logo" />
        </Link>

        <nav className={open ? "site-nav site-nav--open" : "site-nav"} aria-label="Navegação principal">
          {primaryLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "site-nav__link site-nav__link--active" }}
              inactiveProps={{ className: "site-nav__link" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <details className="site-cases">
            <summary>
              Cases <ChevronDown aria-hidden="true" />
            </summary>
            <div className="site-cases__menu">
              {caseLinks.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="site-menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
    </header>
  );
}