import {
  Monitor,
  Shield,
  RefreshCw,
  Wrench,
  BarChart3,
  FileText,
  Star,
  ChevronRight,
  Info,
} from "lucide-react";

const guarantees = [
  {
    icon: Monitor,
    title: "Build First, Pay Later",
    description:
      "I'll design and develop your website and show you the results first. You only pay when you're satisfied with the final work.",
  },
  {
    icon: Shield,
    title: "Not Satisfied? No Payment",
    description:
      "If the delivered website doesn't meet the agreed requirements, you don't have to make the final payment. Your satisfaction comes first.",
  },
  {
    icon: RefreshCw,
    title: "30-Day Money-Back Guarantee",
    description:
      "If you've made a payment and aren't satisfied within 30 days, you may be eligible for a refund under the agreed terms.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Updates",
    description:
      "I provide ongoing maintenance, bug fixes, content updates, and feature upgrades so your website stays secure and up to date.",
  },
  {
    icon: BarChart3,
    title: "Scale Anytime",
    description:
      "Start with what you need now. You can always add new features or pages later as your business grows.",
  },
  {
    icon: FileText,
    title: "Transparent Communication",
    description:
      "Clear pricing, timelines, and regular updates. No hidden costs, no surprises — just honest and reliable work.",
  },
];

export function WorkWithConfidence() {
  return (
    <section id="promise" className="bg-secondary py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-primary sm:text-sm">
            MY PROMISE
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground sm:mt-4 sm:text-3xl md:text-4xl">
            Work with <span className="text-primary">confidence</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            A simple, risk-free way to get your website. I focus on your
            satisfaction, not just finishing a project.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="rounded-lg border border-border bg-card p-5 sm:p-6 md:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground sm:text-lg">
                {g.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {g.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-6 rounded-lg border border-primary/30 bg-primary/5 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
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
            href="mailto:jaykron.dev@gmail.com"
            className="flex flex-shrink-0 items-center gap-1 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            LET'S TALK <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 flex justify-center sm:mt-8">
          <div className="flex max-w-2xl items-start gap-2">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
            <p className="text-xs text-muted-foreground sm:text-sm">
              The 30-day money-back guarantee applies only to agreed project
              requirements. It does not cover changes in scope, additional
              features, or third-party costs (e.g. domain, hosting, premium
              plugins/themes).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}