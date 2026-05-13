/**
 * @astrojs/vercel v7 maps unsupported local majors (e.g. Node 24) to nodejs18.x.
 * Vercel no longer accepts that runtime. Rewrite any emitted nodejs18.x to nodejs20.x.
 */
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const FUNCTIONS_ROOT = fileURLToPath(new URL('../.vercel/output/functions/', import.meta.url));

function collectVcConfigs(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...collectVcConfigs(p));
    else if (name === '.vc-config.json') out.push(p);
  }
  return out;
}

let patched = 0;
for (const file of collectVcConfigs(FUNCTIONS_ROOT)) {
  const raw = readFileSync(file, 'utf8');
  const cfg = JSON.parse(raw);
  if (cfg.runtime === 'nodejs18.x') {
    cfg.runtime = 'nodejs20.x';
    writeFileSync(file, `${JSON.stringify(cfg, null, '\t')}\n`);
    patched++;
  }
}

if (patched > 0) {
  console.log(
    `[@astrojs/vercel] Patched ${patched} serverless function(s): nodejs18.x → nodejs20.x (required for Vercel).`,
  );
}
