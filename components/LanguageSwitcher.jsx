"use client";

import { LANGUAGES, useI18n } from "@/lib/i18n";

export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full border border-sage/30 bg-paper p-1">
      {Object.keys(LANGUAGES).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors ${
            lang === code
              ? "bg-rose text-white"
              : "text-ink/60 hover:text-ink"
          }`}
        >
          {compact ? code.toUpperCase() : LANGUAGES[code].label}
        </button>
      ))}
    </div>
  );
}
