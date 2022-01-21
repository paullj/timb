import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: "index.html",
    }),
    paths: {
      base: dev ? "" : "/timb",
    },
    router: false,
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;
