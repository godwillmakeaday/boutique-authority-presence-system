type PlaceholderPanelProps = {
  label: string;
  caption?: string;
  accent?: string;
  variant?: string;
  tall?: boolean;
  className?: string;
};

const panelImages: Record<string, string> = {
  "Signature Lookbook": "/images/boutique-clean/01-hero-campaign.png",
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
  tall = false,
  className = "",
}: PlaceholderPanelProps) {
  const isSignature = label.toLowerCase().includes("signature");

  const imageSrc =
    label === "New Arrivals" && caption?.toLowerCase().includes("price")
      ? "/images/boutique-clean/10-new-arrivals-preview.png"
      : panelImages[label];

  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-champagne/25 bg-ink/35 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)] ${className}`}
    >
      <div
        className={`relative overflow-hidden rounded-[1.55rem] border border-cream/10 bg-ink ${
          tall ? "aspect-[4/5] min-h-[24rem]" : "aspect-[4/3]"
        }`}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${label} boutique editorial image`}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 via-blush/10 to-ink" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/10 to-transparent" />

        {isSignature ? (
          <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-7">
            <p className="museum-label text-[0.65rem] text-champagne/80">
              Signature Lookbook
            </p>
            <p className="mt-2 font-display text-2xl font-semibold leading-tight text-pearl sm:text-4xl">
              Dressed for the moments that matter.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
