import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Licensed Clinical Psychologist",
  description: "Compassionate therapy for Anxiety, Trauma, and Burnout in Santa Monica, CA. Evidence-based care tailored to high-achievers and thoughtful adults.",
  keywords: ["Psychologist", "Santa Monica", "Therapy", "Anxiety", "Trauma", "Burnout", "CBT", "EMDR"],
  authors: [{ name: "Dr. Maya Reynolds" }],
  openGraph: {
    title: "Dr. Maya Reynolds | Licensed Clinical Psychologist",
    description: "Compassionate therapy for Anxiety, Trauma, and Burnout in Santa Monica, CA.",
    url: "https://drmayareynolds.com",
    siteName: "Dr. Maya Reynolds",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/maya_final.png",
        width: 800,
        height: 600,
        alt: "Dr. Maya Reynolds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds | Licensed Clinical Psychologist",
    description: "Therapy for Anxiety, Trauma, and Burnout in Santa Monica.",
    images: ["/images/maya_final.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          playfair.variable,
          lato.variable,
          "antialiased bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
