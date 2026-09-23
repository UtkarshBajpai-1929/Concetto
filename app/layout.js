import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Ballet } from "next/font/google";
{/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
export const metadata = {
  metadataBase: new URL('https://www.concetto.in'),
  title: "Concetto 2026 | IIT (ISM) Dhanbad",
  description:
    "Concetto — The annual Techno-Management Fest of IIT (ISM) Dhanbad.",
  openGraph: {
    siteName: "Concetto '26",
    title: 'Concetto 2026 | IIT (ISM) Dhanbad',
    url: 'https://www.concetto.in',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Concetto '26",
    url: 'https://www.concetto.in',
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
    
          <Header />
          {children}
          <Footer />
       
      </body>
    </html>
  );
}