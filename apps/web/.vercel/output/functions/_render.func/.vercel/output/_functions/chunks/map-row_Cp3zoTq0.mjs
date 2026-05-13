import { c as createAstro, d as createComponent, e as addAttribute, f as renderHead, g as renderSlot, r as renderTemplate } from './astro/server_CEjgu55Y.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { jsx, jsxs } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const $$Astro = createAstro("https://dev.ecom");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "DEV.ECOM \u2014 Premium Shopify Templates",
    description = "Launch premium Shopify brands faster with professionally designed e-commerce templates, analytics-ready storefronts, and developer-first tooling."
  } = Astro2.props;
  const canonical = new URL(Astro2.url.pathname, Astro2.site ?? Astro2.url).href;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400..900;1,14..32,400..900&display=swap" rel="stylesheet"><link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-dvh bg-bg text-white"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/suraj/dev-ecom/apps/web/src/layouts/Layout.astro", void 0);

const links = [
  { href: "/", label: "Home" },
  { href: "/templates", label: "Templates" },
  { href: "/#faq", label: "Blog" },
  { href: "/#demo", label: "Docs" }
];
function IconBell() {
  return /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 3a5 5 0 0 0-5 5v2.1L5.5 13v1h13v-1L17 10.1V8a5 5 0 0 0-5-5Z",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M10 18a2 2 0 0 0 4 0",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }
    )
  ] });
}
function IconUser() {
  return /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "9", r: "3.5", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M6 19c1.2-2.5 3.6-4 6-4s4.8 1.5 6 4",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }
    )
  ] });
}
function linkIsActive(pathname, hash, href) {
  if (href === "/" || href === "") {
    return pathname === "/" || pathname === "";
  }
  if (href === "/templates") {
    return pathname === "/templates" || pathname.startsWith("/templates/");
  }
  if (href.includes("#")) {
    const parts = href.split("#");
    const expectedHash = parts.length > 1 ? `#${parts[1]}` : "";
    return pathname === "/" && hash === expectedHash;
  }
  return false;
}
function Navbar({ dashboardUrl = "/dashboard" }) {
  const [{ pathname, hash }, setLoc] = useState({ pathname: "", hash: "" });
  useEffect(() => {
    setLoc({
      pathname: window.location.pathname,
      hash: window.location.hash
    });
  }, []);
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      initial: { y: -16, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      className: "fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-bg/55 backdrop-blur-xl",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/",
            className: "flex items-center gap-2 font-display text-sm font-semibold tracking-[0.2em] text-white",
            children: [
              "DEV",
              /* @__PURE__ */ jsx("span", { className: "mx-0.5 text-accent", children: "." }),
              "ECOM"
            ]
          }
        ),
        /* @__PURE__ */ jsx("nav", { className: "absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex", children: links.map((l) => {
          const active = linkIsActive(pathname, hash, l.href);
          return /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: active ? "text-sm font-semibold text-white" : "text-sm font-medium text-muted transition-colors hover:text-white",
              children: l.label
            },
            l.label
          );
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "inline-flex rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-muted transition-colors hover:border-white/[0.14] hover:text-white",
              "aria-label": "Notifications",
              children: /* @__PURE__ */ jsx(IconBell, {})
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: dashboardUrl,
              className: "inline-flex rounded-lg border border-white/[0.08] bg-white/[0.03] p-2 text-muted transition-colors hover:border-white/[0.14] hover:text-white",
              "aria-label": "Account",
              children: /* @__PURE__ */ jsx(IconUser, {})
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: dashboardUrl,
              className: "rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]",
              children: "Login"
            }
          )
        ] })
      ] })
    }
  );
}

