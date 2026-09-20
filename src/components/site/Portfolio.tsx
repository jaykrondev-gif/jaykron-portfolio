import { useState } from "react";
import Arden from "@/assets/arden2.png";
import blog from "@/assets/blog.jpg";
import Fitness from "@/assets/apex_fitness.png";
import Astik from "@/assets/astik_mane_2.png";
import biztrox from "@/assets/biztrox.png";
import TrueEye from "@/assets/true_eye_2.png";

const filters = ["All", "Business", "E-commerce", "Landing Pages", "Web Apps"];

const projects = [
  {
    title: "Apex Fitness - Fitness Website",
    image: Fitness,
    tags: ["Business", "Blog"],
    filters: ["Business", "Web Apps"],
    link: "https://ajayjkr67.github.io/fitness/",
  },
  {
    title: "Astik Mane - Clinic Website",
    image: Astik,
    tags: ["Landing Page", "Blog"],
    filters: ["Landing Pages"],
    link: "https://www.astikpsychiatrist.com/",
  },
  {
    title: "Arden E-Com Website",
    image: Arden,
    tags: ["Business", "Blog"],
    filters: ["Business", "E-commerce", "Web Apps"],
    link: "https://ajayjkr67.github.io/arden/",
  },
  {
    title: "True Eye - Clinic Website",
    image: TrueEye,
    tags: ["Landing Pages"],
    filters: ["Landing Pages"],
    link: "https://ajayjkr67.github.io/clinic_test/",
  },
  {
    title: "Biztrox - Business",
    image: biztrox,
    tags: ["Personal"],
    filters: ["Business", "Web Apps"],
    link: "https://ajayjkr67.github.io/biztrox/",
  },
  {
    title: "Blog Website",
    image: blog,
    tags: ["Blog"],
    filters: ["Web Apps"],
    link: "https://example.com",
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
            My <span className="text-primary">Showcase</span>
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
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-border bg-card transition-transform hover:-translate-y-1"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={960}
                height={640}
                className="w-full object-cover"
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
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#work"
            className="inline-block rounded-md border border-primary/60 px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-foreground transition-colors hover:bg-primary/15"
          >
            VIEW FULL SHOWCASE
          </a>
        </div>
      </div>
    </section>
  );
}