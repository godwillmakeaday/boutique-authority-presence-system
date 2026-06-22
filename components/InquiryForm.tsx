const fields = [
  { label: "Name", placeholder: "Your name", autoComplete: "name" },
  { label: "Phone / WhatsApp", placeholder: "+234...", autoComplete: "tel" },
  { label: "Interested collection", placeholder: "Occasion edit, modest wear, accessories...", autoComplete: "off" },
];

const conciergePrompts = ["Preferred size", "Color choice", "Delivery city", "Urgency / event date"];

export function InquiryForm() {
  return (
    <form className="luxury-border surface-luxury rounded-couture p-6 shadow-editorial sm:p-8" aria-label="Boutique order inquiry form">
      <div className="flex items-start justify-between gap-6 border-b border-cream/10 pb-6">
        <div>
          <p className="museum-label text-[0.65rem] font-semibold text-champagne/75">Boutique concierge request</p>
          <h3 className="mt-3 font-display text-4xl font-semibold tracking-[-0.02em] text-pearl">Ask about a look</h3>
          <p className="mt-3 text-sm leading-6 text-cream/65">
            A premium inquiry interface for customers who want size guidance, availability confirmation, payment direction, and delivery clarity before placing an order.
          </p>
        </div>
        <span className="hidden rounded-full border border-champagne/25 bg-champagne/10 px-4 py-2 text-xs font-semibold text-champagne sm:inline-flex">
          Inquiry only
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">
        {conciergePrompts.map((item) => (
          <span className="rounded-full border border-cream/12 bg-ink/36 px-3 py-2 text-center text-[0.62rem] uppercase tracking-[0.14em] text-cream/52" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {fields.map((field) => (
          <label className="block" key={field.label}>
            <span className="mb-2 block museum-label text-[0.62rem] text-cream/55">{field.label}</span>
            <input
              autoComplete={field.autoComplete}
              className="focus-ring w-full rounded-2xl border border-cream/12 bg-ink/38 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-cream/30 hover:border-cream/20 focus:border-champagne/65"
              placeholder={field.placeholder}
            />
          </label>
        ))}
        <label className="block">
          <span className="mb-2 block museum-label text-[0.62rem] text-cream/55">Request details</span>
          <textarea
            rows={4}
            className="focus-ring w-full resize-none rounded-2xl border border-cream/12 bg-ink/38 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-cream/30 hover:border-cream/20 focus:border-champagne/65"
            placeholder="Tell us the product, size, color, quantity, delivery location, and when you need it."
          />
        </label>
      </div>
      <button
        type="button"
        className="focus-ring mt-6 w-full rounded-full bg-champagne px-6 py-3 text-sm font-bold text-ink shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-pearl"
      >
        Send Product Inquiry →
      </button>
      <p className="mt-4 text-center text-xs leading-5 text-cream/42">
        This is a front-end form UI. Connect it later to WhatsApp, email, CRM, or a backend workflow.
      </p>
    </form>
  );
}
