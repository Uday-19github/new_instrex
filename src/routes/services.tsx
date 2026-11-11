import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import insightsArt from "@/assets/art-market-research.png";
import strategyArt from "@/assets/art-growth-blueprint.png";
import executionArt from "@/assets/art-strategy-implementation.png";
import bridgeImage from "@/assets/bridge-insight-impact.jpg";
import { Reveal } from "@/components/site/Reveal";
import { FeatureBand, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Market Research, Strategy & Execution" },
      {
        name: "description",
        content:
          "Market Research, Business Strategy and Strategy Execution services — insight-led consulting for measurable growth.",
      },
      { property: "og:title", content: "Services — Market Research, Strategy & Execution" },
      {
        property: "og:description",
        content: "Market Research. Business Strategy. Strategy Execution.",
      },
    ],
  }),
  component: Services,
});

function KnowMore({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 font-sans text-[0.7rem] tracking-[0.2em] text-gold uppercase"
    >
      Know More
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        image={bridgeImage}
        imageAlt="From insight to impact across consulting services"
      />

      <FeatureBand
        eyebrow="Insights"
        title={
          <span className="block whitespace-nowrap text-[clamp(0.68rem,2.8vw,1.3rem)]">
            Market Research and Analysis
          </span>
        }
        image={insightsArt}
        imageAlt="A lens held over a city grid, revealing market data points"
      >
        <div className="rounded-2xl border border-hairline bg-background/40 p-4 sm:p-5">
          <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
            <li>Consumer needs and preference mapping</li>
            <li>Brand equity, positioning, and performance analysis</li>
            <li>Sales and distribution channel insights</li>
            <li>Business and B2B research</li>
            <li>Competitor benchmarking and evaluation</li>
          </ul>
        </div>
        <KnowMore to="/market-research" />
      </FeatureBand>

      <FeatureBand
        eyebrow="Strategy"
        title={
          <span className="block whitespace-nowrap text-[clamp(0.68rem,2.8vw,1.3rem)]">
            Business Growth Blueprint
          </span>
        }
        image={strategyArt}
        imageAlt="A glowing piece completing a transparent business blueprint"
        flip
        tone="ink"
      >
        <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
          <li>Business modelling and growth blueprint for sustained value creation</li>
          <li>
            Go to market strategy
            <ul className="mt-1 list-[circle] space-y-1 pl-5 marker:text-gold">
              <li>Product and pricing strategy</li>
              <li>Sales and distribution planning</li>
              <li>Brand strategy and marketing communication planning</li>
            </ul>
          </li>
          <li>Mid-term and long-term financial planning</li>
          <li>Market and financial feasibility for new ventures</li>
        </ul>
        <KnowMore to="/business-strategy" />
      </FeatureBand>

      <FeatureBand
        eyebrow="Execution"
        title={
          <span className="block whitespace-nowrap text-[clamp(0.68rem,2.8vw,1.3rem)]">
            Strategy Implementation, Facilitation &amp; Funding Support
          </span>
        }
        image={executionArt}
        imageAlt="Hands assembling gears over a city blueprint"
      >
        <div>
          <p className="prose-body font-semibold text-foreground">Strategy Implementation</p>
          <p className="prose-body mt-2">
            Facilitating execution through a network of trusted specialist partners, including
            marketing specialists, sales professionals, finance experts, and investment bankers.
          </p>
        </div>
        <div>
          <p className="prose-body font-semibold text-foreground">Funding Support</p>
          <p className="prose-body mt-2">Connecting ambitious businesses with the right investors.</p>
          <ul className="prose-body mt-2 list-disc space-y-2 pl-5 marker:text-gold">
            <li>Creating investor-ready pitch decks</li>
            <li>Facilitating funding through our trusted investor network</li>
          </ul>
        </div>
        <KnowMore to="/strategy-execution" />
      </FeatureBand>

      <section className="bg-muted px-6 py-24 md:py-28">
        <Reveal className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
          <h2 className="text-3xl leading-tight font-normal md:text-4xl">Connect with us</h2>
          <Link
            to="/connect-with-us"
            className="group inline-flex items-center gap-3 border border-foreground/25 px-8 py-4 font-sans text-[0.72rem] tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Submit your enquiry
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
