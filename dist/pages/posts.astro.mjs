import { c as createComponent, a as renderTemplate } from '../chunks/astro/server_N4R4p_6q.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta http-equiv="refresh" content="0;url=/posts/1">`;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/pages/posts/index.astro", void 0);

const $$file = "/Users/smilodon/Projects/timeaton-dev-4/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
