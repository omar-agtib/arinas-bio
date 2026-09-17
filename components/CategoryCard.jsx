"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import ProductImagePlaceholder from "./ProductImagePlaceholder";

export default function CategoryCard({ category }) {
  const { lang } = useI18n();

  return (
    <Link
      href={`/produits/${category.slug}`}
      className="group relative flex h-64 min-w-[220px] flex-col justify-end overflow-hidden rounded-organic-r border border-sage/12 bg-paper snap-start"
    >
      <div className="absolute inset-0">
        <ProductImagePlaceholder category={category.slug} label={category[`name_${lang}`]} />
      </div>
      <div className="relative z-10 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-4 pt-16">
        <p className="font-display text-xl font-bold text-white">{category[`name_${lang}`]}</p>
        <p className="mt-1 line-clamp-2 text-xs text-white/85">{category[`blurb_${lang}`]}</p>
      </div>
    </Link>
  );
}
