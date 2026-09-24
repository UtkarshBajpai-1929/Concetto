
import Hero from "@/components/accommodation/Hero";
import Content from "@/components/accommodation/Content";
import Passes from "@/components/accommodation/Passes";
import { passes } from "@/data/passes";
export const metadata = {
  title: "Accommodation | Concetto 2026",
  description:
    "Accommodation information and registration for Concetto 2026 at IIT (ISM) Dhanbad.",
};

export default function AccommodationPage() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Content />
    </main>
  );
}