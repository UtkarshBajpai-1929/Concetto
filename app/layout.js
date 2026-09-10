import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Ballet } from "next/font/google";
export const metadata = {
  title: "Concetto 2026 | IIT (ISM) Dhanbad",
  description:
    "Concetto — The annual Techno-Management Fest of IIT (ISM) Dhanbad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
    
          <Header />
          {children}
          <Footer />
       
      </body>
    </html>
  );
}