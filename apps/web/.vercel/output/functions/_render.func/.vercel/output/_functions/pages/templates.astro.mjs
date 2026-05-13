import { d as createComponent, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_CEjgu55Y.mjs';
import 'kleur/colors';
import { m as marketplaceTemplates, a as mapTemplateRow, M as MARKETPLACE_PAGE_SIZE, N as Navbar, b as MARKETPLACE_CATEGORIES, $ as $$Layout } from '../chunks/map-row_Cp3zoTq0.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
export { renderers } from '../renderers.mjs';

function getSupabaseBrowser() {
  return null;
}

function platformsFromRecord(t) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  for (const p of t.platforms.length ? t.platforms : ["Shopify"]) {
    const plat = p.includes("Plus") ? "Shopify Plus" : "Shopify";
    if (!seen.has(plat)) {
      seen.add(plat);
      out.push(plat);
    }
  }
  return out.length ? out : ["Shopify"];
}
function templateRecordToMarketplace(t) {
  const platforms = platformsFromRecord(t);
  return {
    slug: t.slug,
    name: t.title,
    price: `$${Math.round(t.sale_price ?? t.price)}`,
    priceValue: Number(t.sale_price ?? t.price),
    platforms,
    pro: t.is_featured,
    marketplaceCategory: t.category || "Storefront",
    description: t.short_description,
    image: t.featured_image ?? "",
    demoHref: t.live_demo_url ?? "/#demo"
  };
}

