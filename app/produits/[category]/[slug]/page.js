"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { getProductBySlug, getProductsByCategory, getCategory } from "@/lib/data";
import ProductImagePlaceholder from "@/components/ProductImagePlaceholder";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ProductPage({ params }) {
  const { t, lang } = useI18n();
  const { addItem } = useCart();
  const product = getProductBySlug(params.slug);
  const [qty, setQty] = useState(1);

  if (!product || product.category !== params.category) return notFound();

  const category = getCategory(product.category);
  const name = product[`name_${lang}`] ?? product.name_ar;
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <nav className="mb-6 text-sm text-ink/50">
        <Link href="/produits" className="hover:text-rose">
          {t("nav_shop")}
        </Link>{" "}
        /{" "}
        <Link href={`/produits/${category.slug}`} className="hover:text-rose">
          {category[`name_${lang}`]}
        </Link>{" "}
        / <span className="text-ink">{name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-organic border border-sage/12 bg-cream">
          {product.image ? (
            <Image src={product.image} alt={name} width={600} height={600} className="h-full w-full object-cover" />
          ) : (
            <ProductImagePlaceholder category={product.category} label={name} />
          )}
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">{name}</h1>

          <div className="mt-3 flex items-center gap-3">
            <span className="text-2xl font-extrabold text-rose">{product.price} DH</span>
            {product.oldPrice && (
              <span className="text-base text-ink/40 line-through">{product.oldPrice} DH</span>
            )}
          </div>

          <div className="mt-6">
            <h2 className="mb-1 text-sm font-bold uppercase tracking-wide text-sage-deep">
              {t("description")}
            </h2>
            <p className="max-w-prose leading-relaxed text-ink/75">{product[`desc_${lang}`]}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-sage/25">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3.5 py-2 text-lg text-ink/60"
                aria-label="-"
              >
                −
              </button>
              <span className="min-w-[2ch] text-center font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3.5 py-2 text-lg text-ink/60"
                aria-label="+"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addItem(product, qty)}
              className="rounded-full border border-rose px-6 py-2.5 text-sm font-semibold text-rose transition-colors hover:bg-rose hover:text-white"
            >
              {t("add_to_cart")}
            </button>
            <WhatsAppButton product={product} qty={qty} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-5 font-display text-2xl font-bold text-sage-deep">{t("related")}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
