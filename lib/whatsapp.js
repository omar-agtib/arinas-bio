// Central place for the shop's WhatsApp number and message builders.
// Change the number here once and it updates everywhere in the site.
export const WHATSAPP_NUMBER = "212764826093"; // international format, no +, no spaces

export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function productOrderMessage({ name, price, qty = 1, lang = "ar" }) {
  const templates = {
    ar: `مرحباً، أرغب في طلب هذا المنتج:\n- المنتج: ${name}\n- السعر: ${price} درهم\n- الكمية: ${qty}\n\nشكراً`,
    fr: `Bonjour, je souhaite commander ce produit :\n- Produit : ${name}\n- Prix : ${price} DH\n- Quantité : ${qty}\n\nMerci`,
    en: `Hello, I'd like to order this product:\n- Product: ${name}\n- Price: ${price} DH\n- Quantity: ${qty}\n\nThank you`,
  };
  return templates[lang] ?? templates.ar;
}

export function cartOrderMessage({ items, name, city, address, phone, lang = "ar" }) {
  const lines = items
    .map((i) => `- ${i.name} x${i.qty} = ${i.price * i.qty} DH`)
    .join("\n");
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const templates = {
    ar: `مرحباً، أرغب في تأكيد طلبي (الدفع عند الاستلام):\n\n${lines}\n\nالمجموع: ${total} درهم\n\nالاسم: ${name}\nالمدينة: ${city}\nالعنوان: ${address}\nالهاتف: ${phone}`,
    fr: `Bonjour, je confirme ma commande (paiement à la livraison) :\n\n${lines}\n\nTotal : ${total} DH\n\nNom : ${name}\nVille : ${city}\nAdresse : ${address}\nTéléphone : ${phone}`,
    en: `Hello, I'd like to confirm my order (cash on delivery):\n\n${lines}\n\nTotal: ${total} DH\n\nName: ${name}\nCity: ${city}\nAddress: ${address}\nPhone: ${phone}`,
  };
  return templates[lang] ?? templates.ar;
}
