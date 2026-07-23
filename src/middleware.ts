import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // S'applique à tout sauf les fichiers statiques, les assets Next.js et les API.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
