import { useState } from "react";
import agency from "@/assets/project-agency.jpg";
import blog from "@/assets/project-blog.jpg";
import finace from "@/assets/project-finace.jpg";
import furniro from "@/assets/project-furniro.jpg";
import portfolio from "@/assets/project-portfolio.jpg";
import taskflow from "@/assets/project-taskflow.jpg";

const filters = ["All", "Business", "E-commerce", "Landing Pages", "Web Apps"];

const projects = [
  {
    title: "Finace - Business Website",
    image: finace,
    tags: ["Business", "Landing Page"],
    filters: ["Business", "Landing Pages"],
  },
  {
    title: "Furniro - E-commerce Store",
    image: furniro,
    tags: ["E-commerce", "Web Design"],
    filters: ["E-commerce"],
  },
  {
    title: "Taskflow - Project Management App",
    image: taskflow,
    tags: ["Web App", "Dashboard"],
    filters: ["Web Apps"],
  },
  {
    title: "Creative Agency Website",
    image: agency,
    tags: ["Landing Page"],
    filters: ["Landing Pages"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    tags: ["Personal"],
    filters: ["Landing Pages"],
  },
  {
    title: "Blog Website",
    image: blog,
    tags: ["Blog"],
    filters: ["Web Apps"],
  },
];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.filters.includes(active));

  return (
    <section id="work" className="bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-primary sm:text-sm">
            PORTFOLIO
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Some of my <span className="text-primary">recent work</span>
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm transition-colors ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={960}
                height={640}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#work"
            className="inline-block rounded-md border border-primary/60 px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-foreground transition-colors hover:bg-primary/15"
          >
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
}
