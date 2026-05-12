import { c as createComponent, i as renderComponent, r as renderTemplate, d as createAstro } from '../../chunks/astro/server_D772YtDc.mjs';
import 'kleur/colors';
import { N as Navbar, m as marketplaceTemplates, a as mapTemplateRow, $ as $$Layout } from '../../chunks/map-row_2vU0_305.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
export { renderers } from '../../renderers.mjs';

const social = [
  { label: "X", href: "https://twitter.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Discord", href: "https://discord.com" }
];
function FooterCommunity({ dashboardUrl = "/dashboard" }) {
  return /* @__PURE__ */ jsxs("footer", { id: "community", className: "relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[#030303] py-24", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute inset-0 opacity-[0.35]",
        style: {
          backgroundImage: "radial-gradient(rgba(124,255,79,0.16) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 120px, 24px 24px",
          backgroundPosition: "center top",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(124,255,79,0.08),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(124,255,79,0.06),transparent_40%)]" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center select-none", children: /* @__PURE__ */ jsx("span", { className: "font-display text-[clamp(4rem,18vw,14rem)] font-black uppercase leading-none text-white/[0.04]", children: "DEV.ECOM" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mx-auto max-w-xl rounded-2xl border border-white/[0.08] bg-[#0b0b0b]/90 p-8 shadow-card backdrop-blur-xl",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-center font-display text-2xl font-bold tracking-tight", children: "Global merchant community" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-center text-sm text-muted", children: "Tell us about your storefront goals — we respond within one business day." }),
            /* @__PURE__ */ jsxs("form", { className: "mt-8 space-y-4", onSubmit: (e) => e.preventDefault(), children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  name: "name",
                  placeholder: "Name",
                  className: "w-full rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm outline-none ring-accent/30 placeholder:text-muted focus:ring-2"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  name: "email",
                  type: "email",
                  placeholder: "Email",
                  className: "w-full rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm outline-none ring-accent/30 placeholder:text-muted focus:ring-2"
                }
              ),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "message",
                  placeholder: "Message",
                  rows: 4,
                  className: "w-full resize-none rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm outline-none ring-accent/30 placeholder:text-muted focus:ring-2"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "w-full rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90",
                  children: "Send Message"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-20 grid gap-10 border-t border-white/[0.06] pt-12 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted", children: "Product" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#templates", className: "hover:text-white", children: "Templates" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#demo", className: "hover:text-white", children: "Components" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: dashboardUrl, className: "hover:text-white", children: "Dashboard" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted", children: "Company" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#community", className: "hover:text-white", children: "Contact" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faq", className: "hover:text-white", children: "FAQ" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Careers" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted", children: "Legal" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Privacy" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white", children: "Terms" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-3", children: social.map((s) => /* @__PURE__ */ jsx(
            "a",
            {
              href: s.href,
              className: "rounded-full border border-white/[0.08] px-3 py-1 text-xs font-semibold text-muted transition hover:border-white/[0.14] hover:text-white",
              children: s.label
            },
            s.label
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-12 text-center text-xs text-muted", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " DEV.ECOM. Built for Shopify merchants."
      ] })
    ] })
  ] });
}

