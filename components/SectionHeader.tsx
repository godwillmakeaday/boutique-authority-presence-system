type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  label?: string;
};

export function SectionHeader({ eyebrow, title, description, align = "left", label }: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      {label ? (
        <div className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-10 bg-champagne/45" />
          <span className="museum-label text-[0.65rem] font-semibold text-champagne/70">{label}</span>
          <span className="h-px w-10 bg-champagne/45" />
        </div>
      ) : null}
      {eyebrow ? (
        <p className="mb-4 museum-label text-[0.68rem] font-semibold text-champagne/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-display text-4xl font-semibold leading-[0.98] tracking-[-0.025em] text-pearl sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-6 text-base leading-8 text-cream/70 sm:text-lg ${centered ? "mx-auto max-w-2xl" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
