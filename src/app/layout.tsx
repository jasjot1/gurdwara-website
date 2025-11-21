import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gurdwara-website.vercel.app"),
  title: {
    default: "Gurdwara Guru Maneyo Granth | Sikh Temple Yuba City",
    template: "%s | Gurdwara Guru Maneyo Granth",
  },
  description: "Gurdwara Guru Maneyo Granth is a Sikh Temple in Yuba City, CA (95991). Join us for daily prayers, Sunday Diwan, and Langar Seva. Everyone is welcome.",
  keywords: ["Gurdwara", "Sikh Temple", "Yuba City", "Guru Maneyo Granth", "Sikhism", "Langar", "Kirtan", "Nitnem", "California Gurdwara"],
  authors: [{ name: "Gurdwara Guru Maneyo Granth" }],
  creator: "Gurdwara Guru Maneyo Granth",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gurdwara-website.vercel.app", // Pending actual domain
    title: "Gurdwara Guru Maneyo Granth | Sikh Temple Yuba City",
    description: "Join us for daily prayers, Sunday Diwan, and Langar Seva at Gurdwara Guru Maneyo Granth in Yuba City, CA.",
    siteName: "Gurdwara Guru Maneyo Granth",
    images: [
      {
        url: "/images/main.jpg",
        width: 1200,
        height: 630,
        alt: "Gurdwara Guru Maneyo Granth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurdwara Guru Maneyo Granth | Sikh Temple Yuba City",
    description: "Sikh Temple in Yuba City, CA. Daily prayers, Langar, and Community Service.",
    images: ["/images/main.jpg"],
  },
  icons: {
    icon: "/icon.png",
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
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PlaceOfWorship",
              "name": "Gurdwara Guru Maneyo Granth",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "9882 Garden Hwy",
                "addressLocality": "Yuba City",
                "addressRegion": "CA",
                "postalCode": "95991",
                "addressCountry": "US"
              },
              "telephone": "+1-530-812-6075",
              "url": "https://gurdwara-website.vercel.app",
              "image": "https://gurdwara-website.vercel.app/images/main.jpg",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "04:30",
                  "closes": "21:00"
                }
              ]
            }),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
