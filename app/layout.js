import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Ballet } from "next/font/google";
export const metadata = {
  title: "Concetto 2026 | IIT (ISM) Dhanbad",
  openGraph: {
    siteName: "Concetto '26",
    url: "https://www.concetto.in",
  },
  description:
    "Concetto — The annual Techno-Management Fest of IIT (ISM) Dhanbad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Concetto '26",
              url: "https://www.concetto.in",
            }),
          }}
        />
        <meta name="google-site-verification" content="wD1ikE_mI6UlmS-GzA1WoykOQ-MhqRqlcZQ0rCJWLKg" />
      </head>
      <body>
    
          <Header />
          {children}
          <Footer />
       
      </body>
    </html>
  );
}