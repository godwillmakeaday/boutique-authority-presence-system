type ProductCardProps = {
  name: string;
  category?: string;
  price?: string;
  sizes?: string;
  color?: string;
  badge?: string;
  detail?: string;
  stylingNote?: string;
  index?: number;
};

const productImages: Record<string, string> = {
  "The Pearl Set": "/images/boutique-clean/07-pearl-set.png",
  "Aurelia Dress": "/images/boutique-clean/08-aurelia-dress.png",
  "Goldline Accessories": "/images/boutique-clean/09-goldline-accessories.png",
};

export function ProductCard({
  name,
  category,
  price,
  sizes,
  color,
  badge,
  detail,
  stylingNote,
}: ProductCardProps) {
  const imageSrc = productImages[name];
  const chip = badge ?? "Inquiry ready";

  const whatsappText = encodeURIComponent(
    "Hello, I saw the Boutique Authority Presence System and I would like something like this for my store."
  );

  return (
    <article className="overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/[0.035] p-3 text-cream shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] border border-cream/10 bg-ink">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${name} clean boutique product photograph`}
            className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-champagne/20 via-blush/10 to-ink p-6 text-center font-display text-xl text-pearl">
            {name}
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full border border-champagne/35 bg-ink/70 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-champagne backdrop-blur">
          {chip}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        {category ? (
          <p className="museum-label text-[0.62rem] text-champagne/70">
            {category}
          </p>
        ) : null}

        <h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-pearl">
          {name}
        </h3>

        <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-cream/10 pt-4">
          <p className="font-display text-2xl text-champagne">
            {price ?? "Price clarity module"}
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-cream/45">
            Demo module
          </p>
        </div>

        <dl className="mt-4 grid grid-cols-1 gap-3 text-sm text-cream/72 sm:grid-cols-2">
          {sizes ? (
            <div className="rounded-2xl border border-cream/10 bg-ink/20 p-3">
              <dt className="museum-label text-[0.55rem] text-champagne/65">
                Sizes
              </dt>
              <dd className="mt-1 leading-5">{sizes}</dd>
            </div>
          ) : null}

          {color ? (
            <div className="rounded-2xl border border-cream/10 bg-ink/20 p-3">
              <dt className="museum-label text-[0.55rem] text-champagne/65">
                Colour note
              </dt>
              <dd className="mt-1 leading-5">{color}</dd>
            </div>
          ) : null}
        </dl>

        {detail ? (
          <p className="mt-4 text-sm leading-6 text-cream/68">
            {detail}
          </p>
        ) : null}

        {stylingNote ? (
          <p className="mt-3 border-l border-champagne/35 pl-3 text-xs leading-5 text-cream/50">
            {stylingNote}
          </p>
        ) : null}

        <a
          href={`https://wa.me/2340000000000?text=${whatsappText}`}
          className="focus-ring mt-5 inline-flex w-full items-center justify-center rounded-full border border-champagne/35 bg-champagne px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink transition duration-300 hover:bg-pearl"
        >
          Build this for my store
        </a>
      </div>
    </article>
  );
}
