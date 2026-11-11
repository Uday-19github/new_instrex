import { createFileRoute } from "@tanstack/react-router";

import approachImage from "@/assets/about-approach.jpg";
import ashutoshImage from "@/assets/ashutosh-tyagi.png";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Our Approach and Our Team" },
      {
        name: "description",
        content:
          "Sustainable business success is built on insight, not instinct. Meet the approach and our network of senior experts.",
      },
      { property: "og:title", content: "About — Our Approach and Our Team" },
      {
        property: "og:description",
        content:
          "Our team is a network of senior experts in Marketing, Sales, Finance, Supply Chain, IT, and Operations.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="Our Approach"
        image={approachImage}
        imageAlt="Executive reviewing business data visualisations"
      />

      <Section className="!py-12 sm:!py-14 md:!py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="relative grid items-center gap-8 sm:gap-10 md:grid-cols-12 md:gap-16">
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
            <div className="space-y-4 pl-4 sm:space-y-5 sm:pl-5 md:col-span-7 md:pl-7">
              <p className="kicker">Overview</p>
              <p className="prose-body">
                Over the years, we&apos;ve worked with both established enterprises and agile
                start-ups across industries in India, from FMCG and fashion to engineering and
                manufacturing. The lesson that comes up again and again: sustainable business success
                is built on insight, not instinct. Every strategic move should be guided by facts,
                data, and a clear understanding of the market.
              </p>
              <p className="prose-body">
                As a market research and business strategy consulting firm, our goal has always been
                to help leaders uncover opportunities, reduce risk, and make well-informed decisions,
                whether the work is business planning, go-to-market strategy, brand development,
                market research, or financial analysis.
              </p>
            </div>
            <div className="pl-4 sm:pl-5 md:col-span-5 md:pl-0">
              <div className="overflow-hidden border border-hairline bg-muted">
                <img
                  src={approachImage}
                  alt="Executive reviewing business data visualisations"
                  loading="lazy"
                  width={1600}
                  height={1024}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="!py-12 sm:!py-14 md:!py-16" tone="muted">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="relative">
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
            <div className="max-w-3xl space-y-4 pl-4 sm:space-y-5 sm:pl-5 md:pl-7">
              <p className="kicker">Our Team</p>
              <p className="prose-body">
                Our team is a network of senior experts in Marketing, Sales, Finance, Supply Chain,
                IT, and Operations, most of whom have held CXO or business head roles in reputed
                organizations.
              </p>
              <p className="prose-body">
                Team members are brought onto a project based on the expertise it needs, so clients
                get direct access to relevant experience rather than a generalist team stretched
                across every function.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="!py-14 md:!py-16" tone="ink">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="mb-8 flex items-center gap-5">
            <p className="kicker shrink-0">Leadership</p>
            <span className="h-px flex-1 bg-white/15" />
          </Reveal>

          <div className="grid items-stretch gap-5 md:grid-cols-[260px_1fr] md:gap-6">
            <Reveal className="group relative flex h-full flex-col items-center justify-center border border-white/12 bg-white/5 p-5 text-center">
              <div className="absolute top-0 left-0 h-full w-[2px] bg-gold" />
              <div className="w-[190px] overflow-hidden bg-charcoal">
                <img
                  src={ashutoshImage}
                  alt="Ashutosh Tyagi, Director and Partner"
                  width={375}
                  height={542}
                  loading="eager"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover object-[center_18%]"
                />
              </div>
              <p className="mt-4 font-sans text-[1.05rem] leading-snug font-semibold text-ink-foreground">
                Ashutosh Tyagi,
                <br />
                <span className="font-medium text-ink-foreground/75">Director and Partner</span>
              </p>
            </Reveal>

            <Reveal
              delay={0.1}
              className="relative flex h-full flex-col justify-center border border-white/12 bg-white/5 p-5 sm:p-6 md:px-8"
            >
              <div className="absolute top-0 left-0 h-full w-[2px] bg-gold/50" />
              <div className="space-y-4">
                <p className="prose-body">
                  Ashutosh leads the consulting practice at Instrex. Before starting Instrex, he held
                  senior roles at Airtel, Kantar IMRB, Reliance, Globacom in Nigeria, Amway, and
                  Vertebrand Consulting, working across telecom, market research, FMCG, and
                  consulting.
                </p>
                <p className="prose-body">
                  He holds an MBA from IIM Kozhikode and a B.Tech from Delhi University, giving him
                  both the managerial and technical grounding the work needs.
                </p>
                <p className="prose-body">
                  He works directly with senior business leaders, turning data into direction and
                  strategy into results they can measure.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
