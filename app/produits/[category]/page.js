"use client";

import { useMemo, useState } from "react";
import { notFound } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { getCategory, getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

const PRICE_BANDS = [
  { key: "all", test: () => true },
  { key: "-20", test: (p) => p.price <= 20 },
  { key: "20-50", test: (p) => p.price > 20 && p.price <= 50 },
  { key: "50+", test: (p) => p.price > 50 },
];

export default function CategoryPage({ params }) {
  const { t, lang } = useI18n();
  const category = getCategory(params.category);
  const [band, setBand] = useState("all");

  const products = useMemo(() => {
    if (!category) return [];
    const all = getProductsByCategory(category.slug);
    const filter = PRICE_BANDS.find((b) => b.key === band) ?? PRICE_BANDS[0];
    return all.filter(filter.test);
  }, [category, band]);

  if (!category) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <nav className="mb-2 text-sm text-ink/50">
        <span>{t("nav_shop")}</span> / <span className="text-ink">{category[`name_${lang}`]}</span>
      </nav>
      <h1 className="font-display text-3xl font-bold text-sage-deep md:text-4xl">
        {category[`name_${lang}`]}
      </h1>
      <p className="mt-2 max-w-prose text-ink/65">{category[`blurb_${lang}`]}</p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-ink/60">{t("filter_price")}:</span>
        {PRICE_BANDS.map((b) => (
          <button
            key={b.key}
            onClick={() => setBand(b.key)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
              band === b.key
                ? "border-rose bg-rose text-white"
                : "border-sage/25 text-ink/70 hover:border-rose"
            }`}
          >
            {b.key === "all" ? t("filter_all") : `${b.key} DH`}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
