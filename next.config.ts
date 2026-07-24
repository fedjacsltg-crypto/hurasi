import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");

// Permet à getCloudflareContext() de fonctionner aussi avec `next dev`,
// pas seulement une fois déployé sur Cloudflare — nécessaire pour tester
// l'envoi d'email en local (Phase Contact — activation email).
initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  images: {
    // À adapter avec le domaine du CDN du CMS choisi (Phase 1 §8).
    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);
