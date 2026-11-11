import { createFileRoute } from "@tanstack/react-router";

import insightsArt from "@/assets/art-market-research.png";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/market-research")({
  head: () => ({
    meta: [
      { title: "Market Research And Analysis" },
      {
        name: "description",
        content:
          "Deep, actionable market research and analysis that uncover growth opportunities, guide winning strategies, and reduce business risks.",
      },
      { property: "og:title", content: "Market Research And Analysis" },
      {
        property: "og:description",
        content:
          "Deep, actionable market research and analysis that uncover growth opportunities, guide winning strategies, and reduce business risks.",
      },
    ],
  }),
  component: MarketResearch,
});

function MarketResearch() {
  return (
    <>
      <PageHeader
        kicker="Insights"
        title="Market Research And Analysis"
        image={insightsArt}
        imageAlt="Market research revealing growth opportunities across channels"
      />

      <Section className="!py-12 sm:!py-14 md:!py-16" tone="muted">
        <div className="mx-auto w-full max-w-5xl space-y-8 text-foreground">
          <div className="space-y-5 rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
            <p className="text-base leading-7 text-foreground/90 sm:text-lg">
              Business success in fast-changing markets depends on understanding your customers,
              competitors, and channels better than anyone else.
            </p>

            <p className="text-base leading-7 text-foreground/90 sm:text-lg">
              At Instrex, we go beyond simple data collection. We deliver deep, actionable market
              research for foods and beverages, personal care and home care, fashion and lifestyle,
              engineering and technology, and manufacturing companies across India, uncovering
              growth opportunities and reducing business risk at every stage of decision-making.
            </p>

          </div>

          <div className="space-y-6 border-t border-hairline pt-8">
            <div className="rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
              <h2 className="font-display text-[1.4rem] leading-tight font-normal text-foreground sm:text-[1.5rem]">
                Consumer Insights
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-foreground/90 sm:text-lg">
                <li>Understand customer needs, habits, and buying behaviors</li>
                <li>Measure brand strength and perception</li>
                <li>Evaluate product performance and pricing strategies</li>
                <li>Develop and test creative ideas for advertising and communication</li>
                <li>
                  Category-specific research for FMCG, cosmetics, and fashion brands entering new
                  markets or launching new products
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
              <h2 className="font-display text-[1.4rem] leading-tight font-normal text-foreground sm:text-[1.5rem]">
                Retail and Channel Insights
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-foreground/90 sm:text-lg">
                <li>Identify and understand high-value customer segments</li>
                <li>Optimize channel strategies for better reach and efficiency</li>
                <li>Gain shopper insights and develop detailed store-level profiles</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
              <h2 className="font-display text-[1.4rem] leading-tight font-normal text-foreground sm:text-[1.5rem]">
                Business and B2B Research
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-foreground/90 sm:text-lg">
                <li>Analyze market size and forecast future growth trends</li>
                <li>Understand business buyer needs and key vendor selection criteria</li>
                <li>Measure customer satisfaction and loyalty levels</li>
                <li>Study customer buying cycles and decision-making behaviors</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
              <h2 className="font-display text-[1.4rem] leading-tight font-normal text-foreground sm:text-[1.5rem]">
                Competition Analysis
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-foreground/90 sm:text-lg">
                <li>
                  Understand competitors' product strategies, marketing tactics, and operational
                  practices
                </li>
                <li>
                  Benchmark against competitors and identify gaps that reveal a competitive
                  advantage
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-gold/10 bg-gold/[0.02] px-4 py-3">
            <p className="text-base font-medium text-foreground/80 sm:text-lg">
              Qualitative Research | Quantitative Research | AI Tools-Based Research | Secondary
              Research
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
