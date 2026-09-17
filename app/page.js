"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

// A small, editable pick of best sellers for the homepage. Swap the slugs
// any time — no other file needs to change.
const BESTSELLER_SLUGS = [
  "zaafaran-hor",
  "koumaj-tabii",
  "shampoo-tabii",
  "balea-serum-hyaluronique",
  "moringa",
  "savon-beldi",
  "acheb-chaar",
  "balea-oil-repair-huile",
];

export default function HomePage() {
  const { t, lang } = useI18n();
  const bestsellers = PRODUCTS.filter((p) => BESTSELLER_SLUGS.includes(p.slug));

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sage-pale">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
          <div className="order-2 md:order-none">
            <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-bold text-sage-deep">
              {t("natural")}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-sage-deep md:text-5xl">
              {t("tagline")}
            </h1>
            <p className="mt-4 max-w-prose text-ink/70">{t("hero_sub")}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/produits"
                className="rounded-full bg-rose px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-rose-deep"
              >
                {t("hero_cta")}
              </Link>
              <a
                href="https://wa.me/212764826093"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-sage-deep px-7 py-3 text-sm font-bold text-sage-deep transition-colors hover:bg-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="relative order-1 mx-auto aspect-square w-full max-w-sm md:order-none">
            <svg viewBox="0 0 300 300" className="h-full w-full">
              <circle cx="150" cy="150" r="140" fill="#F4DCE2" />
              <path
                d="M150 60c18 34 18 68 0 92-18-24-18-58 0-92Zm0 92c34-12 68-5 90 17-27 17-63 12-90-17Zm0 0c-34-12-68-5-90 17 27 17 63 12 90-17Zm0 0c6 36-2 65-30 88 33-8 55-38 30-88Zm0 0c-6 36 2 65 30 88-33-8-55-38-30-88Z"
                fill="#A3164F"
                opacity="0.9"
              />
            </svg>
          </div>
        </div>
        <div className="leaf-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* Trust badges */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[t("trust_1"), t("trust_2"), t("trust_3")].map((label, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl border border-sage/15 bg-paper p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-pale text-sage-deep">
                ✓
              </span>
              <span className="text-sm font-semibold text-ink/75">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <h2 className="mb-5 font-display text-3xl font-bold text-sage-deep">{t("categories_title")}</h2>
        <div className="flex snap-x gap-4 overflow-x-auto pb-4">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <h2 className="mb-5 font-display text-3xl font-bold text-sage-deep">{t("bestsellers_title")}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {bestsellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
