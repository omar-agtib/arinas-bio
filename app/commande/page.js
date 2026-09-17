"use client";

import { useI18n } from "@/lib/i18n";
import OrderForm from "@/components/OrderForm";

export default function CommandePage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <h1 className="mb-8 font-display text-3xl font-bold text-sage-deep md:text-4xl">
        {t("cart_title")}
      </h1>
      <OrderForm />
    </div>
  );
}
