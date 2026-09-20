import { Mouse, ChevronRight } from "lucide-react";
import heroPortrait from "@/assets/hero-ajay.png";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background pt-16">
      <div className="pointer-events-none absolute right-[10%] top-20 h-[460px] w-[460px] rounded-full bg-primary/25 blur-[130px]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-14 sm:px-6 md:grid-cols-2 md:pb-28 md:pt-20">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-3">
            <span className="h-4 w-[3px] bg-primary" />
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground sm:text-sm">
              HI, I'M
            </span>
          </div>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Ajay Jaykar
          </h1>
          <p className="mt-4 text-2xl font-medium text-primary md:text-3xl">
            WEBSITE DEVELOPER
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            I build fast, responsive and modern websites that help businesses grow
            online.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-1 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              VIEW MY WORK <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-foreground transition-colors hover:bg-card"
            >
              CONTACT ME
            </a>
          </div>
          <div className="mt-12 flex items-center gap-3 md:mt-16">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
              <Mouse className="h-4 w-4 text-muted-foreground" />
            </span>
            <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
              SCROLL DOWN
            </span>
          </div>
        </div>
        <div className="relative order-1 flex justify-center md:order-2 md:justify-end">
          <div className="pointer-events-none absolute inset-0 m-auto h-[70%] w-[70%] rounded-full bg-primary/30 blur-[90px]" />
          <img
            src={heroPortrait}
            alt="Ajay Jaykar, website developer"
            width={933}
            height={1152}
            className="relative w-[78%] max-w-sm object-contain sm:w-[62%] md:w-full md:max-w-md"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.35) 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 60%, rgba(0,0,0,0.35) 85%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
