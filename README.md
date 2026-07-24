# HURASI — Site web

Projet Next.js 15 (App Router) construit à partir de 12 phases de
spécification : architecture, design system, composants, animation,
homepage, pages internes, CMS, SEO, UX, direction artistique, audit
technique, polish final.

## État actuel du projet

Ce qui est **réellement fonctionnel** aujourd'hui :

- ✅ Next.js 15 + TypeScript + Tailwind v4 (tokens de design complets)
- ✅ Routage multilingue (EN / FR / PT / AR / ZH / RU) via `next-intl`, avec
  bascule RTL automatique pour l'arabe
- ✅ Système d'animation : Lenis (scroll) + GSAP/ScrollTrigger + Framer Motion,
  branchés et fonctionnels
- ✅ Navbar avec transition au scroll, sélecteur de langue, Footer
- ✅ Hero de la homepage avec séquence d'entrée chorégraphiée
- ⏳ Le reste des sections (Phase 5), pages internes (Phase 6) et le CMS
  (Phase 7) sont **spécifiés mais pas encore codés** — prochaines étapes.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000 — tu seras redirigé automatiquement vers
`/en` (ou la langue de ton navigateur si elle est supportée).

## Structure du projet

```
src/
  app/[locale]/       → pages (routage par langue)
  components/
    ui/               → Button, Input, etc. (primitives)
    layout/           → Navbar, Footer, LanguageSwitcher
    sections/         → Hero, Newsletter, etc. (blocs de page)
    motion/           → wrappers d'animation (RevealOnScroll)
  lib/
    i18n/             → configuration des langues, routage, navigation
    animation/        → Lenis, GSAP, variants Framer Motion
    utils/            → utilitaires (fusion de classes, etc.)
  messages/           → traductions par langue (en.json, fr.json...)
  hooks/              → hooks React réutilisables
```

## Note sur les polices

Les polices (Fraunces pour les titres, Inter pour le texte, Noto Naskh Arabic
pour l'arabe) sont chargées via `next/font/google`, ce qui nécessite un accès
réseau à Google Fonts au moment du build. C'est normal et fonctionnera dès que
tu lanceras `npm run dev` ou `npm run build` sur ta machine ou sur Cloudflare
Pages.

## Prochaines étapes

1. Compléter les sections restantes de la homepage
2. Construire les 10 pages internes
3. Brancher un CMS (adaptateur `lib/cms/`)
4. Configurer le déploiement Cloudflare Pages
# test
