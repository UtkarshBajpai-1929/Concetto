import Hero from "@/components/Hero";
import About from "@/components/About";
import Countdown from "@/components/CountDown";
import Timeline from "@/components/timeline/TimeLine";
import WhyUs from "@/components/WhyUs";
import CampusAmbassador from "@/components/CampusAmbassador";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <About />
      <Timeline />
      <WhyUs/>
      <CampusAmbassador/>
    </main>
  );
}