import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, a as renderTemplate } from './astro/server_N4R4p_6q.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://www.timeaton.dev/");
const $$LinkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkCard;
  const {
    type = "article",
    title,
    description,
    publicationDate,
    link
  } = Astro2.props;
  const iconTypes = {
    video: `<path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    article: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />`,
    website: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />`,
    book: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />`,
    tool: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`
  };
  const date = new Date(publicationDate);
  const formattedDate = date.toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(["link-card"], "class:list")} target="_blank" rel="noopener noreferrer" data-astro-cid-thpmvig2> <div${addAttribute(["icon-container", type], "class:list")} data-astro-cid-thpmvig2> <svg class="type-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke="2" data-astro-cid-thpmvig2>${unescapeHTML(iconTypes[type])}</svg> </div> <div class="content" data-astro-cid-thpmvig2> <p class="title" data-astro-cid-thpmvig2>${title}</p> ${description && renderTemplate`<p class="description" data-astro-cid-thpmvig2>${description}</p>`} </div> <time${addAttribute(date.toISOString(), "datetime")} data-astro-cid-thpmvig2>${formattedDate}</time> <div class="external-link" data-astro-cid-thpmvig2> <svg class="external-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" data-astro-cid-thpmvig2> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-thpmvig2></path> <polyline points="15 3 21 3 21 9" data-astro-cid-thpmvig2></polyline> <line x1="10" y1="14" x2="21" y2="3" data-astro-cid-thpmvig2></line> </svg> </div> </a> `;
}, "/Users/smilodon/Projects/timeaton-dev-4/src/components/LinkCard.astro", void 0);

export { $$LinkCard as $ };
