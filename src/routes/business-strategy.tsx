import { createFileRoute } from "@tanstack/react-router";

import strategyArt from "@/assets/art-growth-blueprint.png";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/business-strategy")({
  head: () => ({
    meta: [
      { title: "Business Strategy" },
      {
        name: "description",
        content:
          "Insight-driven Business Strategy, Go To Market Strategy, Brand Strategy, Financial Planning, and Market and Financial Feasibility.",
      },
      { property: "og:title", content: "Business Strategy" },
      {
        property: "og:description",
        content:
          "Growth in a competitive market comes from in-depth market and customer understanding, smart planning, precise execution, and continuous refinement.",
      },
    ],
  }),
  component: BusinessStrategy,
});

function BusinessStrategy() {
  return (
    <>
      <PageHeader
        kicker="Strategy"
        title="Business Strategy"
        image={strategyArt}
        imageAlt="Business growth blueprint and strategic planning"
      />

      <Section className="!py-12 sm:!py-14 md:!py-16" tone="muted">
        <div className="mx-auto w-full max-w-5xl space-y-8 text-foreground">
          <div className="space-y-5 rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
            <p className="text-base leading-7 text-foreground/90 sm:text-lg">
              Growth in a competitive market comes from in-depth market and customer understanding,
              smart planning, precise execution, and continuous refinement.
            </p>

            <p className="text-base leading-7 text-foreground/90 sm:text-lg">
              At Instrex, our business strategy consulting approach is built on deep insights and
              aligns resources, priorities, and market opportunities to create measurable,
              long-term value for FMCG, fashion, lifestyle, engineering, technology, and
              manufacturing companies across India.
            </p>
          </div>

          <div className="space-y-8 border-t border-hairline pt-8">
            <div className="rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
              <h2 className="font-display text-[1.4rem] leading-tight font-normal text-foreground sm:text-[1.5rem]">
                Go To Market Strategy
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg">
                Many great business ideas struggle to gain traction, even with strong products or
                services, due to weak go-to-market planning. A product may be well-designed but
                misaligned with customer needs, poorly communicated, incorrectly priced, or
                unavailable through the right channels.
              </p>
              <p className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg">
                At Instrex, we use deep market and consumer insights to design a GTM framework
                based on the 7P model, so every part of the business works in sync, whether
                you're launching a new FMCG product, entering the fashion and lifestyle space, or
                scaling an engineering, technology or manufacturing business.
              </p>
            </div>

            <div className="rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
              <h2 className="font-display text-[1.4rem] leading-tight font-normal text-foreground sm:text-[1.5rem]">
                Brand Strategy
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg">
                Strong brands succeed because they have a clear purpose, defined values, distinct
                personality, and consistent positioning. They stay consistent in design and
                communication across every touchpoint, and that consistency is what builds trust
                over time.
              </p>
              <p className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg">
                Instrex follows a structured, insight-driven approach to brand strategy, one built
                on market and consumer research rather than opinion. The result is a brand identity
                that acts as a guiding framework for all design, communication, and marketing
                decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
              <h2 className="font-display text-[1.4rem] leading-tight font-normal text-foreground sm:text-[1.5rem]">
                Financial Planning
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg">
                Good financial planning helps organizations set clear goals, allocate resources
                efficiently, and anticipate challenges early. Every decision is backed by financial
                insight and aligned with long-term objectives.
              </p>
              <p className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg">
                Instrex's planning framework supports:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-foreground/90 sm:text-lg">
                <li>Long-term and mid-term financial planning</li>
                <li>Functional and operational planning</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-hairline bg-background/40 p-5 sm:p-6">
              <h2 className="font-display text-[1.4rem] leading-tight font-normal text-foreground sm:text-[1.5rem]">
                Market and Financial Feasibility
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg">
                Before committing to a new venture, product launch, or market entry, the real
                question is whether it will work, commercially and financially.
              </p>
              <p className="mt-4 text-base leading-7 text-foreground/90 sm:text-lg">
                Instrex combines market research with financial modeling to test that question
                properly. We look at whether there's real customer demand, how the numbers hold up,
                and what the actual risks are, rather than relying on financial projections alone.
                This market-and-financial approach is different from the purely technical or
                capital-expenditure feasibility studies most firms offer, and it's where our
                research background makes the biggest difference.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
