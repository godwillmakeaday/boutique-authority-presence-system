type ProductCardProps = {
  name: string;
  category: string;
  price: string;
  detail: string;
  index: number;
};

export function ProductCard({ name, category, price, detail, index }: ProductCardProps) {
  return (
    <article className="group luxury-border overflow-hidden rounded-[2rem] bg-espresso/78 p-3 shadow-card transition duration-500 hover:-translate-y-1 hover:bg-cocoa/95 hover:shadow-editorial">
      <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-cream/13 via-champagne/10 to-oxblood/55 p-4">
        <div className="absolute inset-0 editorial-grid opacity-20" />
        <div className="absolute left-1/2 top-8 h-56 w-36 -translate-x-1/2 rounded-t-full border border-cream/16 bg-ink/18 transition duration-500 group-hover:scale-105" />
        <div className="absolute right-5 top-5 rounded-full border border-champagne/30 bg-ink/45 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-champagne backdrop-blur">
          Look {String(index).padStart(2, "0")}
        </div>
        <div className="relative w-full rounded-2xl border border-cream/12 bg-ink/42 p-4 shadow-insetLux backdrop-blur-md">
          <div className="h-1.5 w-20 rounded-full bg-champagne/55" />
          <div className="mt-3 h-1.5 w-32 rounded-full bg-cream/24" />
          <div className="mt-3 flex gap-2">
            <span className="h-7 w-7 rounded-full border border-cream/20 bg-cream/20" />
            <span className="h-7 w-7 rounded-full border border-champagne/25 bg-champagne/24" />
            <span className="h-7 w-7 rounded-full border border-blush/20 bg-blush/20" />
          </div>
        </div>
      </div>
      <div className="px-3 pb-3 pt-5">
        <p className="museum-label text-[0.64rem] text-blush/82">{category}</p>
        <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.015em] text-pearl">{name}</h3>
        <div className="mt-3 flex items-center justify-between gap-4 border-y border-cream/10 py-3">
          <p className="text-sm font-semibold text-champagne">{price}</p>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/45">Inquiry ready</p>
        </div>
        <p className="mt-3 text-sm leading-6 text-cream/65">{detail}</p>
      </div>
    </article>
  );
}
