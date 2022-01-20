import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  kit: {
    adapter: adapter({
      fallback: "index.html",
      precompress: true,
    }),
    paths: {
      base: dev ? "" : "/timb",
    },
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;
