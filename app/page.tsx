import { BeforeAfterTable } from "@/components/BeforeAfterTable";
import { Button } from "@/components/Button";
import { InquiryForm } from "@/components/InquiryForm";
import { PlaceholderPanel } from "@/components/PlaceholderPanel";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import {
  collections,
  includedPages,
  lookbookCards,
  placeholders,
  productCards,
  reviews,
  systemFeatures,
  trustElements,
} from "@/lib/site-data";

const problemNotes = [
  "Social feeds can bury strong products inside noise.",
  "Repeated questions delay buying and weaken confidence.",
  "Unclear prices and sizes make the boutique feel uncertain.",
  "A weak brand feel makes premium items look ordinary.",
];

const heroStats = [
  ["Lookbook", "Editorial retail feel"],
  ["Trust", "Clear buying path"],
  ["Mobile", "Order-ready pages"],
];

const heroMicroItems = ["New arrivals", "Size guidance", "Delivery clarity", "WhatsApp order"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-luxury text-pearl">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 z-0 h-[34rem] w-[34rem] rounded-full bg-blush/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-[42rem] z-0 h-[38rem] w-[38rem] rounded-full bg-oxblood/40 blur-3xl" />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#top" className="focus-ring group flex items-center gap-3 rounded-full">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne/30 bg-cream/8 font-display text-xl text-champagne shadow-insetLux transition group-hover:border-champagne/55">
            B
          </span>
          <div>
            <p className="font-display text-lg font-semibold leading-none tracking-wide text-pearl">Boutique Authority</p>
            <p className="museum-label mt-1 text-[0.58rem] text-cream/42">Presence System</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-cream/62 lg:flex">
          <a className="transition hover:text-champagne" href="#system">System</a>
          <a className="transition hover:text-champagne" href="#lookbook">Lookbook</a>
          <a className="transition hover:text-champagne" href="#products">Products</a>
          <a className="transition hover:text-champagne" href="#order">Order</a>
        </nav>
        <a
          href="#preview"
          className="focus-ring rounded-full border border-champagne/35 bg-cream/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-champagne transition hover:bg-champagne hover:text-ink"
        >
          Request Preview
        </a>
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-10 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:pb-32 lg:pt-14">
        <div className="relative">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full border border-champagne/25 bg-cream/8 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-couture text-champagne/85 shadow-insetLux">
              Premium retail identity system
            </p>
            <p className="hidden text-xs uppercase tracking-[0.24em] text-cream/42 sm:block">Fashion • Trust • Order</p>
          </div>
          <p className="museum-label mb-5 text-[0.62rem] text-blush/70">Campaign home / collection gateway / buying concierge</p>
          <h1 className="text-balance font-display text-6xl font-semibold leading-[0.84] tracking-[-0.06em] text-pearl sm:text-7xl lg:text-[7.35rem]">
            Turn Your Boutique Into a Premium Style Destination
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-cream/72 sm:text-xl">
            A premium website and business identity system for boutiques that want stronger product presentation,
            clearer brand positioning, and better customer inquiries.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#preview">Request a Boutique Presence Review</Button>
            <Button href="#system" variant="secondary">See the Style System</Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-3 border-y border-cream/10 py-5 sm:max-w-2xl sm:grid-cols-3">
            {heroStats.map(([label, detail]) => (
              <div className="rounded-2xl bg-cream/[0.035] p-4 text-left shadow-insetLux" key={label}>
                <p className="font-display text-3xl text-champagne">{label}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/45">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[720px] lg:min-h-[760px]">
          <div className="absolute left-0 top-0 z-20 rounded-full border border-champagne/25 bg-ink/70 px-5 py-3 text-xs uppercase tracking-[0.22em] text-champagne shadow-card backdrop-blur">
            Curated retail presence
          </div>
          <div className="absolute right-0 top-12 z-10 w-[78%] max-w-[35rem]">
            <PlaceholderPanel label="Signature Lookbook" tall accent="gold" caption="A hero image area for campaign photography, premium fabric, and the boutique's editorial mood." />
          </div>
          <div className="absolute left-0 top-36 z-20 w-[48%] max-w-[19rem] rotate-[-3deg]">
            <PlaceholderPanel label="Accessories Finish" accent="blush" caption="Jewelry, bags, scarves, and styling bundles presented as finishing decisions." />
          </div>
          <div className="luxury-border absolute bottom-16 left-6 z-30 max-w-[18rem] rounded-[1.7rem] bg-ink/78 p-5 shadow-editorial backdrop-blur">
            <p className="museum-label text-[0.58rem] text-blush/80">Curated retail status</p>
            <p className="mt-3 font-display text-3xl leading-none text-pearl">Premium store presence</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {heroMicroItems.map((item) => (
                <span className="rounded-full border border-cream/12 bg-cream/[0.055] px-3 py-2 text-[0.64rem] uppercase tracking-[0.12em] text-cream/62" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="luxury-border absolute bottom-0 right-3 z-30 max-w-[17rem] rounded-[1.8rem] bg-espresso/86 p-5 shadow-editorial backdrop-blur">
            <div className="flex items-center justify-between gap-4">
              <p className="museum-label text-[0.58rem] text-champagne/75">New arrival cue</p>
              <span className="rounded-full border border-champagne/25 px-3 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-champagne">Live</span>
            </div>
            <p className="mt-3 font-display text-4xl text-pearl">₦45,000+</p>
            <p className="mt-2 text-xs leading-5 text-cream/60">Price, fit note, size prompt, delivery clarity, and WhatsApp action inside the product card.</p>
            <a href="https://wa.me/2340000000000" className="focus-ring mt-4 inline-flex rounded-full bg-champagne px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-pearl">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-cream/10 bg-ink/48 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <SectionHeader
            label="The presentation problem"
            title="Good fashion can look ordinary when the presentation is weak."
            description="Customers do not judge a boutique only by the clothes. They judge the photography, curation, pricing clarity, trust signals, delivery process, size guidance, and the total feeling of the brand."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {problemNotes.map((item, index) => (
              <div className="luxury-border rounded-[1.8rem] bg-cream/[0.055] p-6 text-cream/70 shadow-insetLux transition duration-300 hover:-translate-y-1 hover:bg-cream/[0.075]" key={item}>
                <p className="museum-label text-[0.62rem] text-champagne/62">Concern {String(index + 1).padStart(2, "0")}</p>
                <p className="mt-4 leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="system" className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <SectionHeader
          label="The system"
          title="The Boutique Authority Presence System"
          description="A complete front-end identity and presentation structure for turning boutique attention into trust, product desire, inquiry, and order action."
          align="center"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systemFeatures.map((feature, index) => (
            <div className="group luxury-border rounded-[1.9rem] bg-espresso/72 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-cocoa" key={feature}>
              <div className="flex items-start justify-between gap-4">
                <p className="museum-label text-[0.62rem] text-champagne/65">{String(index + 1).padStart(2, "0")}</p>
                <span className="h-8 w-8 rounded-full border border-cream/10 bg-cream/[0.04] transition group-hover:border-champagne/30 group-hover:bg-champagne/10" />
              </div>
              <h3 className="mt-6 font-display text-3xl leading-none text-pearl">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="lookbook" className="relative z-10 bg-cream/[0.035] px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeader
              label="Editorial lookbook"
              title="A boutique should not show products alone. It should show occasions, identity, and taste."
              description="Prompt 2 upgrades the lookbook into a campaign-style section with strong visual placeholders, occasion language, styling notes, and clear customer action."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustElements.map((item) => (
                <div className="rounded-2xl border border-champagne/16 bg-ink/45 p-4 text-sm leading-5 text-cream/70 shadow-insetLux transition duration-300 hover:border-champagne/35 hover:text-pearl" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {lookbookCards.map((card, index) => (
              <article
                className={`group luxury-border overflow-hidden rounded-[2.25rem] bg-espresso/78 p-3 shadow-card transition duration-500 hover:-translate-y-2 hover:bg-cocoa hover:shadow-editorial ${
                  index < 2 ? "lg:col-span-6" : "lg:col-span-4"
                }`}
                key={card.title}
              >
                <PlaceholderPanel label={card.title} tall={index < 2} accent={card.accent} caption={card.occasion} />
                <div className="px-3 pb-4 pt-5">
                  <p className="museum-label text-[0.62rem] text-champagne/65">{card.occasion}</p>
                  <h3 className="mt-3 font-display text-4xl leading-none tracking-[-0.03em] text-pearl">{card.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-cream/62">{card.note}</p>
                  <a href="#products" className="focus-ring mt-5 inline-flex rounded-full border border-champagne/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-champagne transition hover:bg-champagne hover:text-ink">
                    {card.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <SectionHeader
          label="Catalogue presentation"
          title="Product cards that feel like premium retail decisions, not social media captions."
          description="Each card now carries product name, category, price, sizes, color note, styling note, trust-ready details, and WhatsApp inquiry action."
          align="center"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {productCards.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index + 1} />
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <SectionHeader
          label="Pages included"
          title="A boutique presence that answers the questions customers ask before buying."
          align="center"
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {includedPages.map((page) => (
            <span className="rounded-full border border-cream/12 bg-cream/[0.055] px-5 py-3 text-sm text-cream/75 shadow-insetLux transition hover:border-champagne/25 hover:text-pearl" key={page}>
              {page}
            </span>
          ))}
        </div>
      </section>

      <section id="order" className="relative z-10 bg-ink/48 px-5 py-28 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              label="Conversion system"
              title="Designed to turn browsing into orders and inquiries."
              description="The page directs attention from beautiful presentation to practical action: WhatsApp order, call button, product inquiry form, collection cards, and lookbook CTA."
            />
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="https://wa.me/2340000000000">WhatsApp Order Button</Button>
              <Button href="tel:+2340000000000" variant="secondary">Call Boutique</Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {collections.map((collection) => (
                <article className="luxury-border rounded-[1.8rem] bg-cream/[0.055] p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-cream/[0.075]" key={collection.title}>
                  <p className="museum-label text-[0.62rem] text-champagne/65">{collection.tag}</p>
                  <h3 className="mt-4 font-display text-3xl leading-none text-pearl">{collection.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-cream/62">{collection.description}</p>
                  <p className="mt-4 border-l border-champagne/30 pl-3 text-xs leading-5 text-cream/48">{collection.note}</p>
                </article>
              ))}
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <SectionHeader
            label="Before / after"
            title="From scattered fashion posts to a premium buying environment."
            description="A boutique can keep selling through social platforms while using the website as the authoritative store presence customers can trust."
          />
          <BeforeAfterTable />
        </div>
      </section>

      <section id="offer" className="relative z-10 bg-cream/[0.035] px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeader
                label="The offer"
                title="A ready-to-customize premium website for your boutique."
                description="Replace the placeholders with the boutique name, collections, product photos, prices, size guide, delivery information, phone, WhatsApp, and real customer reviews."
              />
              <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {placeholders.map((item) => (
                  <div className="rounded-2xl border border-cream/10 bg-ink/45 p-4 text-sm text-cream/70 shadow-insetLux" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <PlaceholderPanel label="New Arrivals" accent="wine" caption="Fresh pieces with size and price clarity." />
              <PlaceholderPanel label="Premium Collection" accent="silk" caption="A curated identity for the boutique." />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <SectionHeader
          label="Customer confidence"
          title="Reviews that support the sale before the conversation begins."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote className="luxury-border rounded-[1.9rem] bg-espresso/72 p-7 text-cream/72 shadow-card" key={review}>
              <p className="font-display text-6xl leading-none text-champagne/55">“</p>
              <p className="mt-1 leading-7">{review}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="preview" className="relative z-10 px-5 pb-28 sm:px-8">
        <div className="luxury-border fashion-grain mx-auto max-w-5xl overflow-hidden rounded-[2.8rem] bg-espresso/82 p-8 text-center shadow-editorial sm:p-12">
          <p className="museum-label text-[0.65rem] font-semibold text-champagne/75">Boutique Authority Presence System</p>
          <h2 className="mt-5 font-display text-5xl font-semibold tracking-[-0.04em] text-pearl sm:text-7xl">
            Request a Preview
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cream/70">
            Turn your boutique into a polished destination customers can understand, trust, and order from with confidence.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="mailto:hello@example.com?subject=Boutique%20Presence%20Review">Request a Preview</Button>
            <Button href="#lookbook" variant="secondary">See the Style System</Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-cream/10 px-5 py-10 text-center text-sm text-cream/45 sm:px-8">
        <p>© 2026 Boutique Authority Presence System. Premium retail identity, trust, and inquiry presentation.</p>
      </footer>
    </main>
  );
}
