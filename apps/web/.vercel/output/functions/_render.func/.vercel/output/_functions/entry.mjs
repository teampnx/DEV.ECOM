import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_O1wn_WtU.mjs';
import { manifest } from './manifest_Dk2r1xZS.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/templates/_slug_.astro.mjs');
const _page2 = () => import('./pages/templates.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/templates/[slug].astro", _page1],
    ["src/pages/templates/index.astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "676384f7-afea-40b8-b74b-93f0ebcd7ca9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
