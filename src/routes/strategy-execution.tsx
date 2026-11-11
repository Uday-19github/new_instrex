import { createFileRoute } from "@tanstack/react-router";

import executionArt from "@/assets/art-strategy-implementation.png";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/strategy-execution")({
  head: () => ({
    meta: [
      { title: "Strategy Execution & Funding Support" },
      {
        name: "description",
        content:
          "We convert strategic goals into clear, actionable plans with defined timelines, responsibilities, and measurable outcomes.",
      },
      { property: "og:title", content: "Strategy Execution & Funding Support" },
      {
        property: "og:description",
        content:
          "Strategy Implementation and Funding Support — a strategy is only useful once it leaves the slide deck.",
      },
    ],
  }),
  component: StrategyExecution,
});

function StrategyExecution() {
  return (
    <>
      <PageHeader
        kicker="Execution"
        title="Strategy Execution"
        image={executionArt}
        imageAlt="Strategy implementation with specialist partners"
      />

      <Section className="!py-12 sm:!py-14 md:!py-16" tone="muted">
        <div className="mx-auto w-full max-w-5xl space-y-8 text-foreground">
          <div className="space-y-5 rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
            <h2 className="font-display text-[1.4rem] leading-tight font-normal text-foreground sm:text-[1.5rem]">
              Strategy Implementation
            </h2>
            <p className="text-base leading-7 text-foreground/90 sm:text-lg">
              We convert strategic goals into clear, actionable plans with defined timelines,
              responsibilities, and measurable outcomes. Every initiative includes milestone
              tracking, so progress stays visible and accountable.
            </p>
            <p className="text-base leading-7 text-foreground/90 sm:text-lg">
              Execution is backed by our network of trusted specialist partners, including
              marketing agencies, finance professionals, investment bankers, and other domain
              experts, brought in exactly where they're needed.
            </p>
            <p className="text-base leading-7 text-foreground/90 sm:text-lg">
              A strategy is only useful once it leaves the slide deck. That's the standard we hold
              execution to.
            </p>
          </div>

          <div className="rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
            <h2 className="font-display text-[1.4rem] leading-tight font-normal text-foreground sm:text-[1.5rem]">
              Funding Support
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg">
              Instrex connects high-potential startups in India with early-stage funding through a
              network of HNI investors. Every introduction goes through a transparent due diligence
              process, so founders end up partnering with the right investors, not just any
              investor.
            </p>
            <p className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg">
              We also help startups build pitch decks that clearly show their value proposition,
              market opportunity, and growth potential, backed by real data rather than
              assumptions.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
