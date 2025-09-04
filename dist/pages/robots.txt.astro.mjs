import { C as CONFIG } from '../chunks/config_CSNZRVSe.mjs';
export { renderers } from '../renderers.mjs';

const robots = `
User-agent: *
Allow: /

Sitemap: ${CONFIG.site_url}/sitemap-index.xml
`.trim();
const GET = () => new Response(robots, {
  headers: { "Content-Type": "text/plain" }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
