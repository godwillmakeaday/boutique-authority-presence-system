type PlaceholderPanelProps = {
  label: string;
  tall?: boolean;
  accent?: "gold" | "blush" | "wine" | "silk";
  variant?: "arch" | "rail" | "mirror" | "detail";
  caption?: string;
};

const accents = {
  gold: "from-champagne/38 via-cream/10 to-transparent",
  blush: "from-blush/34 via-cream/8 to-transparent",
  wine: "from-oxblood/70 via-bronze/16 to-transparent",
  silk: "from-cream/16 via-champagne/12 to-wine/42",
};

const variantMood = {
  arch: {
    frame: "bg-gradient-to-br",
    hero: "left-1/2 top-10 h-44 w-28 -translate-x-1/2 rounded-t-full sm:h-56 sm:w-36",
    secondary: "bottom-16 left-8 h-28 w-20 rounded-t-full sm:bottom-24 sm:h-32 sm:w-24",
    detail: "bottom-16 right-8 h-20 w-24 rounded-full sm:bottom-20 sm:h-24 sm:w-28",
    line: "inset-x-8 top-1/2 h-px",
  },
  rail: {
    frame: "bg-gradient-to-tr",
    hero: "left-10 top-10 h-44 w-24 rounded-t-full sm:h-56 sm:w-32",
    secondary: "bottom-14 right-12 h-28 w-20 rounded-t-full sm:bottom-20 sm:h-36 sm:w-24",
    detail: "right-8 top-10 h-24 w-24 rounded-full sm:h-28 sm:w-28",
    line: "inset-y-8 left-1/2 w-px",
  },
  mirror: {
    frame: "bg-gradient-to-tl",
    hero: "right-12 top-9 h-44 w-28 rounded-t-full sm:h-56 sm:w-36",
    secondary: "bottom-14 left-8 h-24 w-24 rounded-full sm:bottom-20 sm:h-28 sm:w-28",
    detail: "left-12 top-12 h-24 w-16 rounded-t-full sm:h-32 sm:w-20",
    line: "inset-x-8 bottom-24 h-px",
  },
  detail: {
    frame: "bg-gradient-to-r",
    hero: "left-1/2 top-12 h-40 w-28 -translate-x-1/2 rounded-[2rem] sm:h-52 sm:w-36",
    secondary: "left-8 top-10 h-20 w-20 rounded-full sm:h-24 sm:w-24",
    detail: "bottom-16 right-10 h-24 w-16 rounded-t-full sm:bottom-20 sm:h-32 sm:w-20",
    line: "inset-x-10 top-20 h-px rotate-[-3deg]",
  },
};

const panelImages: Record<string, string> = {
  "Signature Look": "/images/boutique/01-hero-campaign.png",
  "Occasion Edit": "/images/boutique/02-occasion-edit.png",
  "Modest Luxury": "/images/boutique/03-modest-luxury.png",
  "Work & Church Elegance": "/images/boutique/04-work-church-elegance.png",
  "Accessories Finish": "/images/boutique/05-accessories-finish.png",
  "New Arrivals": "/images/boutique/06-new-arrivals-lookbook.png",
  "Premium Collection": "/images/boutique/11-premium-collection.png",
};

export function PlaceholderPanel({ label, tall = false, accent = "gold", variant = "arch", caption }: PlaceholderPanelProps) {
  const mood = variantMood[variant];

  const resolvedImageSrc =
    label === "New Arrivals" && caption?.toLowerCase().includes("price")
      ? "/images/boutique/10-new-arrivals-preview.png"
      : panelImages[label];

  return (
    <div
      className={`group luxury-border fashion-grain overflow-hidden rounded-[2rem] bg-espresso/82 p-2.5 shadow-editorial transition duration-500 hover:-translate-y-1 hover:bg-cocoa/90 sm:rounded-couture sm:p-3 ${
        tall ? "min-h-[320px] sm:min-h-[420px] lg:min-h-[470px]" : "min-h-[190px] sm:min-h-[250px] lg:min-h-[280px]"
      }`}
    >
      <div className={`relative flex h-full min-h-[inherit] items-end overflow-hidden rounded-[1.55rem] ${mood.frame} ${accents[accent]} p-4 sm:rounded-[1.85rem] sm:p-5`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,248,236,0.14),transparent_34%),linear-gradient(120deg,transparent,rgba(255,248,236,0.05),transparent)]" />
        <div className="absolute left-5 top-6 h-16 w-px bg-champagne/30 sm:left-7 sm:top-7 sm:h-24" />
        <div className="absolute right-5 top-6 h-16 w-px bg-cream/18 sm:right-7 sm:top-7 sm:h-24" />
        <div className={`absolute border border-cream/18 bg-ink/16 shadow-[inset_0_0_50px_rgba(255,248,236,0.05)] transition duration-500 group-hover:scale-[1.03] ${mood.hero}`} />
        <div className={`absolute z-[1] border border-champagne/23 bg-cream/[0.045] ${mood.secondary}`} />
        <div className={`absolute z-[1] border border-blush/25 bg-ink/22 ${mood.detail}`} />
        <div className={`absolute z-[1] bg-cream/12 ${mood.line}`} />
        <div className="relative z-20 w-full border-t border-cream/15 bg-ink/45 p-3 backdrop-blur-sm sm:p-4">
          <p className="museum-label text-[0.55rem] text-champagne/75 sm:text-[0.63rem]">Lookbook visual</p>
          <p className="mt-1.5 font-display text-xl font-semibold text-pearl sm:mt-2 sm:text-2xl">{label}</p>
          {caption ? <p className="mt-1.5 text-xs leading-5 text-cream/62 sm:mt-2 sm:text-sm sm:leading-6">{caption}</p> : null}
        </div>
      </div>
    </div>
  );
}
