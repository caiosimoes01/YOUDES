import {
  Facebook,
  Instagram,
  MessageCircle,
  Music2,
  X,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/OFICIALYOURDESING",
    icon: Instagram,
  },
  { label: "X", href: "https://x.com/OFICIALYOURDESING", icon: X },
  {
    label: "Facebook",
    href: "https://www.facebook.com/OFICIALYOURDESING",
    icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@OFICIALYOURDESING",
    icon: Music2,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@OFICIALYOURDESING",
    icon: Youtube,
  },
] as const;

export function ContactFooter() {
  return (
    <footer className="contact-footer" id="contato">
      <div className="contact-footer__inner">
        <div className="contact-footer__identity">
          <strong>YOUDES</strong>
          <span>© 2026 Youdes. Todos os direitos reservados.</span>
        </div>

        <div className="contact-footer__channels">
          <a
            className="contact-footer__handle"
            href="https://www.instagram.com/OFICIALYOURDESING"
            target="_blank"
            rel="noreferrer"
          >
            @OFICIALYOURDESING
          </a>
          <div className="contact-footer__socials" aria-label="Redes sociais da YOUDES">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Button key={label} asChild variant="ghost" size="icon">
                <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                  <Icon aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>
          <Button asChild className="contact-footer__whatsapp">
            <a href="https://wa.me/551112345678" target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              WhatsApp (11) 1234.5678
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}