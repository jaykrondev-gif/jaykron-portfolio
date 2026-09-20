import { Github, Heart, Instagram, Linkedin, Mail, MapPin, Phone, ChevronRight, Star, Info,
 Twitter } from "lucide-react";

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
        {/* <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-border bg-card p-6 sm:p-8 md:flex-row md:items-center">
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
        </div> */}

{/* <div className="mt-8 flex flex-col items-start gap-6 rounded-lg border border-primary/30 bg-primary/5 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4 sm:items-center">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Star className="h-5 w-5 fill-primary" />
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-primary sm:text-sm">
                MY GOAL IS SIMPLE
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                Your satisfaction <span className="text-primary">comes first.</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Let's work together and create a website you'll be proud of.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex flex-shrink-0 items-center gap-1 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            LET'S TALK <ChevronRight className="h-4 w-4" />
          </a>
        </div> */}

        {/* <div className="mt-6 flex justify-center sm:mt-8">
          <div className="flex max-w-2xl items-start gap-2">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
            <p className="text-xs text-muted-foreground sm:text-sm">
              The 30-day money-back guarantee applies only to agreed project
              requirements. It does not cover changes in scope, additional
              features, or third-party costs (e.g. domain, hosting, premium
              plugins/themes).
            </p>
          </div>
        </div> */}

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            {/* <p className="text-xl font-bold text-foreground">AJ</p> */}
            <p className="relative inline-block text-4xl font-black tracking-wider text-foreground">
          Jay<span className="text-primary">Kron</span><span className="text-5xl ms-1 leading-[0] inline-block align-baseline">.</span>
        </p>
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
