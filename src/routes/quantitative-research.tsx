import { createFileRoute } from "@tanstack/react-router";

import quantImage from "@/assets/case-quant.jpg";
import { Chapter, NumberList, PageHeader, Section, Story } from "@/components/site/Layout";

export const Route = createFileRoute("/quantitative-research")({
  head: () => ({
    meta: [
      { title: "Quantitative Research Case Study — Senior Care Platform" },
      {
        name: "description",
        content:
          "Validating a Subscription Model for Senior Care — a quantitative research case study across five South Indian cities.",
      },
      {
        property: "og:title",
        content: "Quantitative Research Case Study — Senior Care Platform",
      },
      {
        property: "og:description",
        content:
          "A face-to-face quantitative study with 300 seniors validated demand, plan preference, and go-to-market segmentation.",
      },
    ],
  }),
  component: QuantitativeResearch,
});

function QuantitativeResearch() {
  return (
    <>
      <PageHeader
        kicker="Quantitative Research"
        title="Validating a Subscription Model for Senior Care"
        image={quantImage}
        imageAlt="Indian senior citizens receiving in-home care services"
      />

      <Section className="!py-14 md:!py-16">
        <Story>
          <Chapter label="The Challenge">
            <p className="prose-body">
              A senior care provider wanted to launch a subscription platform that bundled
              healthcare, housekeeping, and daily assistance into one plan for urban seniors.
            </p>
            <p className="prose-body">
              Before spending on product and marketing, they needed to know if seniors would
              actually value the bundle, switch providers for it, and pay for it.
            </p>
          </Chapter>

          <Chapter label="What We Did">
            <p className="prose-body">
              We ran a face-to-face quantitative study across five South Indian cities.
            </p>
            <p className="prose-body">
              We surveyed 300 seniors, all 65 or older, all decision-makers on household services.
              We tested three plans: Superior, Prime, and Basic.
            </p>
          </Chapter>

          <Chapter label="What We Found">
            <p className="prose-body">
              Seniors were already spending a lot each month on individual providers, mostly for
              healthcare and housekeeping. That told us price wasn't the main barrier. What they
              wanted was convenience and someone reliable to coordinate everything.
            </p>
            <p className="prose-body">
              Prime got the strongest response. Superior did well too. Basic barely moved the
              needle. Seniors wanted a full solution, not a cut-down version.
            </p>
            <p className="prose-body">
              Three services came up again and again as the ones that actually mattered: medicine
              delivery, regular check-ups, and home cleaning. Any bundle missing these struggled to
              land.
            </p>
          </Chapter>

          <Chapter label="What We Recommended">
            <p className="prose-body">
              Launch Superior and Prime. Drop Basic for now.
            </p>
            <p className="prose-body">
              Sell the idea of one trusted partner instead of leading with price.
            </p>
            <p className="prose-body">
              Split the marketing too: traditional retirees respond to vernacular TV and print,
              while digitally active seniors and their caregivers are on OTT and social media.
            </p>
          </Chapter>

          <Chapter label="The Result">
            <p className="prose-body">
              The client had clear proof that the model worked, a shortlist of which plans to build,
              and a go-to-market plan built around real audience segments. That gave them a faster,
              lower-risk path to launch.
            </p>
          </Chapter>
        </Story>
      </Section>
    </>
  );
}
