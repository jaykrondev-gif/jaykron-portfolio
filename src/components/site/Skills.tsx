import {
  CssIcon,
  GithubIcon,
  HtmlIcon,
  JsIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  TailwindIcon,
} from "./TechIcons";

const skills = [
  { name: "HTML", Icon: HtmlIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "JavaScript", Icon: JsIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "Git & GitHub", Icon: GithubIcon },
];

export function Skills() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-6">
        <p className="text-xs font-medium tracking-[0.2em] text-primary sm:text-sm">
          MY SKILLS
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
          Technologies <span className="text-primary">I work with</span>
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4 md:mt-14 md:grid-cols-8">
          {skills.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <Icon className="h-11 w-11" />
              <span className="text-sm text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
