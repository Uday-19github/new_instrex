import { createFileRoute } from "@tanstack/react-router";

import financialImage from "@/assets/case-financial.jpg";
import { Chapter, PageHeader, Section, Story } from "@/components/site/Layout";

export const Route = createFileRoute("/financial-analysis")({
  head: () => ({
    meta: [
      { title: "Financial Analysis Case Study — CNG Cylinder Make vs. Buy" },
      {
        name: "description",
        content:
          "Make vs. Buy Decision for CNG Cylinder Manufacturing — capital and operating costs, unit economics, and sensitivity analysis for an automotive OEM.",
      },
      {
        property: "og:title",
        content: "Financial Analysis Case Study — CNG Cylinder Make vs. Buy",
      },
      {
        property: "og:description",
        content:
          "A practical, low-risk way into the market without a big upfront bet on manufacturing.",
      },
    ],
  }),
  component: FinancialAnalysis,
});

function FinancialAnalysis() {
  return (
    <>
      <PageHeader
        kicker="Financial Analysis"
        title="Make vs. Buy Decision for CNG Cylinder Manufacturing"
        image={financialImage}
        imageAlt="Industrial manufacturing facility for CNG cylinders"
      />

      <Section className="!py-14 md:!py-16">
        <Story>
          <Chapter label="The Challenge">
            <p className="prose-body">
              An automotive OEM needed to supply on-board CNG cylinders for its vehicles and had to
              decide how to source them. Should it build a manufacturing plant in India, or import
              finished cylinders from China? The decision had to work against a fixed target selling
              price, so cost efficiency wasn't optional, it was the whole question.
            </p>
            <p className="prose-body">
              We needed to assess whether manufacturing in India made financial sense, compare that
              against importing across different volumes, and understand how scale, breakeven, and
              long-term margins would play out.
            </p>
          </Chapter>

          <Chapter label="What We Did">
            <p className="prose-body">
              We built a structured Make vs. Buy model comparing two scenarios at the same target
              selling price: setting up a plant in India, or importing finished cylinders from China.
            </p>
            <p className="prose-body">
              For the manufacturing option, we ran a full feasibility study covering machinery,
              layout, power and utility needs, production yield and wastage, labour requirements, and
              regulatory approvals like PESO and BIS. This gave us real cost numbers instead of
              theoretical estimates.
            </p>
            <p className="prose-body">We then built out the investment picture for both scenarios.</p>
            <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
              <li>
                For manufacturing in India, that meant land, construction, machinery, office setup,
                pre-launch staffing, and three months of working capital.
              </li>
              <li>
                For imports, it was mostly licensing and approvals, with very little fixed
                infrastructure needed.
              </li>
            </ul>
            <p className="prose-body">
              On the operating side, we modeled variable costs like raw materials, consumables, and
              utilities, and fixed costs like staff, admin, and compliance.
            </p>
            <p className="prose-body">
              For the import route, we also factored in freight, customs duty, port charges, and
              handling.
            </p>
            <p className="prose-body">To get the true cost per cylinder, we included:</p>
            <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
              <li>cash costs (materials and operations),</li>
              <li>non-cash costs (depreciation), and</li>
              <li>financial costs (interest on total capital employed).</li>
            </ul>
            <p className="prose-body">
              Then we ran profitability and sensitivity analysis across different production volumes
              to see how unit costs moved with scale, and what volume was actually needed to break
              even.
            </p>
          </Chapter>

          <Chapter label="What We Found">
            <p className="prose-body">
              Manufacturing in India from day one wasn't financially viable. The learning curve alone,
              getting to regulatory compliance and manufacturing precision, could take up to a year.
            </p>
            <p className="prose-body">
              On top of that, capital investment and fixed overheads were high, unit economics were
              poor at low volumes, and profitability would stay low or negative in the early years
              even at the target price.
            </p>
          </Chapter>

          <Chapter label="What We Recommended">
            <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
              <li>
                Stage one: import and stabilize. Bring in cylinders from certified Chinese
                suppliers, get PESO certification through one or two partners, start supplying the
                OEM with minimal upfront investment, and build up operational and market experience.
              </li>
              <li>
                Stage two: shift to local manufacturing once demand is stable, internal capabilities
                are stronger, and regulatory relationships with PESO and BIS are established. This
                reduces reliance on imports and improves margins over time.
              </li>
            </ul>
          </Chapter>

          <Chapter label="The Result">
            <p className="prose-body">
              The OEM got a practical, low-risk way into the market, one that didn't require a big
              upfront bet on manufacturing before the business case was actually proven.
            </p>
          </Chapter>
        </Story>
      </Section>
    </>
  );
}
