import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

/**
 * Trois hiérarchies, jamais plus (Phase 2 §10).
 * Radius quasi nul, tracking élargi en majuscules pour primary/secondary,
 * transition sur un easing dédié plus lent que le "Doux" générique
 * (Phase 12 §A.5) pour donner une sensation de matière qui répond.
 */
const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-caption uppercase tracking-[0.12em] transition-colors duration-200 [transition-timing-function:var(--ease-hover)] disabled:opacity-40 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-obsidian text-pearl px-9 py-4 rounded-none hover:bg-charcoal-800 dark:bg-pearl dark:text-obsidian",
        secondary:
          "border border-border px-9 py-4 rounded-none bg-transparent hover:bg-fg/5",
        tertiary:
          "px-0 py-1 border-b border-fg/20 hover:border-fg normal-case tracking-normal text-body-m",
      },
      size: {
        sm: "text-[0.7rem] px-6 py-3",
        md: "",
        lg: "px-11 py-5 text-body-s",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonOwnProps = VariantProps<typeof buttonStyles> & {
  href?: string;
};

type Props =
  | (ButtonOwnProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (ButtonOwnProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

export function Button({ variant, size, className, ...props }: Props) {
  const classes = cn(buttonStyles({ variant, size }), className);

  if (props.href) {
    const { href, ...rest } = props as ButtonOwnProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <Link href={href} className={classes} {...rest}>
        {props.children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...rest}>
      {props.children}
    </button>
  );
}
