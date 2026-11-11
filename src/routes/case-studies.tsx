import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import quantImage from "@/assets/case-quant.jpg";
import qualImage from "@/assets/case-qual.jpg";
import brandImage from "@/assets/case-brand.jpg";
import gtmImage from "@/assets/case-gtm.jpg";
import financialImage from "@/assets/case-financial.jpg";
import bridgeImage from "@/assets/bridge-insight-impact.jpg";
import { Reveal } from "@/components/site/Reveal";
import { MetaTags, PageHeader, Section, SectionRule } from "@/components/site/Layout";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies" },
      {
        name: "description",
        content:
          "Case studies across quantitative research, qualitative research, brand strategy, GTM planning, and financial analysis.",
      },
      { property: "og:title", content: "Case Studies" },
      {
        property: "og:description",
        content:
          "Quantitative Research I Qualitative Research I Brand Strategy I GTM Plan I Financial Analysis",
      },
    ],
  }),
  component: CaseStudies,
});

const cases = [
  {
    index: "01",
    label: "Quantitative Research",
    to: "/quantitative-research",
    image: quantImage,
    title: "Validating a Subscription Model for Senior Care",
    summary:
      "A face-to-face study with 300 seniors across five cities validated demand, plan preference, and go-to-market segmentation.",
  },
  {
    index: "02",
    label: "Qualitative Research",
    to: "/qualitative-research",
    image: qualImage,
    title: "Reviving Growth for a HoReCa F&B Solutions Company",
    summary:
      "A full qualitative program across internal and external stakeholders uncovered the real barriers behind a growth plateau.",
  },
  {
    index: "03",
    label: "Brand Strategy",
    to: "/brand-strategy",
    image: brandImage,
    title: "Building a Premium Brand Identity for a Natural Cosmetics Brand",
    summary:
      "A research-led identity system that justified premium positioning without losing natural credibility.",
  },
  {
    index: "04",
    label: "Go-To-Market Strategy",
    to: "/gtm-plan",
    image: gtmImage,
    title: "Launching a Subscription-Based Dairy Brand in Tier-2 and Tier-3 India",
    summary:
      "A three-phase launch that turned a commodity dairy habit into a subscription business people stuck with.",
  },
  {
    index: "05",
    label: "Financial Analysis",
    to: "/financial-analysis",
    image: financialImage,
    title: "Make vs. Buy Decision for CNG Cylinder Manufacturing",
    summary:
      "A structured Make vs. Buy model that clarified when to import, when to manufacture, and how to enter without premature capital risk.",
  },
];

function CaseStudies() {
  return (
    <>
      <PageHeader
        kicker="Work"
        title="Case Studies"
        image={bridgeImage}
        imageAlt="Selected research and strategy case studies"
      />

      <Section className="!py-14 md:!py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="relative grid items-start gap-10 border-b border-hairline pb-12 md:grid-cols-12 md:gap-16 md:pb-14">
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
            <div className="space-y-5 pl-5 md:col-span-7 md:pl-7">
              <p className="kicker">Overview</p>
              <p className="prose-body">
                Selected engagements across research, brand, go-to-market, and financial analysis —
                each built to turn market evidence into clear decisions and measurable outcomes.
              </p>
              <p className="prose-body">
                Explore how insight shaped strategy, and how strategy was set up to execute.
              </p>
            </div>
            <div className="space-y-4 pl-5 md:col-span-5 md:pl-0 md:pt-8">
              <p className="font-sans text-[0.68rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Practice areas
              </p>
              <MetaTags
                items={[
                  "Quantitative",
                  "Qualitative",
                  "Brand Strategy",
                  "GTM Plan",
                  "Financial Analysis",
                ]}
              />
            </div>
          </Reveal>

          <div className="pt-10 md:pt-12">
            <Reveal>
              <SectionRule>Selected work</SectionRule>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
              {cases.map((c, i) => (
                <Reveal key={c.to} delay={i * 0.05} className="h-full">
                  <Link
                    to={c.to}
                    className="group relative flex h-full flex-col border border-hairline bg-background/40 transition-colors duration-500 hover:border-gold/40 dark:bg-card/40"
                  >
                    <div className="absolute top-0 left-0 z-10 h-full w-[2px] bg-gold/0 transition-colors duration-500 group-hover:bg-gold" />
                    <div className="overflow-hidden border-b border-hairline">
                      <img
                        src={c.image}
                        alt={c.title}
                        loading="lazy"
                        width={1024}
                        height={720}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <p className="font-sans text-[0.65rem] font-semibold tracking-[0.16em] text-gold uppercase sm:text-[0.68rem] sm:tracking-[0.18em]">
                          {c.label}
                        </p>
                        <span className="font-display text-2xl leading-none text-gold/40 transition-colors group-hover:text-gold md:text-3xl">
                          {c.index}
                        </span>
                      </div>
                      <h2 className="mt-3 text-[1.15rem] leading-snug font-normal sm:mt-4 sm:text-[1.25rem] md:text-[1.4rem]">
                        {c.title}
                      </h2>
                      <p className="prose-body mt-4 flex-1 text-[0.95rem] leading-relaxed">
                        {c.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 border-t border-hairline pt-5 font-sans text-[0.7rem] tracking-[0.2em] text-gold uppercase">
                        Read case study
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
