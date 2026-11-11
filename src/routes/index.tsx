import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroImage from "@/assets/hero-boardroom.jpg";
import heroSlide2 from "@/assets/bridge-insight-impact.jpg";
import heroSlide3 from "@/assets/insight-handshake.jpg";
import heroSlide4 from "@/assets/about-approach.jpg";
import homeArt from "@/assets/research-growth-plans.png";
import { Reveal } from "@/components/site/Reveal";
import {
  MetaTags,
  Section,
  SectionRule,
  ServiceCatalog,
} from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instrex — Insights to Impact Business Consulting" },
      {
        name: "description",
        content:
          "Insights - Market Research and Analysis. Strategy - Business Growth Blueprint. Execution - Strategy Implementation Facilitation and Funding Support.",
      },
      { property: "og:title", content: "Instrex — Insights to Impact Business Consulting" },
      {
        property: "og:description",
        content:
          "Insights - Market Research and Analysis. Strategy - Business Growth Blueprint. Execution - Strategy Implementation Facilitation and Funding Support.",
      },
    ],
  }),
  component: Home,
});

const heroSlides = [
  { src: heroImage, alt: "Consulting boardroom overlooking a city skyline" },
  { src: heroSlide2, alt: "From market insight to business impact" },
  { src: heroSlide3, alt: "Client partnership and strategic advisory" },
  { src: heroSlide4, alt: "Executive reviewing growth strategy" },
];

const heroPillars = [
  { index: "01", label: "Insights", text: "Market Research & Analysis" },
  { index: "02", label: "Strategy", text: "Business Growth Blueprint" },
  { index: "03", label: "Execution", text: "Implementation & Funding Support" },
];

const clientLogos = [
  "01_algyas_exports.png",
  "02_amway.png",
  "03_airtel.png",
  "04_food_service_india.png",
  "05_ethiek.png",
  "06_chefs_art.png",
  "07_glenzo.png",
  "08_kantar_imrb.png",
  "09_linc_pens.png",
  "10_mc_saatchi.png",
  "11_marico.png",
  "12_mum_and_you.png",
  "13_parachute.png",
  "14_paras_dairy.png",
  "15_peshage.png",
  "16_sanchi.png",
  "17_sunedison.png",
  "18_tata_bluescope_steel.png",
  "19_chatterjee_group.png",
  "20_vipar_auto.png",
];

const clientLogoTrack = [...clientLogos, ...clientLogos];

