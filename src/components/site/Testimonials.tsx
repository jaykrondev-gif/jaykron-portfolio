import { useState, useEffect, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import arjun from "@/assets/arjun-verma.png";
import rohan from "@/assets/avatar-rohan.jpg";
import steve from "@/assets/steve.png";
import colin from "@/assets/colin-barnaby.jpg";
import vikram from "@/assets/vikram.png";
import evie from "@/assets/evie.png";

const items = [
    {
    text: "Our old site was slow and outdated. Ajay rebuilt it from scratch and our bounce rate dropped within the first week.",
    name: "Vikram Desai",
    role: "Owner, Desai & Sons",
    avatar: vikram,
  },
  {
    text: "Ajay is a fantastic developer! He understood our requirements perfectly and delivered a high-quality website on time.",
    name: "Rohan Mehta",
    role: "Founder, Finace",
    avatar: rohan,
  },
  {
    text: "Professional, reliable and highly skilled. I will definitely work with Ajay again on future projects.",
    name: "Arjun Verma",
    role: "CEO, Taskflow",
    avatar: arjun,
  },
  {
    text: "Ajay took a vague idea and turned it into a clean, working product faster than I expected. Communication was clear at every step.",
    name: "Evie Brooks",
    role: "Founder, Studio Loom",
    avatar: evie,
  },
  {
    text: "We needed quick turnaround without cutting corners on quality. Ajay delivered both — the site loads fast and looks premium.",
    name: "Steve William",
    role: "Co-founder, Vertex Retail",
    avatar: steve,
  },
  {
    text: "What stood out was how well he handled feedback. Every revision came back better than we asked for.",
    name: "Colin Barnaby",
    role: "Product Lead, Northbridge",
    avatar: colin,
  },
];

export function Testimonials() {
  const visibleCount = 3;
  const total = items.length;

  const slides = [...items, ...items.slice(0, visibleCount)];

  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const isResetting = useRef(false);
  const isHovered = useRef(false);

  const cardWidthPercent = 100 / visibleCount;

  const next = () => {
    if (isResetting.current || isHovered.current) return;
    setIndex((curr) => curr + 1);
  };

  const prev = () => {
    if (isResetting.current) return;
    setIndex((curr) => (curr <= 0 ? total - 1 : curr - 1));
  };

  const handleNextClick = () => {
    if (isResetting.current) return;
    setIndex((curr) => curr + 1);
  };

  const goTo = (i: number) => {
    if (isResetting.current) return;
    setIndex(i);
  };

  useEffect(() => {
    if (index === total) {
      isResetting.current = true;
      const timeout = setTimeout(() => {
        setWithTransition(false);
        setIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [index, total]);

  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        setWithTransition(true);
        isResetting.current = false;
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const dotCount = total;

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

        <div
          className="mt-12 relative"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          <div className="overflow-hidden">
            <div
              className={`flex ${
                withTransition ? "transition-transform duration-500 ease-in-out" : ""
              }`}
              style={{
                transform: `translateX(-${index * cardWidthPercent}%)`,
              }}
            >
              {slides.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="px-2 flex-shrink-0"
                  style={{ width: `${cardWidthPercent}%` }}
                >
                  <figure className="h-full flex flex-col rounded-lg border border-border bg-card p-6 sm:p-7">
                    <Quote className="h-5 w-5 text-primary" />
                    <blockquote className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
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
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 sm:translate-x-12 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                i % total === index % total ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}