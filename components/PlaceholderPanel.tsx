type PlaceholderPanelProps = {
  label: string;
  tall?: boolean;
  accent?: "gold" | "blush" | "wine" | "silk";
  caption?: string;
};

const accents = {
  gold: "from-champagne/38 via-cream/10 to-transparent",
  blush: "from-blush/34 via-cream/8 to-transparent",
  wine: "from-oxblood/70 via-bronze/16 to-transparent",
  silk: "from-cream/16 via-champagne/12 to-wine/42",
};

export function PlaceholderPanel({ label, tall = false, accent = "gold", caption }: PlaceholderPanelProps) {
  return (
    <div
      className={`group luxury-border fashion-grain overflow-hidden rounded-couture bg-espresso/82 p-3 shadow-editorial transition duration-500 hover:-translate-y-1 hover:bg-cocoa/90 ${
        tall ? "min-h-[470px]" : "min-h-[280px]"
      }`}
    >
      <div className={`relative flex h-full min-h-[inherit] items-end overflow-hidden rounded-[1.85rem] bg-gradient-to-br ${accents[accent]} p-5`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,248,236,0.16),transparent_34%),linear-gradient(120deg,transparent,rgba(255,248,236,0.05),transparent)]" />
        <div className="absolute left-7 top-7 h-24 w-px bg-champagne/35" />
        <div className="absolute right-7 top-7 h-24 w-px bg-cream/20" />
        <div className="absolute left-1/2 top-12 h-56 w-36 -translate-x-1/2 rounded-t-full border border-cream/18 bg-ink/16 shadow-[inset_0_0_50px_rgba(255,248,236,0.05)] transition duration-500 group-hover:scale-[1.03]" />
        <div className="absolute bottom-24 left-8 h-32 w-24 rounded-t-full border border-champagne/25 bg-cream/[0.045]" />
        <div className="absolute bottom-20 right-8 h-24 w-28 rounded-full border border-blush/25 bg-ink/22" />
        <div className="absolute inset-x-8 top-1/2 h-px bg-cream/12" />
        <div className="relative z-10 w-full border-t border-cream/15 bg-ink/20 p-4 backdrop-blur-sm">
          <p className="museum-label text-[0.63rem] text-champagne/75">Editorial placeholder</p>
          <p className="mt-2 font-display text-2xl font-semibold text-pearl">{label}</p>
          {caption ? <p className="mt-2 text-sm leading-6 text-cream/62">{caption}</p> : null}
        </div>
      </div>
    </div>
  );
}