function GridBackdrop({ className = "" }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.35]",
            style: {
              backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,255,79,0.22),transparent_65%)] blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_60%)] blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,255,79,0.06),transparent_55%)]" })
      ]
    }
  );
}

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45 }
};
function youtubeEmbed(url) {
  if (!url?.trim()) return null;
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  if (url.includes("youtube.com/embed")) return url;
  return null;
}
function normalizeFeatures(f) {
  if (!f?.length) return [];
  const first = f[0];
  if (typeof first === "string") return f.map((title) => ({ title, description: "" }));
  return f;
}
function formatMoney(n) {
  return `$${n.toFixed(0)}`;
}
function TemplateDetailView({
  template,
  related,
  dashboardUrl = "/dashboard",
  checkoutBaseUrl = "/dashboard"
}) {
  const [openFeature, setOpenFeature] = useState(0);
  const videoSrc = youtubeEmbed(template.preview_video_url);
  const features = normalizeFeatures(template.features);
  const displayFeatures = features.length ? features : [
    { title: "SEO optimized", description: "Built-in schema, meta objects, and Lighthouse-minded sections." },
    { title: "Conversion layout", description: "Hero, proof, and PDP flows tuned for AOV." }
  ];
  const effectivePrice = template.sale_price != null && template.sale_price < template.price ? template.sale_price : template.price;
  const showStrike = template.sale_price != null && template.sale_price < template.price;
  const checkoutHref = `${checkoutBaseUrl.replace(/\/$/, "")}/checkout?slug=${encodeURIComponent(template.slug)}`;
  const metrics = useMemo(
    () => [
      { label: "SEO score", value: template.seo_score ?? 99 },
      { label: "Speed", value: template.speed_score ?? 98 },
      { label: "Mobile", value: template.mobile_score ?? 99 },
      { label: "CRO", value: template.conversion_score ?? 97 }
    ],
    [template]
  );
  const advantages = [
    { title: "Performance driven", body: "Lazy media, section budgets, and storefront telemetry baked in." },
    { title: "SEO ready", body: "Structured headlines, canonical helpers, and crawl-friendly hierarchy." },
    { title: "Premium UI", body: "Glass panels, neon accents, and editorial grids matching DEV.ECOM DNA." },
    { title: "Easy customization", body: "Theme settings, modular sections, and snippet-level overrides." }
  ];
  const techRows = [
    { k: "Framework", v: "Shopify Online Store 2.0" },
    { k: "Shopify", v: "2.0 sections · JSON templates" },
    { k: "Optimization", v: "Critical CSS patterns · defer scripts" },
    { k: "Responsive", v: "Breakpoint QA across core devices" },
    { k: "Browsers", v: "Chrome · Safari · Firefox · Edge (latest)" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-dvh overflow-x-hidden bg-bg", children: [
    /* @__PURE__ */ jsx(GridBackdrop, { className: "fixed" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none fixed inset-0 opacity-[0.12]",
        "aria-hidden": true,
        style: {
          backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
          maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsx(Navbar, { dashboardUrl }),
    /* @__PURE__ */ jsx("section", { className: "relative pt-28 pb-16 sm:pb-24 lg:pt-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8", children: [
      /* @__PURE__ */ jsxs(motion.div, { ...fade, children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.35em] text-accent", children: template.category }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3rem]", children: template.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-relaxed text-muted sm:text-lg", children: template.short_description }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-2xl border border-white/[0.08] bg-[#111]/90 p-6 shadow-card", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted", children: "Standard license" }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-baseline gap-3", children: [
                showStrike && /* @__PURE__ */ jsx("span", { className: "text-lg text-muted line-through", children: formatMoney(template.price) }),
                /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold text-accent", children: formatMoney(effectivePrice) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: checkoutHref,
                  className: "rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-accent/90",
                  children: "Buy now"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: template.live_demo_url ?? "/#demo",
                  className: "rounded-full border border-white/[0.14] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.05]",
                  children: "Live demo"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-2 border-t border-white/[0.06] pt-6 text-sm text-muted", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "✓" }),
              " Shopify OS 2.0 sections & JSON templates"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "✓" }),
              " Performance-minded assets & lazy loading hooks"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: "✓" }),
              " Merchant docs + developer migration notes"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex -space-x-2", children: [12, 33, 47].map((id) => /* @__PURE__ */ jsx(
              "img",
              {
                src: `https://i.pravatar.cc/48?img=${id}`,
                alt: "",
                width: 36,
                height: 36,
                className: "h-9 w-9 rounded-full border-2 border-bg object-cover",
                loading: "lazy"
              },
              id
            )) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-white", children: [
                template.rating ?? 4.9,
                "/5 · ",
                template.review_count ?? 120,
                "+ reviews"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted", children: "Trusted by Shopify Plus merchants" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55 },
          className: "relative lg:justify-self-end",
          children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[560px]", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(124,255,79,0.18),transparent_65%)] blur-2xl" }),
            /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] shadow-card", children: template.featured_image ? /* @__PURE__ */ jsx(
              "img",
              {
                src: template.featured_image,
                alt: "",
                width: 1100,
                height: 620,
                className: "aspect-video w-full object-cover",
                loading: "eager"
              }
            ) : null }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                animate: { y: [0, -8, 0] },
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                className: "absolute -bottom-6 -left-4 hidden w-[min(100%,280px)] rounded-xl border border-white/[0.08] bg-[#111]/95 p-4 shadow-glow sm:block",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-wider text-muted", children: "Live revenue" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1 text-2xl font-semibold text-accent", children: "$284k" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-2 h-10 w-full rounded-md bg-gradient-to-r from-accent/30 to-transparent" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                animate: { y: [0, 10, 0] },
                transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                className: "absolute -right-2 top-8 hidden w-44 rounded-xl border border-white/[0.08] bg-[#111]/95 p-3 shadow-card sm:block",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-[10px] text-muted", children: "Perf" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xl font-bold text-white", children: [
                    template.speed_score ?? 98,
                    "/100"
                  ] })
                ]
              }
            )
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-[1320px] gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8", children: metrics.map((m) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        ...fade,
        className: "rounded-2xl border border-white/[0.08] bg-[#111] p-6 text-center shadow-card",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted", children: m.label }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-4xl font-bold text-accent", children: m.value }),
          /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-1.5 max-w-[120px] overflow-hidden rounded-full bg-white/[0.06]", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full bg-accent", style: { width: `${m.value}%` } }) })
        ]
      },
      m.label
    )) }) }),
    videoSrc ? /* @__PURE__ */ jsx("section", { className: "relative py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(motion.div, { ...fade, className: "overflow-hidden rounded-2xl border border-white/[0.08] bg-black shadow-card", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        title: "Preview video",
        src: videoSrc,
        className: "aspect-video w-full",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    ) }) }) }) : null,
    /* @__PURE__ */ jsx("section", { className: "relative py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        ...fade,
        className: "rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-6 shadow-[0_0_60px_rgba(124,255,79,0.06)]",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: "https://i.pravatar.cc/56?img=68", alt: "", width: 48, height: 48, className: "h-12 w-12 rounded-full" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: "@merchantpulse" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted", children: "Verified Shopify Plus brand" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-5 text-sm leading-relaxed text-zinc-300", children: [
            "“We migrated to ",
            template.title,
            " in a weekend — Lighthouse scores jumped and checkout feels incredible on mobile.”"
          ] }),
          template.gallery_images[1] ? /* @__PURE__ */ jsx(
            "img",
            {
              src: template.gallery_images[1],
              alt: "",
              className: "mt-6 max-h-56 w-full rounded-xl border border-white/[0.06] object-cover",
              loading: "lazy"
            }
          ) : null
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(motion.div, { ...fade, className: "rounded-2xl border border-white/[0.08] bg-[#111]/80 p-8 sm:p-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-white", children: "Overview" }),
      /* @__PURE__ */ jsx("div", { className: "prose prose-invert prose-sm mt-6 max-w-none whitespace-pre-wrap text-zinc-400", children: template.full_description }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-8 border-t border-white/[0.06] pt-10 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-accent", children: "Tech stack" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm text-muted", children: template.tech_stack.map((t) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "•" }),
            " ",
            t
          ] }, t)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider text-accent", children: "Included pages" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm text-muted", children: template.included_pages.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "•" }),
            " ",
            p
          ] }, p)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-white", children: "Template highlights" }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3", children: displayFeatures.map((f, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: false,
          className: "overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0c]",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFeature(openFeature === i ? null : i),
                className: "flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-white",
                children: [
                  f.title,
                  /* @__PURE__ */ jsx("span", { className: "text-muted", children: openFeature === i ? "−" : "+" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: openFeature === i && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                className: "border-t border-white/[0.06]",
                children: /* @__PURE__ */ jsx("p", { className: "px-5 py-4 text-sm leading-relaxed text-muted", children: f.description })
              }
            ) })
          ]
        },
        f.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-white", children: "Technical specifications" }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-3", children: techRows.map((row) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          ...fade,
          className: "rounded-xl border border-white/[0.08] bg-[#111] p-5",
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted", children: row.k }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-medium text-white", children: row.v })
          ]
        },
        row.k
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-white", children: "Related templates" }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-3", children: related.slice(0, 3).map((r) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/templates/${r.slug}`,
          className: "group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111] transition hover:border-accent/35 hover:shadow-glow",
          children: [
            r.featured_image ? /* @__PURE__ */ jsx("div", { className: "aspect-video overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: r.featured_image, alt: "", className: "h-full w-full object-cover transition group-hover:scale-[1.03]", loading: "lazy" }) }) : null,
            /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: r.title }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-accent", children: formatMoney(r.sale_price ?? r.price) })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 line-clamp-2 text-xs text-muted", children: r.short_description }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 flex gap-2", children: /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/[0.08] px-2 py-0.5 text-[10px] text-muted", children: r.platforms[0] ?? "Shopify" }) })
            ] })
          ]
        },
        r.slug
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-[1320px] gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8", children: advantages.map((a) => /* @__PURE__ */ jsxs(motion.div, { ...fade, className: "rounded-2xl border border-white/[0.08] bg-[#111] p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent", children: "✦" }),
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: a.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted", children: a.body })
    ] }, a.title)) }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-16", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[720px] px-4 text-center sm:px-6", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        ...fade,
        className: "rounded-2xl border border-white/[0.1] bg-[#0a0a0a] px-8 py-12 shadow-[0_0_80px_rgba(124,255,79,0.08)]",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-white sm:text-3xl", children: "Need customization for this template?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted", children: "White-glove setup, migrations, and bespoke sections — our team ships fast." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsx("a", { href: "/#community", className: "rounded-full bg-accent px-8 py-3 text-sm font-semibold text-black hover:bg-accent/90", children: "Request customization" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/#faq",
                className: "rounded-full border border-white/[0.14] px-8 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]",
                children: "Contact support"
              }
            )
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(FooterCommunity, { dashboardUrl })
  ] });
}

const DEFAULT_FEATURES = [
  { title: "SEO optimized", description: "Structured data, meta templates, and Core Web Vitals tuned sections." },
  { title: "High conversion design", description: "Above-the-fold merchandising, trust bands, and urgency slots." },
  { title: "Mobile responsive", description: "Touch-first layouts across breakpoints with adaptive imagery." },
  { title: "Fast checkout", description: "Shopify Checkout aligned flows with drawer cart patterns." },
  { title: "Premium animations", description: "Subtle motion via CSS + section-level choreography hooks." }
];
function fakeId(slug) {
  return `fb-${slug}`;
}
function marketplaceItemToRecord(m) {
  const price = m.priceValue;
  const platforms = m.platforms.map((p) => p === "Shopify Plus" ? "Shopify Plus" : "Shopify");
  return {
    id: fakeId(m.slug),
    slug: m.slug,
    title: m.name,
    short_description: m.description,
    full_description: `${m.description}

Ship with opinionated sections, JSON templates, and developer-friendly Liquid snippets. Includes global theme settings, reusable blocks, and documentation for merchant handoff.`,
    category: m.marketplaceCategory,
    platforms,
    price,
    sale_price: null,
    featured_image: m.image,
    gallery_images: [m.image],
    live_demo_url: m.demoHref ?? "/#demo",
    preview_video_url: "",
    features: DEFAULT_FEATURES,
    tech_stack: ["Shopify OS 2.0", "Liquid", "JSON Templates", "App blocks"],
    included_pages: ["Home", "Product", "Collection", "Cart", "Blog", "About"],
    seo_score: 99,
    speed_score: 98,
    mobile_score: 99,
    conversion_score: 97,
    rating: 4.9,
    review_count: 128,
    is_featured: Boolean(m.pro),
    published: true,
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function getFallbackTemplateRecord(slug) {
  const m = marketplaceTemplates.find((t) => t.slug === slug);
  if (!m) return null;
  return marketplaceItemToRecord(m);
}
function getFallbackRelated(currentSlug, category, limit = 3) {
  return marketplaceTemplates.filter((t) => t.slug !== currentSlug && t.marketplaceCategory === category).slice(0, limit).map(marketplaceItemToRecord);
}
function getFallbackRelatedAny(currentSlug, limit = 3) {
  return marketplaceTemplates.filter((t) => t.slug !== currentSlug).slice(0, limit).map(marketplaceItemToRecord);
}

function getSupabaseServer() {
  return null;
}

async function getTemplateBySlug(slug) {
  const sb = getSupabaseServer();
  if (!sb) return null;
  const { data, error } = await sb.from("templates").select("*").eq("slug", slug).eq("published", true).maybeSingle();
  if (error || !data) return null;
  return mapTemplateRow(data);
}
async function getRelatedTemplates(category, excludeId, limit = 3) {
  const sb = getSupabaseServer();
  if (!sb) return [];
  const { data, error } = await sb.from("templates").select("*").eq("published", true).eq("category", category).neq("id", excludeId).limit(limit);
  if (error || !data?.length) return [];
  return data.map((r) => mapTemplateRow(r));
}
async function getRelatedTemplatesLoose(category, excludeId, limit = 3) {
  let rows = await getRelatedTemplates(category, excludeId, limit);
  if (rows.length >= limit) return rows;
  const sb = getSupabaseServer();
  if (!sb) return rows;
  const { data } = await sb.from("templates").select("*").eq("published", true).neq("id", excludeId).limit(limit + 5);
  if (!data?.length) return rows;
  const mapped = data.map((r) => mapTemplateRow(r));
  const merged = [...rows];
  for (const m of mapped) {
    if (merged.length >= limit) break;
    if (!merged.some((x) => x.id === m.id)) merged.push(m);
  }
  return merged.slice(0, limit);
}

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/templates");
  }
  let template = await getTemplateBySlug(slug);
  if (!template) {
    template = getFallbackTemplateRecord(slug);
  }
  if (!template) {
    return Astro2.redirect("/templates");
  }
  let related = await getRelatedTemplatesLoose(template.category, template.id, 3);
  if (!related.length) {
    related = getFallbackRelated(slug, template.category, 3);
  }
  if (!related.length) {
    related = getFallbackRelatedAny(slug, 3);
  }
  const dashboardUrl = "/dashboard";
  const title = `${template.title} — DEV.ECOM`;
  const description = template.short_description;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "TemplateDetailView", TemplateDetailView, { "client:load": true, "template": template, "related": related, "dashboardUrl": dashboardUrl, "checkoutBaseUrl": dashboardUrl, "client:component-hydration": "load", "client:component-path": "@/components/template-detail/TemplateDetailView", "client:component-export": "TemplateDetailView" })} ` })}`;
}, "/Users/suraj/dev-ecom/apps/web/src/pages/templates/[slug].astro", void 0);
const $$file = "/Users/suraj/dev-ecom/apps/web/src/pages/templates/[slug].astro";
const $$url = "/templates/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
