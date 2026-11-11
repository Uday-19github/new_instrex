import { createFileRoute } from "@tanstack/react-router";

import gtmImage from "@/assets/case-gtm.jpg";
import {
  Chapter,
  PageHeader,
  Section,
  Story,
} from "@/components/site/Layout";

export const Route = createFileRoute("/gtm-plan")({
  head: () => ({
    meta: [
      { title: "GTM Plan Case Study — Subscription Dairy Brand" },
      {
        name: "description",
        content:
          "Launching a Subscription-Based Dairy Brand in Tier-2 and Tier-3 India — a three-phase launch delivering 5x subscription growth and over 60% monthly retention.",
      },
      { property: "og:title", content: "GTM Plan Case Study — Subscription Dairy Brand" },
      {
        property: "og:description",
        content:
          "The brand turned a commodity product into a subscription business people actually stuck with.",
      },
    ],
  }),
  component: GtmPlan,
});

function GtmPlan() {
  return (
    <>
      <PageHeader
        kicker="Go-To-Market Strategy"
        title="Launching a Subscription-Based Dairy Brand in Tier-2 and Tier-3 India"
        image={gtmImage}
        imageAlt="Fresh dairy delivery for a subscription brand"
      />

      <Section className="!py-14 md:!py-16">
        <Story>
          <Chapter label="The Challenge">
            <p className="prose-body">
              A new raw milk and dairy brand wanted to enter Tier-2 and Tier-3 cities through a
              subscription app, one that also offered value-added dairy products and grocery
              essentials. The target customer was traditional dairy households, families who buy milk
              every day and care about quality, now being asked to trust an app for something they've
              always bought in person.
            </p>
            <p className="prose-body">
              The real challenge wasn't the product. It was getting people to change a daily habit in
              a category where switching is easy and loyalty is low.
            </p>
          </Chapter>

          <Chapter label="What We Set Out to Do">
            <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
              <li>Build awareness beyond the usual early digital adopters</li>
              <li>Turn that awareness into app downloads and paid subscriptions</li>
              <li>Get people using it daily so retention and lifetime value hold up</li>
            </ul>
          </Chapter>

          <Chapter label="Our Approach: A Three-Phase Launch">
            <div className="space-y-6">
              <div>
                <p className="font-sans text-sm font-semibold tracking-[0.14em] text-gold uppercase">
                  Phase 1: Pre-launch, building trust (30 to 45 days)
                </p>
                <p className="prose-body mt-3">
                  Before going live, we focused on making the brand feel credible and consistent
                  everywhere someone might encounter it. This meant the logo, launch kits, and press
                  materials, the app listing, website, and social pages, and content explaining
                  sourcing and purity so people understood what they were signing up for.
                </p>
              </div>

              <div>
                <p className="font-sans text-sm font-semibold tracking-[0.14em] text-gold uppercase">
                  Phase 2: Launch, driving awareness and subscriptions (45 to 90 days)
                </p>
                <p className="prose-body mt-3">
                  We ran an omni-channel push to get visibility and conversions moving together.
                </p>
                <p className="prose-body mt-3">
                  Offline, this meant print ads, bus panels, and local radio across the city.
                </p>
                <p className="prose-body mt-3">
                  Digitally, we used influencer partnerships, PR, app store optimization for high-intent
                  searches, and referral coupons targeted at specific housing societies. We also
                  leaned on stories about farmer partnerships and sourcing transparency to build trust
                  early.
                </p>
              </div>

              <div>
                <p className="font-sans text-sm font-semibold tracking-[0.14em] text-gold uppercase">
                  Phase 3: Retention, turning users into daily habits (ongoing)
                </p>
                <p className="prose-body mt-3">
                  Once people had tried the product, the focus shifted to keeping them. We used push
                  notifications timed before the 8 PM order cutoff, cashback for 7-day prepaid plans,
                  retargeting that named the actual delivery person, and WhatsApp groups for recipes,
                  contests, and feedback. The goal was to make ordering feel routine, not like a
                  decision each time.
                </p>
              </div>
            </div>
          </Chapter>

          <Chapter label="Results After Six Months">
            <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
              <li>5x growth in new subscriptions</li>
              <li>Over 60% monthly retention, above the category norm</li>
              <li>350% increase in milk delivery volumes</li>
              <li>42% top-of-mind brand recall</li>
            </ul>
          </Chapter>

          <Chapter label="What Drove This">
            <p className="prose-body">
              The pre-launch work built trust before the brand needed it. Balancing traditional and
              digital media got both scale and precision. The subscription model created recurring
              usage and opened the door to grocery cross-sell. And treating retention as a priority
              from day one, not an afterthought, kept churn low in a category where switching usually
              happens fast.
            </p>
          </Chapter>

          <Chapter label="The Result">
            <p className="prose-body">
              The brand turned a commodity product into a subscription business people actually stuck
              with, and built a real foothold as a daily essential across Tier-2 and Tier-3 markets.
            </p>
          </Chapter>
        </Story>
      </Section>
    </>
  );
}
