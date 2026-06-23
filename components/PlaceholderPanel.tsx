type PlaceholderPanelProps = {
  label: string;
  caption?: string;
  accent?: string;
  variant?: string;
  tall?: boolean;
  className?: string;
};

const panelImages: Record<string, string> = {
  "Signature Look": "/images/boutique-clean/01-hero-campaign.png",
  "Occasion Edit": "/images/boutique-clean/02-occasion-edit.png",
  "Modest Luxury": "/images/boutique-clean/03-modest-luxury.png",
  "Work & Church Elegance": "/images/boutique-clean/04-work-church-elegance.png",
  "Accessories Finish": "/images/boutique-clean/05-accessories-finish.png",
  "New Arrivals": "/images/boutique-clean/06-new-arrivals-lookbook.png",
  "Premium Collection": "/images/boutique-clean/11-premium-collection.png",
};

export function PlaceholderPanel({
  label,
  caption,
  className = "",
}: PlaceholderPanelProps) {
  const imageSrc =
    label === "New Arrivals" && caption?.toLowerCase().includes("price")
      ? "/images/boutique-clean/10-new-arrivals-preview.png"
      : panelImages[label];

  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-champagne/25 bg-ink/35 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)] ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.55rem] border border-cream/10 bg-ink">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${label} boutique visual`}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 via-blush/10 to-ink" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/18 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <p className="font-display text-2xl font-semibold text-pearl sm:text-3xl">
            {label}
          </p>
          {caption ? (
            <p className="mt-2 text-sm leading-6 text-cream/78 sm:text-base">
              {caption}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
