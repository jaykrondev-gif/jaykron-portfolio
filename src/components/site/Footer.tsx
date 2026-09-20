import { Github, Heart, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const quickLinks = ["Home", "About", "Work", "Services", "Contact"];
const services = [
  "Website Development",
  "Landing Pages",
  "E-commerce Websites",
  "Web Applications",
  "Website Maintenance",
];

export function Footer() {
  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-border bg-card p-6 sm:p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Let's work together and create something amazing.
            </p>
          </div>
          <a
            href="mailto:jaykron.dev@gmail.com"
            className="rounded-md bg-primary px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            LET'S TALK ↗
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="text-xl font-bold text-foreground">AJ</p>
            <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-muted-foreground">
              I build modern and high-performing websites that help businesses succeed
              online.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Github, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-foreground">
              QUICK LINKS
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-foreground">
              SERVICES
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-foreground">
              LET'S CONNECT
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> jaykron.dev@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> +91 89767 47475
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Ajay Jaykar. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> by Jaykron
          </p>
        </div>
      </div>
    </footer>
  );
}
