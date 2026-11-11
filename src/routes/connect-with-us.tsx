import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import heroImage from "@/assets/hero-boardroom.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader, Section, SectionRule } from "@/components/site/Layout";

export const Route = createFileRoute("/connect-with-us")({
  head: () => ({
    meta: [
      { title: "Connect with us" },
      {
        name: "description",
        content:
          "Submit your enquiry below. Contact us at business@instrex.in or +91 7011845620.",
      },
      { property: "og:title", content: "Connect with us" },
      { property: "og:description", content: "Submit your enquiry below" },
    ],
  }),
  component: Connect,
});

const fieldClass =
  "w-full border border-hairline bg-transparent px-4 py-3.5 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

const submitEnquiry = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z.string().trim().max(120),
      email: z.string().trim().email().max(254),
      message: z.string().trim().min(1).max(5000),
    }),
  )
  .handler(async ({ data }) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxLngUZGHzqwk44uc8UYhIfSdWlupIlH7DoKcUpy7mfaBXW5yeZxCZJAPu4f0zc9AZ3/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          signal: AbortSignal.timeout(15000),
        },
      );

      if (!response.ok) {
        console.error("Google Sheets enquiry submission failed with status", response.status);
        throw new Error("We couldn't submit your enquiry. Please try again.");
      }

      const responseText = await response.text();
      let result: unknown;
      try {
        result = JSON.parse(responseText);
      } catch {
        console.error("Google Sheets returned a non-JSON response");
        throw new Error("We couldn't submit your enquiry. Please try again.");
      }

      if (
        typeof result !== "object" ||
        result === null ||
        !("success" in result) ||
        result.success !== true
      ) {
        console.error("Google Sheets did not confirm the enquiry submission");
        throw new Error("We couldn't submit your enquiry. Please try again.");
      }

      return { success: true };
    } catch (error) {
      if (error instanceof Error && error.message === "We couldn't submit your enquiry. Please try again.") throw error;
      console.error("Google Sheets enquiry submission failed", error);
      throw new Error("We couldn't submit your enquiry. Please try again.");
    }
  });

function Connect() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Connect with us"
        image={heroImage}
        imageAlt="Consulting office for client conversations"
      />

      <Section className="!py-14 md:!py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="relative grid items-start gap-10 border-b border-hairline pb-12 md:grid-cols-12 md:gap-16 md:pb-14">
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
            <div className="space-y-5 pl-5 md:col-span-7 md:pl-7">
              <p className="kicker">Overview</p>
              <p className="prose-body">
                Tell us about your market, growth challenge, or next decision. We’ll respond with
                the right next step — whether that’s research, strategy, or execution support.
              </p>
              <p className="prose-body">
                Prefer to reach us directly? Use the contact details alongside the form.
              </p>
            </div>
          </Reveal>

          <div className="pt-10 md:pt-12">
            <Reveal>
              <SectionRule>Get in touch</SectionRule>
            </Reveal>

            <div className="grid items-stretch gap-4 sm:gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-6">
              <Reveal className="flex h-full flex-col gap-4 sm:flex-row sm:gap-5 md:flex-col">
                <a
                  href="tel:+917011845620"
                  className="group relative flex flex-1 flex-col border border-hairline bg-background/40 p-5 transition-colors hover:border-gold/40 sm:p-6 md:p-7 dark:bg-card/40"
                >
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gold/0 transition-colors group-hover:bg-gold" />
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      Phone
                    </p>
                    <Phone className="h-4 w-4 text-gold" />
                  </div>
                  <p className="mt-6 font-display text-2xl leading-snug md:text-[1.65rem]">
                    +91 7011845620
                  </p>
                  <p className="prose-body mt-3 text-[0.95rem]">
                    Contact Number +91 7011845620
                  </p>
                </a>

                <a
                  href="mailto:business@instrex.in"
                  className="group relative flex flex-1 flex-col border border-hairline bg-background/40 p-6 transition-colors hover:border-gold/40 md:p-7 dark:bg-card/40"
                >
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gold/0 transition-colors group-hover:bg-gold" />
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      Email
                    </p>
                    <Mail className="h-4 w-4 text-gold" />
                  </div>
                  <p className="mt-6 font-display text-2xl leading-snug break-all md:text-[1.65rem]">
                    business@instrex.in
                  </p>
                  <p className="prose-body mt-3 text-[0.95rem]">Email: business@instrex.in</p>
                </a>
              </Reveal>

              <Reveal
                delay={0.08}
                className="relative border border-hairline bg-background/40 p-6 md:p-8 dark:bg-card/40"
              >
                <div className="absolute top-0 left-0 h-full w-[2px] bg-gold" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="kicker">Enquiry</p>
                    <h2 className="mt-3 text-[1.45rem] leading-snug font-normal md:text-[1.65rem]">
                      Submit your enquiry below
                    </h2>
                  </div>
                  <span className="font-display text-3xl leading-none text-gold/40 md:text-4xl">
                    01
                  </span>
                </div>

                <form
                  className="mt-8 space-y-5"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    setSending(true);
                    setSubmitError(null);
                    setSent(false);

                    try {
                      await submitEnquiry({
                        data: {
                          name: String(formData.get("name") ?? ""),
                          email: String(formData.get("email") ?? ""),
                          message: String(formData.get("message") ?? ""),
                        },
                      });
                      setSent(true);
                      form.reset();
                    } catch (error) {
                      setSubmitError(
                        error instanceof Error
                          ? error.message
                          : "We couldn't submit your enquiry. Please try again.",
                      );
                    } finally {
                      setSending(false);
                    }
                  }}
                >
                  <div>
                    <label htmlFor="name" className="font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      Your Name
                    </label>
                    <input id="name" name="name" className={`${fieldClass} mt-2.5`} />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      Email Address*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={`${fieldClass} mt-2.5`}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="font-sans text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`${fieldClass} mt-2.5 resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="group inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 font-sans text-[0.72rem] tracking-[0.2em] text-accent-foreground uppercase transition-all hover:gap-5"
                  >
                    {sending ? "Submitting…" : "Submit"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  {submitError ? (
                    <p role="alert" className="border-t border-hairline pt-4 font-sans text-xs text-destructive">
                      {submitError}
                    </p>
                  ) : null}
                  {sent ? (
                    <p role="status" className="border-t border-hairline pt-4 font-sans text-xs tracking-[0.14em] text-gold uppercase">
                      Thank you — we will be in touch.
                    </p>
                  ) : null}
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
