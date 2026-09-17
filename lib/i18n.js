"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

// UI copy only. Product content (names/descriptions) lives in lib/data.js
// with its own per-language fields, since that's real catalog content the
// client will want to edit directly.
export const LANGUAGES = {
  ar: { label: "العربية", dir: "rtl" },
  fr: { label: "Français", dir: "ltr" },
  en: { label: "English", dir: "ltr" },
};

const dict = {
  ar: {
    tagline: "تألقي بجمال طبيعي مع منتجاتنا المميزة",
    natural: "منتجات طبيعية 100%",
    nav_home: "الرئيسية",
    nav_shop: "المنتجات",
    nav_about: "من نحن",
    nav_contact: "اتصلي بنا",
    nav_order: "طلب سريع",
    hero_cta: "تسوّقي الآن",
    hero_sub: "منتجات طبيعية 100% للعناية بالصحة، البشرة، الشعر، وجمال أصيل من الصحراء المغربية",
    categories_title: "تسوّقي حسب الفئة",
    bestsellers_title: "الأكثر مبيعاً",
    trust_1: "توصيل لجميع المدن",
    trust_2: "منتجات طبيعية 100%",
    trust_3: "الدفع عند الاستلام",
    search_placeholder: "ابحثي عن منتج، مكوّن...",
    filter_all: "الكل",
    filter_price: "السعر",
    add_to_cart: "أضف إلى السلة",
    order_whatsapp: "اطلبي عبر واتساب",
    price_from: "الأسعار تبدأ من",
    view_product: "عرض المنتج",
    back_to_shop: "العودة للمنتجات",
    description: "الوصف",
    how_to_use: "طريقة الاستعمال",
    related: "منتجات مشابهة",
    cart_title: "طلبك",
    cart_empty: "سلتك فارغة حالياً",
    cart_remove: "إزالة",
    cart_total: "المجموع",
    checkout_title: "إتمام الطلب - الدفع عند الاستلام",
    checkout_name: "الاسم الكامل",
    checkout_city: "المدينة",
    checkout_address: "العنوان بالتفصيل",
    checkout_phone: "رقم الهاتف",
    checkout_submit: "إرسال الطلب عبر واتساب",
    checkout_note: "سيتم تأكيد الطلب عبر واتساب، والدفع عند استلام المنتج.",
    footer_rights: "جميع الحقوق محفوظة",
    footer_follow: "تابعونا",
    about_title: "من نحن",
    contact_title: "اتصلي بنا",
    old_price: "السعر القديم",
  },
  fr: {
    tagline: "Sublimez votre beauté naturelle avec nos produits d'exception",
    natural: "Produits 100% naturels",
    nav_home: "Accueil",
    nav_shop: "Produits",
    nav_about: "Qui sommes-nous",
    nav_contact: "Contact",
    nav_order: "Commande rapide",
    hero_cta: "Découvrir la boutique",
    hero_sub: "Des produits 100% naturels pour la santé, la peau, les cheveux, et une beauté authentique venue du Sahara marocain",
    categories_title: "Achetez par catégorie",
    bestsellers_title: "Meilleures ventes",
    trust_1: "Livraison dans toutes les villes",
    trust_2: "Produits 100% naturels",
    trust_3: "Paiement à la livraison",
    search_placeholder: "Rechercher un produit, un ingrédient...",
    filter_all: "Tous",
    filter_price: "Prix",
    add_to_cart: "Ajouter au panier",
    order_whatsapp: "Commander via WhatsApp",
    price_from: "À partir de",
    view_product: "Voir le produit",
    back_to_shop: "Retour aux produits",
    description: "Description",
    how_to_use: "Mode d'emploi",
    related: "Produits similaires",
    cart_title: "Votre commande",
    cart_empty: "Votre panier est vide",
    cart_remove: "Retirer",
    cart_total: "Total",
    checkout_title: "Finaliser la commande - Paiement à la livraison",
    checkout_name: "Nom complet",
    checkout_city: "Ville",
    checkout_address: "Adresse détaillée",
    checkout_phone: "Numéro de téléphone",
    checkout_submit: "Envoyer la commande via WhatsApp",
    checkout_note: "Votre commande sera confirmée via WhatsApp, paiement à la livraison.",
    footer_rights: "Tous droits réservés",
    footer_follow: "Suivez-nous",
    about_title: "Qui sommes-nous",
    contact_title: "Contactez-nous",
    old_price: "Ancien prix",
  },
  en: {
    tagline: "Shine with natural beauty through our signature products",
    natural: "100% natural products",
    nav_home: "Home",
    nav_shop: "Shop",
    nav_about: "About us",
    nav_contact: "Contact",
    nav_order: "Quick order",
    hero_cta: "Shop now",
    hero_sub: "100% natural products for health, skin, and hair care, plus authentic beauty from the Moroccan Sahara",
    categories_title: "Shop by category",
    bestsellers_title: "Best sellers",
    trust_1: "Delivery to every city",
    trust_2: "100% natural products",
    trust_3: "Cash on delivery",
    search_placeholder: "Search a product, ingredient...",
    filter_all: "All",
    filter_price: "Price",
    add_to_cart: "Add to cart",
    order_whatsapp: "Order via WhatsApp",
    price_from: "Starting at",
    view_product: "View product",
    back_to_shop: "Back to shop",
    description: "Description",
    how_to_use: "How to use",
    related: "You may also like",
    cart_title: "Your order",
    cart_empty: "Your cart is empty",
    cart_remove: "Remove",
    cart_total: "Total",
    checkout_title: "Checkout - Cash on delivery",
    checkout_name: "Full name",
    checkout_city: "City",
    checkout_address: "Detailed address",
    checkout_phone: "Phone number",
    checkout_submit: "Send order via WhatsApp",
    checkout_note: "Your order is confirmed via WhatsApp, payment on delivery.",
    footer_rights: "All rights reserved",
    footer_follow: "Follow us",
    about_title: "About us",
    contact_title: "Contact us",
    old_price: "Old price",
  },
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("arinas_lang") : null;
    if (saved && dict[saved]) setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGUAGES[lang].dir;
    localStorage.setItem("arinas_lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      dir: LANGUAGES[lang].dir,
      setLang,
      t: (key) => dict[lang][key] ?? key,
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
