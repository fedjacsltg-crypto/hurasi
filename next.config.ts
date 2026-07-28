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
    // L'optimiseur d'image intégré de Next.js (redimensionnement à la
    // volée) ne fonctionne pas correctement sur Cloudflare Workers via
    // OpenNext — chaque requête d'image finissait par expirer/réessayer,
    // rendant la page Gallery (56 photos) inutilisable (>1 min de
    // chargement). Comme nos fichiers sources sont déjà de poids
    // raisonnable (100-200 Ko), on sert directement les originaux plutôt
    // que de dépendre d'un redimensionnement serveur qui ne fonctionne
    // pas sur cette plateforme (27/07/2026).
    unoptimized: true,
    // À adapter avec le domaine du CDN du CMS choisi (Phase 1 §8).
    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);
