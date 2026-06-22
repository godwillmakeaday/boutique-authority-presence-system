const rows = [
  {
    before: "Products scattered across social posts and status updates.",
    after: "Premium store presence with clear collections and new arrivals.",
  },
  {
    before: "Weak brand identity that makes good fashion look ordinary.",
    after: "Curated style direction that makes the boutique feel intentional.",
  },
  {
    before: "Customers ask repeated questions about sizes, prices, and delivery.",
    after: "Size guidance, pricing clarity, delivery information, and order prompts.",
  },
];

export function BeforeAfterTable() {
  return (
    <div className="luxury-border overflow-hidden rounded-couture bg-espresso/78 shadow-editorial">
      <div className="grid grid-cols-1 border-b border-cream/10 text-[0.68rem] font-semibold uppercase tracking-couture text-champagne md:grid-cols-2">
        <div className="bg-ink/30 p-5 md:border-r md:border-cream/10">Before</div>
        <div className="bg-champagne/[0.07] p-5">After</div>
      </div>
      {rows.map((row, index) => (
        <div className="grid grid-cols-1 border-b border-cream/10 last:border-b-0 md:grid-cols-2" key={row.before}>
          <div className="flex gap-4 border-b border-cream/10 p-5 text-cream/62 md:border-b-0 md:border-r md:border-cream/10">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blush/55" />
            <p>{row.before}</p>
          </div>
          <div className="flex gap-4 p-5 text-pearl">
            <span className="mt-1 rounded-full border border-champagne/25 bg-champagne/10 px-2 py-0.5 text-[0.62rem] text-champagne">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>{row.after}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
