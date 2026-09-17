# ARINAS BIO DAK — Site E-commerce

Scaffold built with **Next.js 14 (App Router) + Tailwind CSS**, following
the client's Fiche Technique: WhatsApp-based ordering, COD checkout, 5
product categories, AR/FR/EN with Arabic as default (RTL).

## 1. Run it locally

You need [Node.js 18+](https://nodejs.org) installed.

```bash
cd arinas-bio-dak
npm install
npm run dev
```

Open http://localhost:3000 — the site is in Arabic/RTL by default; use the
language switcher in the header to test French and English.

## 2. Project structure

```
app/
  layout.js                    → root layout, fonts, providers
  page.js                      → homepage (hero, categories, best sellers)
  produits/page.js              → all categories
  produits/[category]/page.js   → category listing + price filter
  produits/[category]/[slug]/page.js → product detail page
  commande/page.js              → cart + COD checkout (→ WhatsApp)
  recherche/page.js             → search results
  a-propos/page.js              → about
  contact/page.js               → contact
components/                     → Header, Footer, ProductCard, CategoryCard,
                                   WhatsAppButton, OrderForm, LanguageSwitcher
lib/
  data.js     → ALL product & category content (edit this to add/change products)
  i18n.js     → UI translations (AR/FR/EN) + language context
  cart.js     → cart state (localStorage-backed)
  whatsapp.js → wa.me link + message builders (change the phone number here)
```

## 3. What's real vs. what needs finishing

**Done / working:**
- Full catalog transcribed from the flyer (~80 products, 5 categories)
- WhatsApp "order this product" button on every product, pre-filled message
- Cart + COD checkout form that also hands off to WhatsApp
- AR/FR/EN language switcher with RTL layout for Arabic
- Category filtering by price, search across products
- Mobile-first responsive layout, keyboard-focus states, reduced-motion support

**Needs your input before launch:**
1. **Product photos** — products currently render a branded placeholder
   (leaf + initial letter). Drop real photos into `public/images/products/`
   and add `image: "/images/products/your-file.jpg"` to that product's entry
   in `lib/data.js`. `ProductCard` and the product page pick it up automatically.
2. **French/English copy** — descriptions are working translations to get
   the site live; have the client review/refine wording per product in
   `lib/data.js` (`desc_fr`, `desc_en` fields).
3. **WhatsApp number** — currently `212764826093`, set in `lib/whatsapp.js`.
4. **Domain & Google Maps** — add the shop's exact address/map embed on the
   Contact page, and the real domain in `app/layout.js` metadata.
5. **Analytics/SEO** — add Google Analytics / Meta Pixel, verify with
   Google Search Console once deployed.

## 4. Deploy

Easiest path: push this to GitHub and import it on
[vercel.com](https://vercel.com) (free tier is enough for this size). Every
push to `main` redeploys automatically.

## 5. Adding or editing products

Everything lives in `lib/data.js`. To add a product:

```js
{
  slug: "new-product-slug",
  category: "peau", // sante | peau | cheveux | sahraoui | balea
  name_ar: "...",
  name_fr: "...",
  name_en: "...",
  price: 30,
  oldPrice: 45, // optional, shows strikethrough
  desc_ar: "...",
  desc_fr: "...",
  desc_en: "...",
  image: "/images/products/new-product-slug.jpg", // optional
}
```

No other file needs to change — the category page, search, and homepage
best-sellers all read from this one array.
