import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-champagne text-ink shadow-glow hover:-translate-y-0.5 hover:bg-pearl hover:shadow-[0_18px_60px_rgba(216,183,120,0.22)]",
  secondary:
    "border border-cream/18 bg-cream/[0.06] text-pearl shadow-insetLux hover:-translate-y-0.5 hover:border-champagne/55 hover:bg-cream/[0.10]",
  ghost:
    "border border-transparent bg-transparent text-cream/72 hover:border-cream/12 hover:bg-cream/[0.05] hover:text-pearl",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`focus-ring group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
