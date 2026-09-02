import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Skills } from "@/components/site/Skills";
import { Testimonials } from "@/components/site/Testimonials";

const title = "Ajay Jaykar — Website Developer";
const description =
  "I build fast, responsive and modern websites that help businesses grow online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
