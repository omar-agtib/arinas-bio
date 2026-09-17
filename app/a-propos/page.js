"use client";

import { useI18n } from "@/lib/i18n";

const COPY = {
  ar: {
    p1: "ARINAS BIO DAK متجر مغربي متخصص في المنتجات الطبيعية 100%، نقدم لك تشكيلة واسعة من منتجات العناية بالصحة، البشرة والشعر، إلى جانب منتجات صحراوية أصيلة ومنتجات باليا الألمانية عالية الجودة.",
    p2: "رسالتنا بسيطة: تقديم منتجات طبيعية، آمنة وفعالة، تحترم بشرتك وصحتك، بأسعار في متناول الجميع.",
  },
  fr: {
    p1: "ARINAS BIO DAK est une boutique marocaine spécialisée dans les produits 100% naturels. Nous proposons une large gamme de soins pour la santé, la peau et les cheveux, ainsi que des produits sahraouis authentiques et la gamme allemande Balea.",
    p2: "Notre mission est simple : offrir des produits naturels, sûrs et efficaces, qui respectent votre peau et votre santé, à des prix accessibles à tous.",
  },
  en: {
    p1: "ARINAS BIO DAK is a Moroccan shop specialized in 100% natural products. We offer a wide range of health, skin and hair care, alongside authentic Sahrawi products and the German Balea range.",
    p2: "Our mission is simple: natural, safe and effective products that respect your skin and health, at prices everyone can afford.",
  },
};

export default function AboutPage() {
  const { t, lang } = useI18n();
  const copy = COPY[lang];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <h1 className="font-display text-3xl font-bold text-sage-deep md:text-4xl">{t("about_title")}</h1>
      <p className="mt-6 max-w-prose leading-relaxed text-ink/75">{copy.p1}</p>
      <p className="mt-4 max-w-prose leading-relaxed text-ink/75">{copy.p2}</p>
      <span className="mt-6 inline-block rounded-full bg-sage-pale px-4 py-1.5 text-sm font-bold text-sage-deep">
        {t("natural")}
      </span>
    </div>
  );
}
