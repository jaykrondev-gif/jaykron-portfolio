import { Briefcase, Folder, Zap, Star } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "3+", label: "Years Experience" },
  { icon: Folder, value: "10+", label: "Projects Completed" },
  { icon: Zap, value: "<12h", label: "Response Time" },
  { icon: Star, value: "100%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="bg-secondary py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-6 md:grid-cols-2 md:gap-14">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-primary sm:text-sm">
            ABOUT ME
          </p>
          <h2 className="mt-5 max-w-md text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
            Crafting digital experiences that make an{" "}
            <span className="text-primary">impact.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm a passionate website developer with a focus on creating clean,
            user-friendly and high-performing websites. I enjoy turning ideas into
            real products that solve problems and deliver results.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-md border border-border px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-foreground transition-colors hover:bg-card"
          >
            MORE ABOUT ME
          </a>
        </div>
        <div className="rounded-lg border border-border bg-card/60 p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-1">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/15">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="text-2xl font-semibold text-foreground">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
