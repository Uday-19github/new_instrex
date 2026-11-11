import { createFileRoute } from "@tanstack/react-router";

import brandImage from "@/assets/case-brand.jpg";
import { Chapter, PageHeader, Section, Story } from "@/components/site/Layout";

export const Route = createFileRoute("/brand-strategy")({
  head: () => ({
    meta: [
      { title: "Brand Strategy Case Study — Natural Cosmetics" },
      {
        name: "description",
        content:
          "Building a Premium Brand Identity for a Natural Cosmetics Brand, built on the 6-Dimension Brand Identity Model.",
      },
      { property: "og:title", content: "Brand Strategy Case Study — Natural Cosmetics" },
      {
        property: "og:description",
        content: "A credible, premium brand identity that stayed rooted in its natural story.",
      },
    ],
  }),
  component: BrandStrategy,
});

function BrandStrategy() {
  return (
    <>
      <PageHeader
        kicker="Brand Strategy"
        title="Building a Premium Brand Identity for a Natural Cosmetics Brand"
        image={brandImage}
        imageAlt="Premium natural cosmetics product still life"
      />

      <Section className="!py-14 md:!py-16">
        <Story>
          <Chapter label="The Challenge">
            <p className="prose-body">
              A new cosmetics brand built on natural, honest ingredients wanted to launch as premium
              to luxury. The hard part was doing that without losing what made it credible in the
              first place.
            </p>
            <p className="prose-body">
              This wasn't a logo and color palette job. The brand needed a strategic identity that
              could justify premium pricing, appeal to consumers who actually know what they're
              buying, and still feel true to its natural roots.
            </p>
          </Chapter>

          <Chapter label="What We Did">
            <p className="prose-body">
              We used our 6-Dimension Brand Identity Model to define the brand strategically before
              any creative work started.
            </p>
            <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
              <li>Culture: the brand&apos;s belief system, origin story, and worldview</li>
              <li>
                Reflection: who the ideal customer really is, beyond age and income, their
                aspirations and lifestyle
              </li>
              <li>Competence: the real strengths that back up a premium claim</li>
              <li>Personality: how the brand talks and behaves, its tone and attitude</li>
              <li>Relationship: how it connects with people, emotionally and practically</li>
              <li>
                Self-Image: how people want to see themselves when they use it, which matters a lot
                for premium appeal
              </li>
            </ul>
            <p className="prose-body">From these six dimensions, we built three foundations for the brand:</p>
            <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
              <li>Brand Essence: its core purpose and values, the base for everything else</li>
              <li>Brand Positioning: the specific space it owns in the market and why</li>
              <li>
                Brand Physique: how it actually looks and sounds, colors, typography, imagery, tone
                of voice, all tied to premium and natural cues
              </li>
            </ul>
          </Chapter>

          <Chapter label="What We Delivered">
            <p className="prose-body">
              A full Brand Identity Guidebook covering the strategic direction, the visual and verbal
              identity, and the standards to keep everything consistent as the brand grows. This
              became the single reference point for the launch team and everyone working on the brand
              after.
            </p>
          </Chapter>

          <Chapter label="The Impact">
            <p className="prose-body">
              The identity system shaped decisions well beyond marketing. It guided:
            </p>
            <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
              <li>Product development and formulation choices</li>
              <li>Campaigns and partnership selection</li>
              <li>Retail and experience design, both online and in stores</li>
              <li>A consistent premium presence from day one</li>
            </ul>
          </Chapter>

          <Chapter label="The Result">
            <p className="prose-body">
              The brand launched with a credible, premium identity that stayed rooted in its natural
              story. Because the creative work was grounded in real strategy first, the brand had
              something solid to build on, not just a good-looking launch, but a foundation it could
              grow with.
            </p>
          </Chapter>
        </Story>
      </Section>
    </>
  );
}
