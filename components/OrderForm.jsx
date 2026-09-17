"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { buildWhatsAppUrl, cartOrderMessage } from "@/lib/whatsapp";

export default function OrderForm() {
  const { t, lang } = useI18n();
  const { items, removeItem, updateQty, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", city: "", address: "", phone: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const canSubmit = items.length > 0 && form.name && form.city && form.address && form.phone;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    const url = buildWhatsAppUrl(cartOrderMessage({ items, ...form, lang }));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (items.length === 0) {
    return (
      <div className="rounded-organic border border-sage/15 bg-paper p-10 text-center">
        <p className="text-ink/60">{t("cart_empty")}</p>
        <Link
          href="/produits"
          className="mt-4 inline-block rounded-full bg-rose px-6 py-2.5 text-sm font-semibold text-white"
        >
          {t("back_to_shop")}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h2 className="mb-4 font-display text-2xl font-bold text-sage-deep">{t("cart_title")}</h2>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.slug}
              className="flex items-center justify-between gap-3 rounded-2xl border border-sage/12 bg-paper p-3"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-ink">{item.name}</p>
                <p className="text-sm text-rose">{item.price} DH</p>
              </div>
              <input
                type="number"
                min={1}
                value={item.qty}
                onChange={(e) => updateQty(item.slug, Number(e.target.value))}
                className="w-16 rounded-lg border border-sage/25 px-2 py-1 text-center text-sm"
              />
              <button
                onClick={() => removeItem(item.slug)}
                className="text-xs font-semibold text-ink/50 hover:text-rose"
              >
                {t("cart_remove")}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-sage-pale px-4 py-3">
          <span className="font-semibold text-sage-deep">{t("cart_total")}</span>
          <span className="text-lg font-extrabold text-sage-deep">{total} DH</span>
        </div>
      </div>

      <div>
        <h2 className="mb-4 font-display text-2xl font-bold text-sage-deep">{t("checkout_title")}</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder={t("checkout_name")}
            className="w-full rounded-xl border border-sage/25 bg-paper px-4 py-2.5 text-sm outline-none focus:border-rose"
          />
          <input
            name="city"
            required
            value={form.city}
            onChange={handleChange}
            placeholder={t("checkout_city")}
            className="w-full rounded-xl border border-sage/25 bg-paper px-4 py-2.5 text-sm outline-none focus:border-rose"
          />
          <textarea
            name="address"
            required
            value={form.address}
            onChange={handleChange}
            placeholder={t("checkout_address")}
            rows={3}
            className="w-full rounded-xl border border-sage/25 bg-paper px-4 py-2.5 text-sm outline-none focus:border-rose"
          />
          <input
            name="phone"
            required
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder={t("checkout_phone")}
            className="w-full rounded-xl border border-sage/25 bg-paper px-4 py-2.5 text-sm outline-none focus:border-rose"
          />
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full rounded-full bg-sage-deep px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-sage disabled:opacity-40"
          >
            {t("checkout_submit")}
          </button>
          <p className="text-center text-xs text-ink/50">{t("checkout_note")}</p>
        </form>
      </div>
    </div>
  );
}
