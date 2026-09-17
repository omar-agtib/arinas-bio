"use client";

import { useI18n } from "@/lib/i18n";
import { CATEGORIES } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";

export default function ProduitsIndexPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="mb-6 font-display text-3xl font-bold text-sage-deep md:text-4xl">
        {t("categories_title")}
      </h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </div>
  );
}