function ExternalIcon({ className }) {
  return /* @__PURE__ */ jsx("svg", { className: `shrink-0 ${className ?? ""}`, width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: /* @__PURE__ */ jsx(
    "path",
    {
      d: "M14 3h7v7M10 14 21 3M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function ArrowIcon({ className }) {
  return /* @__PURE__ */ jsx("svg", { className: `shrink-0 ${className ?? ""}`, width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 6l6 6-6 6", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function sortList(list, key) {
  const copy = [...list];
  if (key === "popular") return copy;
  if (key === "price-asc") return copy.sort((a, b) => a.priceValue - b.priceValue);
  if (key === "price-desc") return copy.sort((a, b) => b.priceValue - a.priceValue);
  return copy.sort((a, b) => a.name.localeCompare(b.name));
}
function matchesSearch(t, q) {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  return t.name.toLowerCase().includes(s) || t.description.toLowerCase().includes(s) || t.platforms.some((p) => p.toLowerCase().includes(s));
}
function TemplatesMarketplacePage({ dashboardUrl = "/dashboard" }) {
  const [catalog, setCatalog] = useState(marketplaceTemplates);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const sb = getSupabaseBrowser();
    if (!sb) return;
    void (async () => {
      const { data, error } = await sb.from("templates").select("*").eq("published", true).order("created_at", {
        ascending: false
      });
      if (error || !data?.length) return;
      try {
        const mapped = data.map((row) => templateRecordToMarketplace(mapTemplateRow(row)));
        setCatalog(mapped);
      } catch {
      }
    })();
  }, []);
  const filtered = useMemo(() => {
    let list = catalog.filter((t) => matchesSearch(t, search));
    if (category !== "All") {
      list = list.filter((t) => t.marketplaceCategory === category);
    }
    return sortList(list, sort);
  }, [catalog, search, category, sort]);
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / MARKETPLACE_PAGE_SIZE));
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * MARKETPLACE_PAGE_SIZE;
  const pageItems = filtered.slice(start, start + MARKETPLACE_PAGE_SIZE);
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-dvh bg-bg text-white", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none fixed inset-0 opacity-[0.4]",
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed left-1/2 top-0 h-[min(70vh,640px)] w-[min(100vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,255,79,0.14),transparent_62%)] blur-3xl" }),
    /* @__PURE__ */ jsx(Navbar, { dashboardUrl }),
    /* @__PURE__ */ jsxs("main", { className: "relative mx-auto max-w-[1320px] px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-400", children: "Browse All Templates · Shopify OS 2.0" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]", children: [
          "Premium Shopify",
          " ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-accent to-[#B8FF8A] bg-clip-text text-transparent", children: "Templates" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl text-base text-zinc-400", children: "High-converting storefront kits for Shopify and Shopify Plus — search, preview, and launch in minutes." }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto mt-10 flex max-w-xl items-center rounded-full border border-white/[0.1] bg-[#111]/90 py-1.5 pl-5 pr-1.5 shadow-[0_0_0_1px_rgba(124,255,79,0.12)] backdrop-blur", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              value: search,
              onChange: (e) => {
                setSearch(e.target.value);
                setPage(1);
              },
              placeholder: "Search templates, stacks, merchants…",
              className: "min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-zinc-500"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "shrink-0 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition hover:bg-accent/90",
              children: "Search"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-col gap-4 border-b border-white/[0.06] pb-6 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: MARKETPLACE_CATEGORIES.map((c) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setCategory(c.id);
              setPage(1);
            },
            className: `rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${category === c.id ? "bg-accent/15 text-accent ring-1 ring-accent/40" : "text-zinc-500 hover:text-white"}`,
            children: c.label
          },
          c.id
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "sort-templates", className: "text-xs text-zinc-500", children: "Sort by" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "sort-templates",
              value: sort,
              onChange: (e) => setSort(e.target.value),
              className: "rounded-xl border border-white/[0.1] bg-[#111] px-3 py-2 text-xs font-medium text-white outline-none ring-accent/30 focus:ring-2",
              children: [
                /* @__PURE__ */ jsx("option", { value: "popular", children: "Popular" }),
                /* @__PURE__ */ jsx("option", { value: "price-asc", children: "Price: Low to High" }),
                /* @__PURE__ */ jsx("option", { value: "price-desc", children: "Price: High to Low" }),
                /* @__PURE__ */ jsx("option", { value: "name", children: "Name A–Z" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: pageItems.map((t) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: "group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111]/90 shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition hover:border-accent/35 hover:shadow-[0_0_48px_rgba(124,255,79,0.1)]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-video overflow-hidden bg-[#0a0a0a]", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: t.image,
                alt: "",
                width: 900,
                height: 507,
                loading: "lazy",
                decoding: "async",
                className: "h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
                t.platforms.map((p) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-zinc-300",
                    children: p
                  },
                  p
                )),
                t.pro ? /* @__PURE__ */ jsx("span", { className: "rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase text-black", children: "PRO" }) : null
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsx("h2", { className: "min-w-0 flex-1 text-lg font-bold leading-snug", children: t.name }),
                /* @__PURE__ */ jsx("span", { className: "shrink-0 text-lg font-bold", children: t.price })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-500", children: t.description }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 grid min-w-0 grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: t.demoHref ?? "/#demo",
                    target: t.demoHref?.startsWith("http") ? "_blank" : void 0,
                    rel: t.demoHref?.startsWith("http") ? "noreferrer noopener" : void 0,
                    className: "inline-flex h-8 min-w-0 flex-nowrap items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white/[0.14] px-2.5 text-[11px] font-semibold leading-none text-white transition hover:border-white/25 hover:bg-white/[0.04] sm:h-9 sm:gap-2 sm:px-4 sm:text-xs",
                    children: [
                      /* @__PURE__ */ jsx(ExternalIcon, {}),
                      "Live Demo"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: `/templates/${t.slug}`,
                    className: "inline-flex h-8 min-w-0 flex-nowrap items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#EDEDED] px-2.5 text-[11px] font-semibold leading-none text-black transition hover:bg-white sm:h-9 sm:gap-2 sm:px-4 sm:text-xs",
                    children: [
                      /* @__PURE__ */ jsx(ArrowIcon, { className: "text-black" }),
                      "View Template"
                    ]
                  }
                )
              ] })
            ] })
          ]
        },
        t.slug
      )) }),
      pageItems.length === 0 && /* @__PURE__ */ jsx("p", { className: "mt-16 text-center text-zinc-500", children: "No templates match your filters. Try clearing search." }),
      total > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-zinc-500", children: [
          "Showing ",
          total === 0 ? 0 : start + 1,
          "-",
          Math.min(start + MARKETPLACE_PAGE_SIZE, total),
          " of ",
          total,
          " ",
          "results"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              disabled: safePage <= 1,
              onClick: () => setPage((p) => Math.max(1, p - 1)),
              className: "rounded-full border border-white/[0.1] px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:bg-white/[0.05] disabled:opacity-30",
              children: "Previous"
            }
          ),
          Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setPage(n),
              className: `h-9 min-w-[2.25rem] rounded-full px-2 text-xs font-semibold ${n === safePage ? "bg-accent text-black" : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"}`,
              children: n
            },
            n
          )),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              disabled: safePage >= totalPages,
              onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
              className: "rounded-full border border-white/[0.1] px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:bg-white/[0.05] disabled:opacity-30",
              children: "Next"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-24 grid gap-10 rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/80 p-8 backdrop-blur lg:grid-cols-2 lg:items-center lg:p-12", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2 sm:gap-3", children: catalog.slice(0, 12).map((t) => /* @__PURE__ */ jsx("div", { className: "aspect-square overflow-hidden rounded-lg border border-white/[0.06]", children: /* @__PURE__ */ jsx("img", { src: t.image, alt: "", className: "h-full w-full object-cover opacity-90", loading: "lazy" }) }, t.slug)) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold tracking-tight sm:text-3xl", children: "Get notified about new premium templates" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-zinc-500", children: "Drops, discounts, and section packs — no spam." }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              className: "mt-6 flex flex-col gap-3 sm:flex-row",
              onSubmit: (e) => {
                e.preventDefault();
              },
              children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    required: true,
                    placeholder: "you@store.com",
                    className: "min-w-0 flex-1 rounded-xl border border-white/[0.1] bg-black/40 px-4 py-3 text-sm outline-none ring-accent/30 placeholder:text-zinc-600 focus:ring-2"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-black hover:bg-accent/90",
                    children: "Subscribe"
                  }
                )
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-20 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl rounded-2xl border border-white/[0.08] bg-[#111] px-8 py-10 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Need a custom solution?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-zinc-500", children: "Migration, bespoke sections, or white-label rollout — talk to our team." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/#community",
            className: "mt-6 inline-flex rounded-full border border-accent/40 bg-accent/10 px-8 py-3 text-sm font-semibold text-accent hover:bg-accent/20",
            children: "Contact Us"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("footer", { className: "mt-24 border-t border-white/[0.06] pt-12 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-xs font-semibold text-zinc-500", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "transition hover:text-accent", children: "Discord" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "transition hover:text-accent", children: "Twitter" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "transition hover:text-accent", children: "GitHub" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-10 font-display text-5xl font-black uppercase tracking-tight text-white/[0.06] sm:text-7xl", children: "DEV.ECOM" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-xs text-zinc-600", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " DEV.ECOM · Premium Shopify templates"
        ] })
      ] })
    ] })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const dashboardUrl = "/dashboard";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Browse Shopify Templates — DEV.ECOM", "description": "Search and filter premium Shopify and Shopify Plus storefront themes. Live demos and instant licensing." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TemplatesMarketplacePage", TemplatesMarketplacePage, { "client:load": true, "dashboardUrl": dashboardUrl, "client:component-hydration": "load", "client:component-path": "@/components/marketplace/TemplatesMarketplacePage", "client:component-export": "TemplatesMarketplacePage" })} ` })}`;
}, "/Users/suraj/dev-ecom/apps/web/src/pages/templates/index.astro", void 0);
const $$file = "/Users/suraj/dev-ecom/apps/web/src/pages/templates/index.astro";
const $$url = "/templates";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
