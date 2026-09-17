import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ARINAS BIO DAK — منتجات طبيعية 100%",
  description:
    "ARINAS BIO DAK: منتجات طبيعية 100% للعناية بالصحة، البشرة والشعر، ومنتجات صحراوية أصيلة ومنتجات باليا الألمانية.",
  metadataBase: new URL("https://arinasbiodak.example.com"),
  openGraph: {
    title: "ARINAS BIO DAK",
    description: "تألقي بجمال طبيعي مع منتجاتنا المميزة — منتجات طبيعية 100%",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <I18nProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
