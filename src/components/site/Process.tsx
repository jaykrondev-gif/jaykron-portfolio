import { Code2, FileText, Rocket, Search, Wand2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "01. Discover",
    text: "Understanding your goals, requirements and target audience.",
  },
  {
    icon: FileText,
    title: "02. Plan",
    text: "Planning the structure, features and user experience.",
  },
  {
    icon: Wand2,
    title: "03. Design",
    text: "Creating clean and modern designs that align with your brand.",
  },
  {
    icon: Code2,
    title: "04. Develop",
    text: "Building fast, responsive and functional websites with clean code.",
  },
  {
    icon: Rocket,
    title: "05. Launch",
    text: "Testing, optimising and deploying your website successfully.",
  },
];

export function Process() {
  return (
    <section id="services" className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-6">
        <p className="text-xs font-medium tracking-[0.2em] text-primary sm:text-sm">
          MY PROCESS
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
          My development <span className="text-primary">process</span>
        </h2>
        <div className="relative mt-14 md:mt-16">
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-border md:block" />
          <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5">
            {steps.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
