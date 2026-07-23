import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // À adapter avec le domaine du CDN du CMS choisi (Phase 1 §8).
    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);
