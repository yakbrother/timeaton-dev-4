import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_N4R4p_6q.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/smilodon/Projects/timeaton-dev-4/","cacheDir":"file:///Users/smilodon/Projects/timeaton-dev-4/node_modules/.astro/","outDir":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/","srcDir":"file:///Users/smilodon/Projects/timeaton-dev-4/src/","publicDir":"file:///Users/smilodon/Projects/timeaton-dev-4/public/","buildClientDir":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/client/","buildServerDir":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/server/","adapterName":"","routes":[{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.md","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.md","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/finds/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/finds","isIndex":true,"type":"page","pattern":"^\\/finds\\/?$","segments":[[{"content":"finds","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finds/index.astro","pathname":"/finds","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/now/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/now","isIndex":false,"type":"page","pattern":"^\\/now\\/?$","segments":[[{"content":"now","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/now.astro","pathname":"/now","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/posts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/posts","isIndex":true,"type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/index.astro","pathname":"/posts","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/resume/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resume","isIndex":false,"type":"page","pattern":"^\\/resume\\/?$","segments":[[{"content":"resume","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resume.astro","pathname":"/resume","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/uses/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/uses","isIndex":false,"type":"page","pattern":"^\\/uses\\/?$","segments":[[{"content":"uses","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/uses.astro","pathname":"/uses","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/smilodon/Projects/timeaton-dev-4/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.timeaton.dev/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/finds/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/finds/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/posts/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/posts/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/404.md",{"propagation":"none","containsHead":true}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/about.md",{"propagation":"none","containsHead":true}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/now.astro",{"propagation":"none","containsHead":true}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/resume.astro",{"propagation":"none","containsHead":true}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/smilodon/Projects/timeaton-dev-4/src/pages/uses.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@md":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@md":"pages/about.astro.mjs","\u0000@astro-page:src/pages/finds/[page]@_@astro":"pages/finds/_page_.astro.mjs","\u0000@astro-page:src/pages/finds/index@_@astro":"pages/finds.astro.mjs","\u0000@astro-page:src/pages/now@_@astro":"pages/now.astro.mjs","\u0000@astro-page:src/pages/posts/[page]@_@astro":"pages/posts/_page_.astro.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"pages/posts/_slug_.astro.mjs","\u0000@astro-page:src/pages/posts/index@_@astro":"pages/posts.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/resume@_@astro":"pages/resume.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/uses@_@astro":"pages/uses.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BbHUbzLn.mjs","/Users/smilodon/Projects/timeaton-dev-4/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/smilodon/Projects/timeaton-dev-4/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_COfk9HBw.mjs","/Users/smilodon/Projects/timeaton-dev-4/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BvoWxvCm.mjs","/Users/smilodon/Projects/timeaton-dev-4/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.D3cKLRbd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/smilodon/Projects/timeaton-dev-4/src/components/Header.astro?astro&type=script&index=0&lang.ts","const c=document.querySelector(\".hamburger\"),e=document.querySelector(\".menu\");c?.addEventListener(\"click\",()=>{e?.classList.toggle(\"active\")});document.addEventListener(\"click\",t=>{!t.target.closest(\".nav\")&&e?.classList.contains(\"active\")&&e.classList.remove(\"active\")});"]],"assets":["/file:///Users/smilodon/Projects/timeaton-dev-4/dist/404.html","/file:///Users/smilodon/Projects/timeaton-dev-4/dist/about/index.html","/file:///Users/smilodon/Projects/timeaton-dev-4/dist/finds/index.html","/file:///Users/smilodon/Projects/timeaton-dev-4/dist/now/index.html","/file:///Users/smilodon/Projects/timeaton-dev-4/dist/posts/index.html","/file:///Users/smilodon/Projects/timeaton-dev-4/dist/projects/index.html","/file:///Users/smilodon/Projects/timeaton-dev-4/dist/resume/index.html","/file:///Users/smilodon/Projects/timeaton-dev-4/dist/robots.txt","/file:///Users/smilodon/Projects/timeaton-dev-4/dist/rss.xml","/file:///Users/smilodon/Projects/timeaton-dev-4/dist/uses/index.html","/file:///Users/smilodon/Projects/timeaton-dev-4/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"pISVEnrjT1u5vBHOcejWjlckRjpRIeLz31oF8o/Uw1Y="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
