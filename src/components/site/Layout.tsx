import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
  constrain = true,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "ink" | "muted";
  id?: string;
  constrain?: boolean;
}) {
  const tones: Record<string, string> = {
    default: "bg-background text-foreground",
    ink: "bg-ink text-ink-foreground",
    muted: "bg-muted text-foreground",
  };
  return (
    <section id={id} className={`${tones[tone]} px-4 py-16 sm:px-6 sm:py-20 md:py-28 ${className}`}>
      <div className={constrain ? "mx-auto w-full max-w-6xl" : "w-full"}>{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-3xl leading-tight font-normal md:text-5xl ${className}`}>{children}</h2>
  );
}

export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`prose-body max-w-3xl ${className}`}>{children}</p>;
}

/** Left-aligned intro block used under every service PageHeader. */
export function PageIntro({
  children,
  meta,
  compact = false,
}: {
  children: ReactNode;
  meta?: ReactNode;
  compact?: boolean;
}) {
  return (
    <Section className={compact ? "!py-14 md:!py-16" : undefined}>
      <Reveal className="max-w-2xl space-y-5">
        {children}
        {meta ? (
          <p className="pt-1 font-sans text-[0.85rem] leading-relaxed font-semibold text-gold">
            {meta}
          </p>
        ) : null}
      </Reveal>
    </Section>
  );
}

/** Consistent subheading inside service content. */
export function BandLabel({ children }: { children: ReactNode }) {
  return <p className="font-sans text-sm font-semibold tracking-tight">{children}</p>;
}

/** Gold method / capability tags. */
export function MetaTags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 sm:gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="border border-gold/35 bg-gold/8 px-2.5 py-1.5 font-sans text-[0.62rem] font-semibold tracking-[0.12em] text-foreground uppercase sm:px-3.5 sm:py-2 sm:text-[0.68rem] sm:tracking-[0.14em]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Professional service page body — left-aligned, wide, structured offerings grid.
 */
export function ServiceCatalog({
  intro,
  meta,
  tags,
  tagsLabel = "Methods & capabilities",
  offeringsLabel = "What we deliver",
  columns = 2,
  children,
  showOverviewKicker = true,
  sectionClassName,
}: {
  intro: ReactNode;
  meta?: ReactNode;
  tags?: string[];
  tagsLabel?: string;
  offeringsLabel?: string;
  columns?: 2 | 3;
  children: ReactNode;
  showOverviewKicker?: boolean;
  sectionClassName?: string;
}) {
  return (
    <Section className={sectionClassName ?? "!py-12 sm:!py-14 md:!py-16"}>
      <div className="mx-auto w-full max-w-6xl">
        {intro ? (
        <Reveal className="relative grid items-start gap-8 border-b border-hairline pb-10 sm:gap-10 sm:pb-12 md:grid-cols-12 md:gap-16 md:pb-14">
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:h-[calc(100%-0.5rem)]" />
          <div className="space-y-4 pl-4 sm:space-y-5 sm:pl-5 md:col-span-7 md:pl-7">
            {showOverviewKicker ? <p className="kicker">Overview</p> : null}
            {intro}
          </div>
          <div className="space-y-4 pl-4 sm:pl-5 md:col-span-5 md:pl-0 md:pt-8">
            {tags && tags.length > 0 ? (
              <>
                <p className="font-sans text-[0.68rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {tagsLabel}
                </p>
                <MetaTags items={tags} />
              </>
            ) : meta ? (
              <p className="font-sans text-[0.8rem] leading-relaxed font-semibold text-gold">{meta}</p>
            ) : null}
          </div>
        </Reveal>
        ) : null}

        <div className={intro ? "pt-8 sm:pt-10 md:pt-12" : ""}>
          {offeringsLabel ? (
            <Reveal className="mb-6 flex items-center gap-4 sm:mb-8 sm:gap-5">
              <p className="kicker shrink-0">{offeringsLabel}</p>
              <span className="h-px flex-1 bg-hairline" />
            </Reveal>
          ) : null}
          <div
            className={`grid gap-4 sm:gap-5 md:gap-6 ${
              columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </Section>
  );
}

/** Structured service offering cell for the catalog grid. */
export function ServiceBlock({
  index,
  title,
  children,
  points,
  action,
}: {
  index: string;
  title: string;
  children?: ReactNode;
  points?: ReactNode[];
  action?: ReactNode;
}) {
  return (
    <Reveal className="group relative flex h-full flex-col border border-hairline bg-background/40 p-5 transition-colors duration-500 hover:border-gold/40 sm:p-6 md:p-8 dark:bg-card/40">
      <div className="absolute top-0 left-0 h-full w-[2px] bg-gold/0 transition-colors duration-500 group-hover:bg-gold" />
      <div className="mb-4 flex min-h-0 items-start justify-between gap-3 sm:mb-5 sm:min-h-[3.25rem] sm:gap-4">
        <h2 className="text-[1.2rem] leading-snug font-normal sm:text-[1.35rem] md:text-[1.5rem]">
          {title}
        </h2>
        <span className="shrink-0 font-display text-2xl leading-none text-gold/45 transition-colors duration-500 group-hover:text-gold sm:text-3xl md:text-4xl">
          {index}
        </span>
      </div>
      {children ? <div className="mb-5 flex-1 space-y-3">{children}</div> : <div className="flex-1" />}
      {points && points.length > 0 ? (
        <div className="mt-auto border-t border-hairline pt-5">
          <p className="mb-3 font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Key points
          </p>
          <GoldList items={points} />
        </div>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </Reveal>
  );
}

/** Section heading row used across structured pages. */
export function SectionRule({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-5">
      <p className="kicker shrink-0">{children}</p>
      <span className="h-px flex-1 bg-hairline" />
    </div>
  );
}

/** Page masthead used on every inner page. */
export function PageHeader({
  kicker,
  title,
  image,
  imageAlt,
}: {
  kicker?: string;
  title: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <motion.img
        src={image}
        alt={imageAlt}
        width={1600}
        height={1024}
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.45 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/65" />
      <div className="mx-auto flex min-h-[38vh] w-full max-w-6xl flex-col justify-end px-4 pt-28 pb-10 sm:min-h-[42vh] sm:px-6 sm:pt-36 sm:pb-14 md:min-h-[46vh] md:pb-16">
        <Reveal>
          {kicker ? <p className="kicker">{kicker}</p> : null}
          <h1 className="mt-4 max-w-4xl text-[1.85rem] leading-[1.12] font-normal sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <div className="mt-6 h-px w-16 bg-gold sm:mt-8 sm:w-24" />
        </Reveal>
      </div>
    </header>
  );
}

/** Numbered / bulleted list with gold markers. */
export function GoldList({
  items,
  className = "",
}: {
  items: ReactNode[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3.5 rounded-xl border border-gold/10 bg-gold/[0.03] px-3 py-2.5 shadow-[0_0_0_1px_rgba(183,139,82,0.02)]"
        >
          <span className="mt-[0.55em] h-[5px] w-[5px] shrink-0 rounded-full bg-gold" />
          <span className="prose-body text-[1rem] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberList({ items, compact = false }: { items: ReactNode[]; compact?: boolean }) {
  if (compact) {
    return (
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="font-sans text-[0.8rem] font-medium tracking-[0.06em] text-foreground"
          >
            <span className="mr-2 text-gold">{String(i + 1).padStart(2, "0")}</span>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ol className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3.5">
          <span className="prose-body mt-1 font-semibold tracking-[0.12em] text-gold tabular-nums">
            {i + 1}
          </span>
          <span className="prose-body flex-1">{item}</span>
        </li>
      ))}
    </ol>
  );
}

/** Soft content block without decorative accent lines. */
export function Panel({
  title,
  children,
  className = "",
}: {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {title ? (
        <h3 className="font-sans text-base font-semibold tracking-tight md:text-lg">{title}</h3>
      ) : null}
      <div className={title ? "mt-4" : ""}>{children}</div>
    </div>
  );
}

/** Inline outcome metrics — editorial, structured. */
export function OutcomeMetrics({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="border border-hairline bg-background/40 px-5 py-5 dark:bg-card/40"
        >
          <p className="font-display text-3xl text-gold md:text-4xl">{item.value}</p>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

/** Vertical timeline for phased case-study content. */
export function Timeline({
  steps,
}: {
  steps: { label: string; title: ReactNode; children: ReactNode }[];
}) {
  return (
    <div className="space-y-0 divide-y divide-hairline border border-hairline">
      {steps.map((step, i) => (
        <Reveal key={i} className="relative p-5 md:p-6">
          <div className="absolute top-0 left-0 h-full w-[2px] bg-gold/60" />
          <p className="kicker">{step.label}</p>
          <h3 className="mt-3 font-display text-xl leading-snug md:text-2xl">{step.title}</h3>
          <div className="mt-4 max-w-3xl">{step.children}</div>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Full-width editorial feature band. Each service is its own premium section,
 * stacked one after another — never a multi-column card grid.
 */
export function FeatureBand({
  eyebrow,
  title,
  image,
  imageAlt,
  flip = false,
  tone = "default",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  image?: string;
  imageAlt?: string;
  flip?: boolean;
  tone?: "default" | "ink" | "muted";
  children: ReactNode;
}) {
  const tones: Record<string, string> = {
    default: "bg-background text-foreground",
    ink: "bg-ink text-ink-foreground",
    muted: "bg-muted text-foreground",
  };
  return (
    <section className={`${tones[tone]} px-4 py-14 sm:px-6 sm:py-20 md:py-28`}>
      <div
        className={`mx-auto grid w-full max-w-6xl items-start gap-8 sm:gap-12 md:gap-16 ${
          image ? "md:grid-cols-2 md:items-center" : ""
        }`}
      >
        <Reveal className={image ? (flip ? "md:order-2" : "") : "w-full max-w-3xl"}>
          {eyebrow ? (
            <p className="font-display text-[1.4rem] leading-snug font-normal text-gold sm:text-[1.5rem] md:text-[1.65rem]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-1 text-[1.65rem] leading-[1.15] font-normal sm:mt-1 sm:text-3xl md:text-[2.75rem]">
            {title}
          </h2>
          <div className="mt-7 space-y-6 sm:mt-10 sm:space-y-7">{children}</div>
        </Reveal>
        {image ? (
          <Reveal delay={0.12} className={flip ? "md:order-1" : ""}>
            <img
              src={image}
              alt={imageAlt ?? ""}
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

/**
 * Continuous research narrative — structured left-aligned case study body.
 */
export function Story({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute top-0 left-0 hidden h-full w-px bg-gradient-to-b from-gold via-gold/35 to-transparent md:block" />
      <div className="divide-y divide-hairline border-t border-hairline md:pl-8">{children}</div>
    </div>
  );
}

export function Chapter({
  label,
  title,
  children,
  media,
  mediaAlt,
  mediaCaption,
  wideMedia = false,
}: {
  label: string;
  title?: ReactNode;
  children?: ReactNode;
  media?: string;
  mediaAlt?: string;
  mediaCaption?: string;
  wideMedia?: boolean;
}) {
  return (
    <Reveal className="relative grid gap-4 py-8 sm:gap-6 sm:py-10 md:grid-cols-12 md:gap-10 md:py-12">
      <div className="md:col-span-3">
        <p className="kicker">{label}</p>
      </div>
      <div className="md:col-span-9">
        {title ? (
          <h2 className="text-[1.35rem] leading-[1.25] font-normal sm:text-2xl md:text-[2rem]">
            {title}
          </h2>
        ) : null}
        {children ? <div className={`space-y-5 ${title ? "mt-5" : ""}`}>{children}</div> : null}
        {media ? (
          <figure className={`mt-8 ${wideMedia ? "md:-mr-8 lg:-mr-16" : ""}`}>
            <img
              src={media}
              alt={mediaAlt ?? ""}
              loading="lazy"
              width={1600}
              height={900}
              className="aspect-[16/10] w-full border border-hairline object-cover"
            />
            {mediaCaption ? (
              <figcaption className="mt-4 font-sans text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {mediaCaption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>
    </Reveal>
  );
}

/** Full-bleed visual break between chapters of a research story. */
export function StoryVisual({
  image,
  imageAlt,
  caption,
}: {
  image: string;
  imageAlt: string;
  caption?: string;
}) {
  return (
    <Reveal className="w-full py-10 md:py-12">
      <figure>
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={1600}
          height={1000}
          className="aspect-[16/9] w-full border border-hairline object-cover"
        />
        {caption ? (
          <figcaption className="mt-4 font-sans text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
