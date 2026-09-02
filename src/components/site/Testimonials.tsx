import { Quote } from "lucide-react";
import arjun from "@/assets/avatar-arjun.jpg";
import rohan from "@/assets/avatar-rohan.jpg";
import sneha from "@/assets/avatar-sneha.jpg";

const items = [
  {
    text: "Ajay is a fantastic developer! He understood our requirements perfectly and delivered a high-quality website on time.",
    name: "Rohan Mehta",
    role: "Founder, Finace",
    avatar: rohan,
  },
  {
    text: "Excellent work and great communication. The website looks amazing and performs even better.",
    name: "Sneha Kapoor",
    role: "Marketing Head, Furniro",
    avatar: sneha,
  },
  {
    text: "Professional, reliable and highly skilled. I will definitely work with Ajay again on future projects.",
    name: "Arjun Verma",
    role: "CEO, Taskflow",
    avatar: arjun,
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-primary sm:text-sm">
            TESTIMONIALS
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            What clients <span className="text-primary">say about me</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-lg border border-border bg-card p-6 sm:p-7"
            >
              <Quote className="h-5 w-5 text-primary" />
              <blockquote className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === 0 ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
