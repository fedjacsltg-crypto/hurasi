"use client";

import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "hurasi-cookie-consent";

let listeners: Array<() => void> = [];
function subscribe(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}
function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY);
}
function getServerSnapshot() {
  return "unset" as string | null; // évite d'afficher le bandeau avant hydratation
}
function setConsent(choice: "accepted" | "rejected") {
  window.localStorage.setItem(STORAGE_KEY, choice);
  listeners.forEach((l) => l());
}

/**
 * Bandeau de consentement RGPD minimal. Le choix est stocké dans
 * localStorage (normal pour un vrai site web — cette restriction ne
 * concerne que le bac à sable des artifacts Claude, pas ce projet).
 * Implémenté via useSyncExternalStore pour éviter tout risque de
 * désynchronisation serveur/client à l'hydratation.
 */
export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const visible = consent === null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-pearl/10 bg-obsidian/95 px-6 py-5 text-pearl backdrop-blur-sm sm:px-11"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[60ch] text-body-s text-pearl/70">
              We use cookies to improve your experience and understand how our site is
              used. You can accept or decline non-essential cookies at any time.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => setConsent("rejected")}
                className="border-b border-pearl/20 pb-1 text-body-s text-pearl/70 hover:border-pearl hover:text-pearl transition-colors"
              >
                Decline
              </button>
              <Button
                onClick={() => setConsent("accepted")}
                variant="secondary"
                size="sm"
                className="border-accent/50 text-pearl hover:bg-accent/10"
              >
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
