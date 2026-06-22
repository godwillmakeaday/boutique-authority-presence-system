const fields = [
  { label: "Name", placeholder: "Your name" },
  { label: "Phone / WhatsApp", placeholder: "+234..." },
  { label: "Interested collection", placeholder: "Occasion edit, modest wear, accessories..." },
];

export function InquiryForm() {
  return (
    <form className="luxury-border surface-luxury rounded-couture p-6 shadow-editorial sm:p-8" aria-label="Boutique order inquiry form">
      <div className="flex items-start justify-between gap-6 border-b border-cream/10 pb-6">
        <div>
          <p className="museum-label text-[0.65rem] font-semibold text-champagne/75">Concierge inquiry UI</p>
          <h3 className="mt-3 font-display text-4xl font-semibold tracking-[-0.02em] text-pearl">Ask about a look</h3>
          <p className="mt-3 text-sm leading-6 text-cream/65">
            A polished front-end form interface. Connect it later to WhatsApp, email, CRM, or a backend.
          </p>
        </div>
        <span className="hidden rounded-full border border-champagne/25 bg-champagne/10 px-4 py-2 text-xs font-semibold text-champagne sm:inline-flex">
          UI only
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {fields.map((field) => (
          <label className="block" key={field.label}>
            <span className="mb-2 block museum-label text-[0.62rem] text-cream/55">{field.label}</span>
            <input
              className="focus-ring w-full rounded-2xl border border-cream/12 bg-ink/38 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-cream/30 hover:border-cream/20 focus:border-champagne/65"
              placeholder={field.placeholder}
            />
          </label>
        ))}
        <label className="block">
          <span className="mb-2 block museum-label text-[0.62rem] text-cream/55">Message</span>
          <textarea
            rows={4}
            className="focus-ring w-full resize-none rounded-2xl border border-cream/12 bg-ink/38 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-cream/30 hover:border-cream/20 focus:border-champagne/65"
            placeholder="Tell us the product, size, color, and delivery location."
          />
        </label>
      </div>
      <button
        type="button"
        className="focus-ring mt-6 w-full rounded-full bg-champagne px-6 py-3 text-sm font-bold text-ink shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-pearl"
      >
        Send Product Inquiry →
      </button>
    </form>
  );
}
