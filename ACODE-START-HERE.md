# Acode First-Time Editing Guide

Open this project folder in Acode, then start with these edits:

## 1. Change the boutique content

Open:

`lib/site-data.ts`

Edit collections, product cards, reviews, system features, and placeholders.

## 2. Change the main text

Open:

`app/page.tsx`

Search for the headline:

`Turn Your Boutique Into a Premium Style Destination`

Change any text you want.

## 3. Change contact buttons

In `app/page.tsx`, replace:

`https://wa.me/2340000000000`

with your WhatsApp number.

Replace:

`tel:+2340000000000`

with your call number.

## 4. Change SEO

Open:

`app/layout.tsx`

Edit the title and description.

## 5. Test in Termux

```bash
npm install
npm run build
npm run dev
```

If the site builds, you can push it to GitHub and connect it to Vercel.

## Prompt 1 Upgrade Note

The upgraded visual foundation is mostly inside:

- `app/page.tsx` for the landing page layout
- `app/globals.css` for luxury background, texture, borders, and reusable CSS utilities
- `components/` for reusable UI blocks
- `lib/site-data.ts` for editable boutique content

For first edits in Acode, start with `lib/site-data.ts` before touching the layout.
