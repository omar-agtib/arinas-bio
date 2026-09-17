"use client";

import { useI18n } from "@/lib/i18n";
import { buildWhatsAppUrl, productOrderMessage } from "@/lib/whatsapp";

export default function WhatsAppButton({ product, qty = 1, full = false, className = "" }) {
  const { lang, t } = useI18n();

  const name = product[`name_${lang}`] ?? product.name_ar;
  const url = buildWhatsAppUrl(
    productOrderMessage({ name, price: product.price, qty, lang })
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-sage-deep px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sage ${
        full ? "w-full" : ""
      } ${className}`}
    >
      <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.34.66 4.523 1.803 6.383L4 29l7.813-1.752A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.7a9.66 9.66 0 0 1-4.928-1.353l-.353-.21-4.636 1.04 1.02-4.512-.23-.367A9.67 9.67 0 1 1 25.67 15a9.68 9.68 0 0 1-9.669 9.7Zm5.316-7.254c-.29-.146-1.716-.847-1.982-.944-.266-.097-.46-.146-.653.146-.194.291-.75.944-.92 1.138-.169.194-.338.219-.628.073-.29-.146-1.224-.451-2.332-1.437-.862-.769-1.444-1.719-1.613-2.01-.169-.291-.018-.448.128-.593.131-.13.29-.34.435-.51.146-.17.194-.291.29-.485.097-.194.049-.364-.024-.51-.073-.146-.653-1.573-.895-2.155-.236-.567-.475-.49-.653-.499-.169-.008-.363-.01-.556-.01-.194 0-.51.073-.777.364-.266.291-1.017.994-1.017 2.423 0 1.43 1.041 2.81 1.187 3.004.146.194 2.05 3.131 4.966 4.39.694.3 1.235.478 1.657.612.696.221 1.33.19 1.83.115.558-.083 1.716-.702 1.958-1.38.242-.679.242-1.26.169-1.381-.073-.121-.266-.194-.556-.34Z" />
      </svg>
      {t("order_whatsapp")}
    </a>
  );
}
