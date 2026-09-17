"use client";

import { useI18n } from "@/lib/i18n";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="font-display text-3xl font-bold text-sage-deep md:text-4xl">{t("contact_title")}</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-organic border border-sage/15 bg-paper p-6 transition-shadow hover:shadow-md"
        >
          <p className="text-sm font-bold text-sage-deep">WhatsApp</p>
          <p className="mt-1 text-lg font-semibold text-ink">+212 764 826 093</p>
        </a>
        <a
          href="tel:+212764826093"
          className="rounded-organic-r border border-sage/15 bg-paper p-6 transition-shadow hover:shadow-md"
        >
          <p className="text-sm font-bold text-sage-deep">Téléphone</p>
          <p className="mt-1 text-lg font-semibold text-ink">+212 764 826 093</p>
        </a>
        <a
          href="https://instagram.com/arinasbiodak"
          target="_blank"
          rel="noreferrer"
          className="rounded-organic border border-sage/15 bg-paper p-6 transition-shadow hover:shadow-md"
        >
          <p className="text-sm font-bold text-sage-deep">Instagram</p>
          <p className="mt-1 text-lg font-semibold text-ink">@arinasbiodak</p>
        </a>
        <div className="rounded-organic-r border border-sage/15 bg-paper p-6">
          <p className="text-sm font-bold text-sage-deep">Google Maps</p>
          <p className="mt-1 text-sm text-ink/60">
            Ajoutez l'adresse exacte du point de vente ici, avec une carte intégrée.
          </p>
        </div>
      </div>
    </div>
  );
}
