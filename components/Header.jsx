"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { CATEGORIES } from "@/lib/data";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t, lang } = useI18n();
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/recherche?q=${encodeURIComponent(query.trim())}`);
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-sage/15 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sage-deep">
            <svg viewBox="0 0 24 24" width="20" height="20" className="text-rose" fill="currentColor">
              <path d="M12 2c1.5 3 1.5 6 0 8-1.5-2-1.5-5 0-8Zm0 8c3-1 6-.5 8 1.5-2.5 1.5-5.5 1-8-1.5Zm0 0c-3-1-6-.5-8 1.5 2.5 1.5 5.5 1 8-1.5Zm0 0c1 3 .5 6-1.5 8 2.5-1 4-3.5 1.5-8Zm0 0c-1 3-.5 6 1.5 8-2.5-1-4-3.5-1.5-8Z" />
            </svg>
          </span>
          <span className="font-display text-2xl font-bold leading-none text-sage-deep">
            ARINAS <span className="text-rose">BIO DAK</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-semibold text-ink/80 hover:text-rose">
            {t("nav_home")}
          </Link>
          <div className="group relative">
            <Link href="/produits" className="text-sm font-semibold text-ink/80 hover:text-rose">
              {t("nav_shop")}
            </Link>
            <div className="invisible absolute top-full mt-2 flex flex-col gap-1 rounded-2xl border border-sage/15 bg-paper p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 start-0 min-w-[220px]">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/produits/${c.slug}`}
                  className="rounded-xl px-3 py-2 text-sm text-ink/80 hover:bg-sage-pale hover:text-sage-deep"
                >
                  {c[`name_${lang}`]}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/a-propos" className="text-sm font-semibold text-ink/80 hover:text-rose">
            {t("nav_about")}
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-ink/80 hover:text-rose">
            {t("nav_contact")}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search_placeholder")}
              className="w-48 rounded-full border border-sage/25 bg-paper px-4 py-2 text-sm outline-none focus:border-rose lg:w-64"
            />
          </form>
          <LanguageSwitcher compact />
          <Link
            href="/commande"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-rose text-white"
            aria-label={t("cart_title")}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13 5.4 5M7 13l-2 5h13" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="21" r="1" fill="currentColor" />
              <circle cx="18" cy="21" r="1" fill="currentColor" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1 -end-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/25 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="menu"
          aria-expanded={menuOpen}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-sage/15 bg-cream px-4 py-4 md:hidden">
          <form onSubmit={handleSearch} className="mb-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search_placeholder")}
              className="w-full rounded-full border border-sage/25 bg-paper px-4 py-2 text-sm outline-none focus:border-rose"
            />
          </form>
          <nav className="flex flex-col gap-1">
            <Link href="/" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-sage-pale">
              {t("nav_home")}
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/produits/${c.slug}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm hover:bg-sage-pale"
              >
                {c[`name_${lang}`]}
              </Link>
            ))}
            <Link href="/a-propos" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-sage-pale">
              {t("nav_about")}
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-sage-pale">
              {t("nav_contact")}
            </Link>
            <Link href="/commande" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-rose px-3 py-2 text-center text-sm font-semibold text-white">
              {t("nav_order")} {count > 0 ? `(${count})` : ""}
            </Link>
          </nav>
          <div className="mt-3">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
