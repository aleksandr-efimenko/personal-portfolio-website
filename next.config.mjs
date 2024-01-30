/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  redirects: async () => {
    return [
      {
        source: "/blog/:slug",
        destination: "https://blog.alexefimenko.com/posts/:slug",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "https://blog.alexefimenko.com",
        permanent: true,
      },
    ];
  },
};

export default config;