// (removed eager logo imports to avoid SSR/runtime errors)

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div ref={ref} className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-0 -z-20 h-[115%] w-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={index}
            src={heroSlides[index]?.src}
            alt={heroSlides[index]?.alt ?? ""}
            width={1920}
            height={1088}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      {/* Readability overlays — left weight for copy, bottom weight for pillars */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-4 pt-28 pb-14 text-ink-foreground sm:px-6 lg:pt-24 lg:pb-10"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-10">
          <div className="max-w-[760px]">
            <Reveal>
              <p className="font-sans text-[0.72rem] font-semibold tracking-[0.24em] text-gold uppercase sm:text-[0.82rem]">
                Insights to Impact Business Consulting
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="hero-title mt-7 font-sans text-[2.4rem] leading-[1.05] tracking-[-0.04em] text-ink-foreground sm:text-[3.2rem] lg:text-[2.6rem] xl:text-[3.4rem]">
                <span className="sm:block">We turn market insights</span>{" "}
                <span className="sm:block">into growth plans, and</span>{" "}
                <span className="sm:block">plans into results.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-[15px]">
              <Link
                to="/connect-with-us"
                className="group inline-flex h-[51px] items-center justify-center gap-4 bg-gold px-8 font-sans text-[0.8rem] font-medium tracking-[0.2em] text-accent-foreground uppercase transition-all hover:gap-5 sm:min-w-[252px]"
              >
                Connect with us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex h-[51px] items-center justify-center gap-4 border border-ink-foreground/30 bg-transparent px-8 font-sans text-[0.8rem] font-medium tracking-[0.2em] text-ink-foreground uppercase transition-colors hover:border-gold hover:text-gold sm:min-w-[252px]"
              >
                Explore services
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.22} className="w-full space-y-[14px]">
            {heroPillars.map((p) => (
              <div
                key={p.label}
                className="border border-white/15 bg-white/5 px-[22px] pt-[18px] pb-[16px] backdrop-blur-[2px]"
              >
                <p className="font-sans text-[0.72rem] font-semibold tracking-[0.22em] text-gold uppercase sm:text-[0.8rem]">
                  {p.label}
                </p>
                <p className="mt-2 font-sans text-[1.2rem] leading-[1.3] text-ink-foreground sm:text-[1.35rem]">
                  {p.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </motion.div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />

      <Section className="!py-6 sm:!py-8 md:!py-10">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="relative grid items-center gap-6 md:grid-cols-12">
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:h-[calc(100%-0.5rem)]" />

            <div className="md:col-span-7 pl-3 sm:pl-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-gold" />
                  <p className="kicker">Overview</p>
                </div>
                <h2 className="whitespace-nowrap text-[clamp(0.82rem,2.4vw,1.8rem)] leading-tight font-normal text-foreground">
                  Research and Growth Plans, Built Together.
                </h2>
                <div>
                  <p className="prose-body max-w-xl">
                    At Instrex, we provide end-to-end solutions, from uncovering deep market insights and shaping growth strategies to turning them into real, measurable outcomes.
                  </p>

                  <p className="prose-body mt-3 max-w-xl">
                    Most consulting firms treat research and strategy as separate services. We don't. Every recommendation we make is grounded in what we've actually found in the market, and every research project we run is designed with a business decision in mind.
                  </p>

                  <p className="prose-body mt-3 max-w-xl">
                    We stay involved through execution too. A strategy is only useful if it leaves the slide deck, so we work alongside our clients to make sure it does.
                  </p>

                  <p className="prose-body mt-3 max-w-xl">
                    Our team has led businesses and built new ventures across industries. That experience shapes how we advise: practical, specific, and grounded in what actually moves a business forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 pl-3 sm:pl-4">
              <div className="relative overflow-hidden border border-hairline bg-muted">
                <img
                  src={homeArt}
                  alt="Executive assembling glowing puzzle pieces in front of a city skyline"
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[4/5]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>

          {/* "What sets us apart" section removed as requested */}
        </div>
      </Section>

      <ServiceCatalog
        intro={null}
        offeringsLabel="Services"
        columns={3}
        showOverviewKicker={false}
        sectionClassName="!py-4 sm:!py-6 md:!py-6"
      >
        <Reveal className="flex h-full flex-col border border-hairline bg-background/40 p-5 sm:p-6 md:p-7 dark:bg-card/40">
          <div className="mb-5">
            <p className="font-display text-[1.3rem] leading-snug font-normal text-gold sm:text-[1.4rem]">
              Insights
            </p>
            <h2 className="font-display text-[1.3rem] leading-snug font-normal text-foreground sm:text-[1.4rem]">
              Market Research and Analysis
            </h2>
          </div>
          <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
            <li>Consumer needs and preference mapping</li>
            <li>Brand equity, positioning, and performance analysis</li>
            <li>Sales and distribution channel insights</li>
            <li>Business and B2B research</li>
            <li>Competitor benchmarking and evaluation</li>
          </ul>
          <div className="mt-auto pt-6">
            <div className="mb-4 h-px w-full bg-hairline" />
            <p className="prose-body text-gold">
              Qualitative Research | Quantitative Research | AI Tools-Based Research | Secondary
              Research
            </p>
          </div>
        </Reveal>

        <Reveal className="flex h-full flex-col border border-hairline bg-background/40 p-5 sm:p-6 md:p-7 dark:bg-card/40">
          <div className="mb-5">
            <p className="font-display text-[1.3rem] leading-snug font-normal text-gold sm:text-[1.4rem]">
              Strategy
            </p>
            <h2 className="font-display text-[1.3rem] leading-snug font-normal text-foreground sm:text-[1.4rem]">
              Business Growth Blueprint
            </h2>
          </div>
          <ul className="prose-body list-disc space-y-2 pl-5 marker:text-gold">
            <li>Business modelling and growth blueprint for sustained value creation</li>
            <li>
              Go to market strategy
              <ul className="prose-body mt-1 list-[circle] space-y-1 pl-5 marker:text-gold">
                <li>Product and pricing strategy</li>
                <li>Sales and distribution planning</li>
                <li>Brand strategy and marketing communication planning</li>
              </ul>
            </li>
            <li>Mid-term and long-term financial planning</li>
            <li>Market and financial feasibility for new ventures</li>
          </ul>
        </Reveal>

        <Reveal className="flex h-full flex-col border border-hairline bg-background/40 p-5 sm:p-6 md:p-7 dark:bg-card/40">
          <div className="mb-5">
            <p className="font-display text-[1.3rem] leading-snug font-normal text-gold sm:text-[1.4rem]">
              Execution
            </p>
            <h2 className="font-display text-[1.3rem] leading-snug font-normal text-foreground sm:text-[1.4rem]">
              Strategy Implementation, Facilitation &amp; Funding Support
            </h2>
          </div>
          <div className="prose-body space-y-2">
            <h3 className="font-semibold text-foreground">Strategy Implementation</h3>
            <p>
              Facilitating execution through a network of trusted specialist partners, including
              marketing specialists, sales professionals, finance experts, and investment bankers.
            </p>
          </div>
          <div className="prose-body mt-5 space-y-2">
            <h3 className="font-semibold text-foreground">Funding Support</h3>
            <ul className="list-disc space-y-2 pl-5 marker:text-gold">
              <li>Connecting ambitious businesses with the right investors.</li>
              <li>Creating investor-ready pitch decks</li>
              <li>Facilitating funding through our trusted investor network</li>
            </ul>
          </div>
        </Reveal>
      </ServiceCatalog>

      <Section className="!py-12 sm:!py-14 md:!py-16" tone="muted">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="space-y-5">
            <div className="space-y-5">
              <p className="kicker">Industries</p>
              <h2 className="font-display text-[2rem] leading-tight font-normal text-foreground sm:text-3xl md:text-[2.6rem]">
                Industries We Serve
              </h2>
              <p className="prose-body">
                We work across three broad sectors: Consumer Goods, Tech &amp; Startups, and
                Engineering and Manufacturing. Each comes with its own consumer behavior, channel
                structure, and growth challenges, and our research and strategy work is built around
                that difference rather than a generic template.
              </p>
            </div>

            <div className="pt-2">
              <p className="mb-5 font-sans text-[0.68rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Focus Sectors
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
                    Consumer Goods
                  </h3>
                  <p className="prose-body mt-3">
                    Foods &amp; Beverages, Personal Care &amp; Cosmetics, Fashion &amp; Lifestyle,
                    Home Care
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
                    Tech &amp; Startups
                  </h3>
                </div>
                <div>
                  <h3 className="font-display text-lg font-normal text-foreground sm:text-xl">
                    Engineering and Manufacturing
                  </h3>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="!py-12 sm:!py-14 md:!py-16" tone="ink">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <SectionRule>Selected clients</SectionRule>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="max-w-2xl text-[2rem] leading-tight font-normal text-ink-foreground sm:text-3xl md:text-[2.6rem]">
              Brands We’ve Worked With
            </h2>
            <div className="mt-5 h-px w-16 bg-gold sm:mt-6 sm:w-24" />
          </Reveal>

          <Reveal delay={0.12} className="mt-8 sm:mt-12">
            <div className="overflow-hidden rounded border border-white/10 bg-white/[0.02] py-4 sm:py-5">
              <div className="brand-marquee flex min-w-max items-center gap-5 sm:gap-7">
                {clientLogoTrack.map((logo, index) => (
                  <div
                    key={`${logo}-${index}`}
                    className="flex h-16 w-32 items-center justify-center rounded-md border border-white/5 bg-transparent px-3 py-2 sm:h-20 sm:w-40"
                  >
                    <img
                      src={`/individual_logos/${logo}`}
                      alt={`Client logo ${index + 1}`}
                      loading="lazy"
                      className="max-h-10 w-full object-contain sm:max-h-12"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <style>{`
            @keyframes marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }

            .brand-marquee {
              animation: marquee 28s linear infinite;
              will-change: transform;
            }

            .brand-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </Section>

      <Section className="!py-12 sm:!py-14 md:!py-16" tone="muted">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="relative grid items-center gap-8 sm:gap-10 md:grid-cols-12 md:gap-16">
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
            <div className="space-y-4 pl-4 sm:space-y-5 sm:pl-5 md:col-span-7 md:pl-7">
              <p className="kicker">Next step</p>
              <h2 className="text-[1.75rem] leading-tight font-normal sm:text-3xl md:text-[2.35rem]">
                Connect with us
              </h2>
              <div className="space-y-1 font-sans text-sm tracking-[0.08em] text-muted-foreground">
                <p className="break-all">business@instrex.in</p>
                <p>+91 7011845620</p>
              </div>
            </div>
            <div className="pl-4 sm:pl-5 md:col-span-5 md:flex md:justify-end md:pl-0">
              <Link
                to="/connect-with-us"
                className="group inline-flex w-full items-center justify-center gap-3 border border-foreground/25 px-8 py-4 font-sans text-[0.72rem] tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold sm:w-auto"
              >
                Submit your enquiry
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
