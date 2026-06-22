# Acode First-Time Editing Guide

Open this folder in Acode. Do not edit random files first.

## 1. Change boutique content

Open:

```txt
lib/site-data.ts
```

This is where you can safely edit:

- collections
- product cards
- prices
- sizes
- reviews
- order steps
- size/payment/delivery text
- trust badges
- footer links

Change only text inside quotation marks at first.

## 2. Change the main page text

Open:

```txt
app/page.tsx
```

Search for visible headings such as:

```txt
Turn Your Boutique Into a Premium Style Destination
```

Only edit text between tags. Do not delete brackets or class names.

## 3. Change contact buttons

Search inside `app/page.tsx` and `components/ProductCard.tsx` for:

```txt
wa.me/2340000000000
```

Replace it with the real boutique WhatsApp number.

Search for:

```txt
tel:+2340000000000
hello@example.com
```

Replace with the real phone and email.

## 4. Test in Termux

Use Termux for testing and deployment:

```bash
npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund
npm run build
```

If the build succeeds, commit and push to GitHub.
