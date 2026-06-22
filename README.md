# Boutique Authority Presence System

A premium Next.js landing website for boutiques, fashion stores, clothing brands, modest fashion shops, luxury retail sellers, and accessories businesses.

## What is inside

- Next.js App Router
- TypeScript
- Tailwind CSS
- Responsive premium landing page
- SEO metadata
- Reusable components
- Placeholder editorial image panels
- Product cards and collection cards
- Trust section
- Before/after table
- Front-end inquiry form UI only, no backend

## First files to edit in Acode

1. `app/page.tsx`  
   Main page sections, headings, buttons, and layout.

2. `lib/site-data.ts`  
   Product names, collections, reviews, features, included pages, and placeholders.

3. `app/layout.tsx`  
   SEO title, description, keywords, and Open Graph text.

4. `app/globals.css`  
   Global visual styles.

5. `tailwind.config.ts`  
   Brand colors, fonts, shadows, and custom design tokens.

## How to run in Termux

```bash
cd boutique-authority-presence-system
npm install
npm run dev
```

For production check:

```bash
npm run build
```

## How to change WhatsApp and call buttons

Open `app/page.tsx` and search for:

```tsx
https://wa.me/2340000000000
```

Replace it with the boutique WhatsApp number. Also search for:

```tsx
tel:+2340000000000
```

Replace it with the boutique phone number.

## How to connect the form later

The inquiry form is currently UI only. You can later connect it to:

- WhatsApp prefilled message
- Email service
- Google Forms
- Formspree
- Supabase
- Neon/Postgres backend
- Custom CRM

## Verified

`npm run build` succeeds.

## Prompt 1 Upgrade Applied

This version includes a stronger premium UI foundation:

- upgraded luxury design system and global CSS surface treatment
- richer editorial hero composition
- improved reusable components: Button, SectionHeader, ProductCard, PlaceholderPanel, InquiryForm, and BeforeAfterTable
- more refined card depth, hover states, spacing, borders, and typography rhythm
- responsive structure preserved
- no backend added
- no extra animation library added

Build verified with:

```bash
npm run build
```
