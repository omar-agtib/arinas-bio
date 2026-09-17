"use client";

import { useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { searchProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function RechercheContent() {
  const { t, lang } = useI18n();
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const results = searchProducts(q, lang);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="font-display text-2xl font-bold text-sage-deep md:text-3xl">
        {t("search_placeholder")}: “{q}”
      </h1>
      <p className="mt-2 text-sm text-ink/50">{results.length} résultat(s)</p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {results.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
