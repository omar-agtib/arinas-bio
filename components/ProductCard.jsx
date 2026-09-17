"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import ProductImagePlaceholder from "./ProductImagePlaceholder";

export default function ProductCard({ product }) {
  const { t, lang } = useI18n();
  const { addItem } = useCart();

  const name = product[`name_${lang}`] ?? product.name_ar;

  return (
    <div className="group flex flex-col overflow-hidden rounded-organic border border-sage/12 bg-paper transition-shadow hover:shadow-md">
      <Link href={`/produits/${product.category}/${product.slug}`} className="block aspect-square overflow-hidden bg-cream">
        {product.image ? (
          <Image
            src={product.image}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <ProductImagePlaceholder category={product.category} label={name} />
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/produits/${product.category}/${product.slug}`}>
          <h3 className="text-base font-bold leading-snug text-ink hover:text-rose">{name}</h3>
        </Link>
        <p className="line-clamp-2 text-sm text-ink/60">{product[`desc_${lang}`]}</p>

        <div className="mt-auto flex items-center gap-2 pt-2">
          <span className="text-lg font-extrabold text-rose">{product.price} DH</span>
          {product.oldPrice && (
            <span className="text-sm text-ink/40 line-through">{product.oldPrice} DH</span>
          )}
        </div>

        <button
          onClick={() => addItem(product, 1)}
          className="mt-2 w-full rounded-full border border-rose px-4 py-2 text-sm font-semibold text-rose transition-colors hover:bg-rose hover:text-white"
        >
          {t("add_to_cart")}
        </button>
      </div>
    </div>
  );
}
