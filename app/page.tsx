import { BeforeAfterTable } from "@/components/BeforeAfterTable";
import { Button } from "@/components/Button";
import { InquiryForm } from "@/components/InquiryForm";
import { PlaceholderPanel } from "@/components/PlaceholderPanel";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import {
  collections,
  footerLinks,
  includedPages,
  lookbookCards,
  orderSteps,
  placeholders,
  productCards,
  reviews,
  serviceInfoPanels,
  systemFeatures,
  trustBadges,
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
const lookbookPanelVariants = ["arch", "rail", "mirror", "detail", "arch"] as const;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-luxury text-pearl">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 z-0 h-[34rem] w-[34rem] rounded-full bg-blush/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-[42rem] z-0 h-[38rem] w-[38rem] rounded-full bg-oxblood/40 blur-3xl" />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#hero" className="focus-ring group flex items-center gap-3 rounded-full">
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
          href="#contact"
          className="focus-ring rounded-full border border-champagne/35 bg-cream/[0.035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-champagne transition hover:bg-champagne hover:text-ink"
        >
          Request Preview
        </a>
      </header>

      <section id="hero" className="reveal-up relative z-10 mx-auto grid max-w-7xl scroll-mt-8 items-start gap-8 px-5 pb-14 pt-5 sm:px-8 sm:pb-20 sm:pt-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-14">
        <div className="relative">
          <div className="mb-5 flex flex-wrap items-center gap-3 sm:mb-7">
            <p className="inline-flex rounded-full border border-champagne/25 bg-cream/8 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-couture text-champagne/85 shadow-insetLux">
              Premium retail identity system
            </p>
            <p className="hidden text-xs uppercase tracking-[0.24em] text-cream/42 sm:block">Fashion • Trust • Order</p>
          </div>
          <p className="museum-label mb-4 text-[0.58rem] leading-5 text-blush/70 sm:mb-5 sm:text-[0.62rem]">Campaign home / collection gateway / buying concierge</p>
          <h1 className="text-balance font-display text-[3.45rem] font-semibold leading-[0.86] tracking-[-0.055em] text-pearl sm:text-7xl sm:leading-[0.84] lg:text-[7.35rem]">
            Turn Your Boutique Into a Premium Style Destination
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-cream/72 sm:mt-8 sm:text-xl sm:leading-8">
            A premium website and business identity system for boutiques that want stronger product presentation,
            clearer brand positioning, and better customer inquiries.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button href="#preview">Request a Boutique Presence Review</Button>
            <Button href="#system" variant="secondary">See the Style System</Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-2 border-y border-cream/10 py-4 sm:mt-12 sm:max-w-2xl sm:gap-3 sm:py-5">
            {heroStats.map(([label, detail]) => (
              <div className="rounded-2xl bg-cream/[0.035] p-3 text-left shadow-insetLux sm:p-4" key={label}>
                <p className="font-display text-2xl leading-none text-champagne sm:text-3xl">{label}</p>
                <p className="mt-1 text-[0.55rem] uppercase leading-4 tracking-[0.14em] text-cream/45 sm:text-xs sm:tracking-[0.18em]">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-up delay-150 relative min-h-[520px] sm:min-h-[630px] lg:min-h-[760px]">
          <div className="absolute left-1 top-0 z-20 rounded-full border border-champagne/25 bg-ink/70 px-3 py-2 text-[0.58rem] uppercase tracking-[0.18em] text-champagne shadow-card backdrop-blur sm:left-0 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.22em]">
            Curated retail presence
          </div>
          <div className="absolute right-0 top-9 z-10 w-[86%] max-w-[35rem] sm:top-12 sm:w-[78%]">
            <PlaceholderPanel label="Signature Lookbook" tall accent="gold" variant="arch" caption="A hero image area for campaign photography, premium fabric, and the boutique's editorial mood." />
          </div>
          <div className="absolute left-0 top-24 z-20 w-[44%] max-w-[19rem] rotate-[-3deg] sm:top-36 sm:w-[48%]">
            <PlaceholderPanel label="Accessories Finish" accent="blush" variant="detail" caption="Jewelry, bags, scarves, and styling bundles presented as finishing decisions." />
          </div>
          <div className="luxury-border absolute bottom-20 left-2 z-30 max-w-[15.7rem] rounded-[1.55rem] bg-ink/78 p-4 shadow-editorial backdrop-blur sm:bottom-16 sm:left-6 sm:max-w-[18rem] sm:rounded-[1.7rem] sm:p-5">
            <p className="museum-label text-[0.58rem] text-blush/80">Curated retail status</p>
            <p className="mt-2 font-display text-2xl leading-none text-pearl sm:mt-3 sm:text-3xl">Premium store presence</p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5">
              {heroMicroItems.map((item) => (
                <span className="motion-card rounded-full border border-cream/12 bg-cream/[0.055] px-2.5 py-1.5 text-[0.55rem] uppercase leading-4 tracking-[0.1em] text-cream/62 sm:px-3 sm:py-2 sm:text-[0.64rem] sm:tracking-[0.12em]" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="luxury-border absolute bottom-0 left-0 z-30 max-w-[15.5rem] rounded-[1.55rem] bg-espresso/86 p-4 shadow-editorial backdrop-blur sm:left-auto sm:right-3 sm:max-w-[17rem] sm:rounded-[1.8rem] sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="museum-label text-[0.58rem] text-champagne/75">New arrival cue</p>
              <span className="rounded-full border border-champagne/25 px-3 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-champagne">Live</span>
            </div>
            <p className="mt-2 font-display text-3xl text-pearl sm:mt-3 sm:text-4xl">₦45,000+</p>
            <p className="mt-2 text-[0.72rem] leading-5 text-cream/60 sm:text-xs">Price, fit note, size guidance, delivery clarity, and WhatsApp action inside the product card.</p>
            <a href="https://wa.me/2340000000000" className="focus-ring mt-3 inline-flex rounded-full bg-champagne px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink transition hover:bg-pearl sm:mt-4 sm:text-xs sm:tracking-[0.16em]">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="problem" className="reveal-up relative z-10 scroll-mt-10 border-y border-cream/10 bg-ink/48 px-5 py-16 sm:px-8 sm:py-24">
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

      <section id="system" className="reveal-up relative z-10 mx-auto max-w-7xl scroll-mt-10 px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeader
          label="The system"
          title="The Boutique Authority Presence System"
          description="A complete front-end identity and presentation structure for turning boutique attention into trust, product desire, inquiry, and order action."
          align="center"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systemFeatures.map((feature, index) => (
            <div className="group luxury-border motion-card rounded-[1.9rem] bg-espresso/72 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-cocoa" key={feature}>
              <div className="flex items-start justify-between gap-4">
                <p className="museum-label text-[0.62rem] text-champagne/65">{String(index + 1).padStart(2, "0")}</p>
                <span className="h-8 w-8 rounded-full border border-cream/10 bg-cream/[0.04] transition group-hover:border-champagne/30 group-hover:bg-champagne/10" />
              </div>
              <h3 className="mt-6 font-display text-3xl leading-none text-pearl">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="lookbook" className="reveal-up relative z-10 scroll-mt-10 bg-cream/[0.035] px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeader
              label="Editorial lookbook"
              title="A boutique should not show products alone. It should show occasions, identity, and taste."
              description="An editorial lookbook system that helps customers understand occasions, styling direction, collection mood, and how each piece fits into their personal presentation."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustElements.map((item) => (
                <div className="motion-card rounded-2xl border border-champagne/16 bg-ink/45 p-4 text-sm leading-5 text-cream/70 shadow-insetLux transition duration-300 hover:border-champagne/35 hover:text-pearl" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-12">
            {lookbookCards.map((card, index) => (
              <article
                className={`group luxury-border motion-card overflow-hidden rounded-[2.25rem] bg-espresso/78 p-3 shadow-card transition duration-500 hover:-translate-y-2 hover:bg-cocoa hover:shadow-editorial ${
                  index < 2 ? "lg:col-span-6" : "lg:col-span-4"
                }`}
                key={card.title}
              >
                <PlaceholderPanel label={card.title} tall={index < 2} accent={card.accent} variant={lookbookPanelVariants[index]} caption={card.occasion} />
                <div className="px-3 pb-4 pt-4 sm:pt-5">
                  <p className="museum-label text-[0.62rem] text-champagne/65">{card.occasion}</p>
                  <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.03em] text-pearl sm:text-4xl">{card.title}</h3>
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

      <section id="products" className="reveal-up relative z-10 mx-auto max-w-7xl scroll-mt-10 px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
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

      <section id="pages" className="reveal-up relative z-10 mx-auto max-w-7xl scroll-mt-10 px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeader
          label="Pages included"
          title="A boutique presence that answers the questions customers ask before buying."
          align="center"
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {includedPages.map((page) => (
            <span className="motion-card rounded-full border border-cream/12 bg-cream/[0.055] px-5 py-3 text-sm text-cream/75 shadow-insetLux transition hover:border-champagne/25 hover:text-pearl" key={page}>
              {page}
            </span>
          ))}
        </div>
      </section>

      <section id="order" className="reveal-up relative z-10 scroll-mt-10 bg-ink/48 px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <SectionHeader
                label="Conversion system"
                title="Designed to turn browsing into orders and inquiries."
                description="The page directs attention from beautiful presentation to practical action: WhatsApp order, call button, product inquiry form, collection cards, and a guided ordering path."
              />
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="https://wa.me/2340000000000">WhatsApp Order Button</Button>
                <Button href="tel:+2340000000000" variant="secondary">Call Boutique</Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {collections.map((collection) => (
                  <article className="luxury-border motion-card rounded-[1.8rem] bg-cream/[0.055] p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-cream/[0.075]" key={collection.title}>
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

          <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="luxury-border surface-luxury rounded-couture p-6 shadow-editorial sm:p-8">
              <p className="museum-label text-[0.65rem] font-semibold text-champagne/75">How ordering works</p>
              <h3 className="mt-4 font-display text-4xl font-semibold leading-none tracking-[-0.03em] text-pearl sm:text-5xl">
                A clear path from browsing to confident order.
              </h3>
              <p className="mt-5 text-sm leading-7 text-cream/65 sm:text-base">
                This section turns the boutique’s buying process into a visible concierge journey, reducing repeated questions and helping customers know what happens next.
              </p>
            </div>
            <div className="grid gap-3">
              {orderSteps.map((step, index) => (
                <article className="motion-card rounded-[1.6rem] border border-cream/10 bg-cream/[0.045] p-5 shadow-insetLux transition duration-300 hover:-translate-y-1 hover:border-champagne/28 hover:bg-cream/[0.07] sm:grid sm:grid-cols-[4.5rem_1fr] sm:gap-5" key={step.title}>
                  <p className="font-display text-3xl leading-none text-champagne/75">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h4 className="mt-3 font-display text-2xl leading-none text-pearl sm:mt-0">{step.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-cream/62">{step.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {serviceInfoPanels.map((panel) => (
              <article className="luxury-border motion-card rounded-[1.9rem] bg-espresso/76 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-cocoa" key={panel.title}>
                <p className="museum-label text-[0.62rem] text-champagne/65">{panel.tag}</p>
                <h3 className="mt-4 font-display text-3xl leading-none text-pearl">{panel.title}</h3>
                <p className="mt-4 text-sm leading-6 text-cream/62">{panel.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="before-after" className="reveal-up relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <SectionHeader
            label="Before / after"
            title="From scattered fashion posts to a premium buying environment."
            description="A boutique can keep selling through social platforms while using the website as the authoritative store presence customers can trust."
          />
          <BeforeAfterTable />
        </div>
      </section>

      <section id="offer" className="reveal-up relative z-10 scroll-mt-10 bg-cream/[0.035] px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeader
                label="The offer"
                title="A ready-to-customize premium website for your boutique."
                description="Customize the boutique name, collections, product photography, prices, size guide, delivery information, phone, WhatsApp, and customer reviews to match the store’s real identity."
              />
              <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {placeholders.map((item) => (
                  <div className="motion-card rounded-2xl border border-cream/10 bg-ink/45 p-4 text-sm text-cream/70 shadow-insetLux" key={item}>
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

      <section id="trust" className="reveal-up relative z-10 mx-auto max-w-7xl scroll-mt-10 px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeader
          label="Customer confidence"
          title="Reviews that support the sale before the conversation begins."
          align="center"
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustBadges.map((badge) => (
            <div className="motion-card rounded-full border border-champagne/20 bg-cream/[0.045] px-5 py-3 text-center text-sm font-semibold text-cream/72 shadow-insetLux transition duration-300 hover:-translate-y-0.5 hover:border-champagne/45 hover:text-pearl" key={badge}>
              {badge}
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote className="luxury-border motion-card rounded-[1.9rem] bg-espresso/72 p-7 text-cream/72 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-cocoa" key={review}>
              <p className="font-display text-6xl leading-none text-champagne/55">“</p>
              <p className="mt-1 leading-7">{review}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contact" className="reveal-up relative z-10 scroll-mt-10 px-5 pb-20 sm:px-8 sm:pb-28">
        <span id="preview" className="block scroll-mt-10" />
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
            <Button href="#products" variant="secondary">See Product Cards</Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-cream/10 bg-ink/55 px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <a href="#hero" className="focus-ring inline-flex items-center gap-3 rounded-full">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne/30 bg-cream/8 font-display text-xl text-champagne shadow-insetLux">B</span>
              <span>
                <span className="block font-display text-2xl font-semibold leading-none text-pearl">Boutique Authority</span>
                <span className="museum-label mt-1 block text-[0.58rem] text-cream/42">Presence System</span>
              </span>
            </a>
            <p className="mt-5 max-w-lg text-sm leading-7 text-cream/55">
              A premium retail identity, lookbook, trust, and inquiry website system for boutiques that want a stronger public presentation before the first order conversation begins.
            </p>
          </div>
          <div>
            <p className="museum-label text-[0.65rem] font-semibold text-champagne/70">Navigate</p>
            <div className="mt-5 grid gap-3 text-sm text-cream/58">
              {footerLinks.map((link) => (
                <a className="transition hover:text-champagne" href={link.href} key={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="museum-label text-[0.65rem] font-semibold text-champagne/70">Boutique contact</p>
            <div className="mt-5 space-y-3 text-sm text-cream/58">
              <p>WhatsApp: +234 000 000 0000</p>
              <p>Phone: +234 000 000 0000</p>
              <p>Email: hello@example.com</p>
              <p className="border-l border-champagne/30 pl-4 text-cream/45">Customize these details with the boutique’s live order channels before launch.</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-cream/10 pt-6 text-sm text-cream/40">
          © 2026 Boutique Authority Presence System. Premium retail identity, trust, and inquiry presentation.
        </div>
      </footer>
    </main>
  );
}
