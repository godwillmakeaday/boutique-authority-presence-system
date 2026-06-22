type ProductCardProps = {
  name: string;
  category: string;
  price: string;
  sizes: string;
  color: string;
  badge: string;
  stylingNote: string;
  detail: string;
  index: number;
};

export function ProductCard({
  name,
  category,
  price,
  sizes,
  color,
  badge,
  stylingNote,
  detail,
  index,
}: ProductCardProps) {
  return (
    <article className="group luxury-border overflow-hidden rounded-[2.15rem] bg-espresso/82 p-3 shadow-card transition duration-500 hover:-translate-y-2 hover:bg-cocoa/95 hover:shadow-editorial">
      <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-cream/14 via-champagne/10 to-oxblood/55 p-4">
        <div className="absolute inset-0 editorial-grid opacity-20" />
        <div className="absolute left-1/2 top-8 h-60 w-36 -translate-x-1/2 rounded-t-full border border-cream/18 bg-ink/18 shadow-[inset_0_0_60px_rgba(255,248,236,0.08)] transition duration-500 group-hover:scale-105" />
        <div className="absolute left-8 top-14 h-44 w-px rotate-6 bg-champagne/22" />
        <div className="absolute right-8 top-20 h-36 w-px -rotate-6 bg-cream/18" />
        <div className="absolute left-5 top-5 rounded-full border border-champagne/30 bg-ink/55 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur">
          {badge}
        </div>
        <div className="absolute right-5 top-5 rounded-full border border-cream/16 bg-ink/45 px-3 py-1 text-[0.58rem] uppercase tracking-[0.2em] text-cream/70 backdrop-blur">
          Look {String(index).padStart(2, "0")}
        </div>
        <div className="relative w-full rounded-2xl border border-cream/12 bg-ink/45 p-4 shadow-insetLux backdrop-blur-md transition duration-500 group-hover:bg-ink/58">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="h-1.5 w-20 rounded-full bg-champagne/60" />
              <div className="mt-3 h-1.5 w-32 rounded-full bg-cream/24" />
            </div>
            <div className="flex gap-2">
              <span className="h-7 w-7 rounded-full border border-cream/20 bg-cream/20" />
              <span className="h-7 w-7 rounded-full border border-champagne/25 bg-champagne/24" />
              <span className="h-7 w-7 rounded-full border border-blush/20 bg-blush/20" />
            </div>
          </div>
          <p className="mt-4 text-[0.64rem] uppercase tracking-[0.2em] text-cream/48">Catalogue image area</p>
        </div>
      </div>
      <div className="px-3 pb-3 pt-5">
        <p className="museum-label text-[0.64rem] text-blush/82">{category}</p>
        <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.015em] text-pearl">{name}</h3>
        <div className="mt-3 flex items-center justify-between gap-4 border-y border-cream/10 py-3">
          <p className="text-sm font-semibold text-champagne">{price}</p>
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-cream/45">Inquiry ready</p>
        </div>
        <dl className="mt-4 grid gap-3 text-xs text-cream/58 sm:grid-cols-2">
          <div className="rounded-2xl border border-cream/10 bg-cream/[0.035] p-3">
            <dt className="museum-label text-[0.55rem] text-champagne/65">Sizes</dt>
            <dd className="mt-1 leading-5">{sizes}</dd>
          </div>
          <div className="rounded-2xl border border-cream/10 bg-cream/[0.035] p-3">
            <dt className="museum-label text-[0.55rem] text-champagne/65">Color note</dt>
            <dd className="mt-1 leading-5">{color}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-6 text-cream/68">{detail}</p>
        <p className="mt-3 border-l border-champagne/35 pl-3 text-xs leading-5 text-cream/50">{stylingNote}</p>
        <a
          href="https://wa.me/2340000000000"
          className="focus-ring mt-5 inline-flex w-full items-center justify-center rounded-full border border-champagne/35 bg-champagne/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-champagne transition duration-300 hover:bg-champagne hover:text-ink"
        >
          Ask on WhatsApp
        </a>
      </div>
    </article>
  );
}
