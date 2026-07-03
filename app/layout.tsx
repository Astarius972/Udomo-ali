import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "../styles.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Udomo Ali — Professional Career Counsellor",
  description:
    "Helping you embrace your unique story and navigate your transition with total confidence.",
  icons: { icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect width=%2264%22 height=%2264%22 rx=%2232%22 fill=%22%23D96F32%22/><text x=%2232%22 y=%2240%22 text-anchor=%22middle%22 font-size=%2225%22 fill=%22%23F4EFE7%22>UA</text></svg>" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