const marketplaceTemplates = [
  {
    slug: "nova-commerce",
    name: "Nova Commerce",
    price: "$89",
    priceValue: 89,
    platforms: ["Shopify"],
    pro: false,
    marketplaceCategory: "Dashboard",
    description: "Executive dashboard storefront with KPIs, revenue ribbons, and real-time orders.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "financial-dashboard",
    name: "Financial Dashboard",
    price: "$79",
    priceValue: 79,
    platforms: ["Shopify Plus"],
    pro: true,
    marketplaceCategory: "Dashboard",
    description: "Fintech-ready layout with billing highlights, subscriptions, and trust signals.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "lumen-atelier",
    name: "Lumen Atelier",
    price: "$64",
    priceValue: 64,
    platforms: ["Shopify"],
    pro: false,
    marketplaceCategory: "Landing",
    description: "Editorial commerce landing with looks, sizing guides, and shoppable drops.",
    image: "https://images.unsplash.com/photo-1441986300917-e647400661af?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "obsidian-haus",
    name: "Obsidian Haus",
    price: "$99",
    priceValue: 99,
    platforms: ["Shopify Plus"],
    pro: true,
    marketplaceCategory: "Storefront",
    description: "Luxury grid with editorial hero, lookbooks, and elevated checkout moments.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "pulse-gadgetry",
    name: "Pulse Gadgetry",
    price: "$59",
    priceValue: 59,
    platforms: ["Shopify"],
    pro: false,
    marketplaceCategory: "Storefront",
    description: "High-spec electronics merchandising with compare tables and spec accordions.",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "meridian-saas",
    name: "Meridian SaaS",
    price: "$74",
    priceValue: 74,
    platforms: ["Shopify", "Shopify Plus"],
    pro: false,
    marketplaceCategory: "Landing",
    description: "B2B-style landing tuned for demos, testimonials, and plan comparison CTAs.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "apex-minimal",
    name: "Apex Minimal",
    price: "$49",
    priceValue: 49,
    platforms: ["Shopify"],
    pro: false,
    marketplaceCategory: "Portfolio",
    description: "Restrained typography, generous whitespace, and story-first PDP layouts.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "velvet-runtime",
    name: "Velvet Runtime",
    price: "$84",
    priceValue: 84,
    platforms: ["Shopify Plus"],
    pro: true,
    marketplaceCategory: "Dashboard",
    description: "Ops-heavy admin-style homepage for brands running flash sales daily.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "nimbus-skincare",
    name: "Nimbus Skincare",
    price: "$69",
    priceValue: 69,
    platforms: ["Shopify"],
    pro: false,
    marketplaceCategory: "Landing",
    description: "Ingredient storytelling, routine builder, and subscription-friendly cart.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "forge-streetwear",
    name: "Forge Streetwear",
    price: "$54",
    priceValue: 54,
    platforms: ["Shopify"],
    pro: false,
    marketplaceCategory: "Storefront",
    description: "Drop calendar, size matrix, and community lookbook feed out of the box.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "quartz-studio",
    name: "Quartz Studio",
    price: "$92",
    priceValue: 92,
    platforms: ["Shopify Plus"],
    pro: false,
    marketplaceCategory: "Portfolio",
    description: "Design-studio portfolio fused with PDPs—ideal for limited-run makers.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    demoHref: "/#demo"
  },
  {
    slug: "ember-conversion",
    name: "Ember Conversion",
    price: "$44",
    priceValue: 44,
    platforms: ["Shopify"],
    pro: false,
    marketplaceCategory: "Landing",
    description: "CRO-first sections: sticky ATC, social proof bands, urgency timers.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
    demoHref: "/#demo"
  }
];
const MARKETPLACE_CATEGORIES = [
  { id: "All", label: "All" },
  { id: "Dashboard", label: "Dashboard" },
  { id: "Landing", label: "Landing" },
  { id: "Storefront", label: "Storefront" },
  { id: "Portfolio", label: "Portfolio" }
];
const MARKETPLACE_PAGE_SIZE = 9;

function mapTemplateRow(row) {
  const gallery = row.gallery_images;
  const gallery_images = Array.isArray(gallery) ? gallery : typeof gallery === "string" ? safeJsonParse(gallery, []) : [];
  const feat = row.features;
  let features;
  if (Array.isArray(feat)) {
    if (feat.length === 0) features = [];
    else if (typeof feat[0] === "string") features = feat;
    else features = feat;
  } else if (typeof feat === "string") {
    const parsed = safeJsonParse(feat, []);
    features = Array.isArray(parsed) ? parsed.length && typeof parsed[0] === "string" ? parsed : parsed : [];
  } else {
    features = [];
  }
  const tech = row.tech_stack;
  const tech_stack = Array.isArray(tech) ? tech : typeof tech === "string" ? safeJsonParse(tech, []) : [];
  const pages = row.included_pages;
  const included_pages = Array.isArray(pages) ? pages : typeof pages === "string" ? safeJsonParse(pages, []) : [];
  const plats = row.platforms;
  const platforms = Array.isArray(plats) ? plats : typeof plats === "string" ? safeJsonParse(plats, ["Shopify"]) : ["Shopify"];
  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title ?? ""),
    short_description: String(row.short_description ?? ""),
    full_description: String(row.full_description ?? ""),
    category: String(row.category ?? "Storefront"),
    platforms: platforms.length ? platforms : ["Shopify"],
    price: Number(row.price ?? 0),
    sale_price: row.sale_price != null ? Number(row.sale_price) : null,
    featured_image: row.featured_image != null ? String(row.featured_image) : null,
    gallery_images,
    live_demo_url: row.live_demo_url != null ? String(row.live_demo_url) : null,
    preview_video_url: row.preview_video_url != null ? String(row.preview_video_url) : null,
    features,
    tech_stack,
    included_pages,
    seo_score: row.seo_score != null ? Number(row.seo_score) : null,
    speed_score: row.speed_score != null ? Number(row.speed_score) : null,
    mobile_score: row.mobile_score != null ? Number(row.mobile_score) : null,
    conversion_score: row.conversion_score != null ? Number(row.conversion_score) : null,
    rating: row.rating != null ? Number(row.rating) : null,
    review_count: row.review_count != null ? Number(row.review_count) : null,
    is_featured: Boolean(row.is_featured),
    published: Boolean(row.published ?? true),
    created_at: String(row.created_at ?? ""),
    updated_at: String(row.updated_at ?? "")
  };
}
function safeJsonParse(s, fallback) {
  try {
    return JSON.parse(s);
  } catch {
    return fallback;
  }
}

export { $$Layout as $, MARKETPLACE_PAGE_SIZE as M, Navbar as N, mapTemplateRow as a, MARKETPLACE_CATEGORIES as b, marketplaceTemplates as m };
