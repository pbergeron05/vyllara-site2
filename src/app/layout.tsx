import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
const serif = Cormorant_Garamond({ subsets:["latin"], variable:"--font-serif", weight:["400","500","600"] });
const sans = Inter({ subsets:["latin"], variable:"--font-sans", weight:["300","400","500","600"] });
export const metadata: Metadata = {
  title: "VYLLARA | Active Retreats in Cabarete",
  description: "Turnkey active retreats with premium villas, sport facilities and tailored services in Cabarete.",
  icons: { icon: "/favicon.png" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body className="font-sans">{children}</body></html>;
}
