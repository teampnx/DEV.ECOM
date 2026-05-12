import { c as createComponent, m as maybeRenderHead, r as renderTemplate, d as createAstro } from '../chunks/astro/server_D772YtDc.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html> ${maybeRenderHead()}<body style="background:black;color:white;padding:40px;"> <h1>Astro Working 🚀</h1> </body></html>`;
}, "/Users/suraj/dev-ecom/apps/web/src/pages/index.astro", void 0);

const $$file = "/Users/suraj/dev-ecom/apps/web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
