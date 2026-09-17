"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { CATEGORIES } from "@/lib/data";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-sage-deep text-cream">
      <div className="leaf-divider" style={{ filter: "invert(1) brightness(2)" }} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <p className="font-display text-2xl font-bold">
            ARINAS <span className="text-rose">BIO DAK</span>
          </p>
          <p className="mt-2 max-w-[28ch] text-sm text-cream/75">{t("tagline")}</p>
          <span className="mt-4 inline-block rounded-full border border-cream/30 px-3 py-1 text-xs">
            {t("natural")}
          </span>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-gold">{t("nav_shop")}</p>
          <ul className="space-y-2 text-sm text-cream/80">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/produits/${c.slug}`} className="hover:text-white">
                  {c[`name_${lang}`]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-gold">{t("nav_contact")}</p>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp: +212 764 826 093
              </a>
            </li>
            <li>
              <a href="tel:+212764826093" className="hover:text-white">
                +212 764 826 093
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-gold">{t("footer_follow")}</p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/arinasbiodak"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 hover:bg-cream/10"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 hover:bg-cream/10"
              aria-label="Facebook"
            >
              FB
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15 px-4 py-4 text-center text-xs text-cream/60">
        © {year} ARINAS BIO DAK — {t("footer_rights")}
      </div>
    </footer>
  );
}
