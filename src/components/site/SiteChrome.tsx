import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import logoWhite from "@/assets/instrex-logo-white.png";

type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/market-research",
    children: [
      { label: "Market Research", to: "/market-research" },
      { label: "Business Strategy", to: "/business-strategy" },
      { label: "Strategy Execution", to: "/strategy-execution" },
    ],
  },
  {
    label: "Case Studies",
    to: "/quantitative-research",
    children: [
      { label: "Quantitative Research", to: "/quantitative-research" },
      { label: "Qualitative Research", to: "/qualitative-research" },
      { label: "Brand Strategy", to: "/brand-strategy" },
      { label: "GTM Plan", to: "/gtm-plan" },
      { label: "Financial Analysis", to: "/financial-analysis" },
    ],
  },
  { label: "Connect with us", to: "/connect-with-us" },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      onClick={() => setDark((d) => !d)}
      className="rounded-full border border-hairline p-2 text-ink-foreground/70 transition-colors hover:border-gold hover:text-gold"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function Wordmark() {
  return (
    <Link to="/" className="group flex max-w-[58vw] items-center leading-none sm:max-w-none">
      <img
        src={logoWhite}
        alt="Instrex — Insights I Strategy I Execution"
        width={957}
        height={349}
        className="h-7 w-auto max-w-full transition-transform duration-500 group-hover:scale-[1.02] sm:h-8 md:h-10"
      />
    </Link>
  );
}

export function SiteHeader() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 glass-dark transition-all duration-500 ${
        scrolled ? "py-2.5 shadow-[var(--shadow-lift)] sm:py-3" : "py-3.5 sm:py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Wordmark />

        <nav className="hidden items-center gap-6 xl:gap-9 lg:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <Link
                to={item.to}
                className="flex items-center gap-1.5 font-sans text-[0.72rem] tracking-[0.08em] text-ink-foreground/75 uppercase transition-colors hover:text-gold xl:text-[0.8rem] xl:tracking-[0.1em] [&.active]:text-gold"
              >
                {item.label}
                {item.children ? <ChevronDown className="h-3 w-3" /> : null}
              </Link>
              <AnimatePresence>
                {item.children && open === item.label ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-dark absolute top-full left-1/2 mt-4 w-60 -translate-x-1/2 rounded-md p-2"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block rounded px-4 py-2.5 font-sans text-[0.8rem] text-ink-foreground/75 transition-colors hover:bg-gold/10 hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            onClick={() => setMobile((m) => !m)}
            className="rounded-full border border-hairline p-2 text-ink-foreground/70 lg:hidden"
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 overflow-hidden border-t border-white/10 lg:hidden"
          >
            <div className="max-h-[min(78vh,34rem)] space-y-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6 sm:py-6">
              {NAV.map((item) => (
                <div key={item.label} className="border-b border-white/10 py-3 last:border-b-0">
                  <Link
                    to={item.to}
                    onClick={() => setMobile(false)}
                    className="font-sans text-sm tracking-[0.1em] text-ink-foreground/90 uppercase"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mt-3 space-y-2.5 border-l border-hairline pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => setMobile(false)}
                          className="block font-sans text-[0.85rem] leading-snug text-ink-foreground/65"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink px-4 py-12 text-ink-foreground sm:px-6 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <img
            src={logoWhite}
            alt="Instrex — Insights I Strategy I Execution"
            width={957}
            height={349}
            loading="lazy"
            className="h-8 w-auto sm:h-10"
          />
        </div>
        <div className="space-y-2 font-sans text-sm text-ink-foreground/70">
          <p>
            <a href="mailto:business@instrex.in" className="break-all transition-colors hover:text-gold">
              business@instrex.in
            </a>
          </p>
          <p>
            <a href="tel:+917011845620" className="transition-colors hover:text-gold">
              +91 7011845620
            </a>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-7">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="font-sans text-[0.65rem] tracking-[0.14em] text-ink-foreground/60 uppercase transition-colors hover:text-gold sm:text-[0.7rem] sm:tracking-[0.16em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
