import Glimpses from "./Glimpses";
import Message from "./Message";
import { messages } from "@/data/messages";

export default function About() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Hero Background */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        {/* Orange glow behind heading */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[100px] md:h-[520px] md:w-[520px] md:bg-[var(--primary)]/[0.08] md:blur-[130px]" />

        {/* Left HUD circle */}
        <div className="pointer-events-none absolute left-[7%] top-[18%] hidden h-48 w-48 rounded-full border border-[var(--primary)]/20 md:block">
          <div className="absolute inset-7 rounded-full border border-[var(--primary)]/15" />

          <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom rotate-[32deg] bg-[var(--primary)]/30" />
        </div>

        {/* Right HUD circle */}
        <div className="pointer-events-none absolute right-[7%] top-[18%] hidden h-48 w-48 rounded-full border border-[var(--primary)]/20 md:block">
          <div className="absolute inset-7 rounded-full border border-[var(--primary)]/15" />

          <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom -rotate-[32deg] bg-[var(--primary)]/30" />
        </div>

        {/* Horizontal lines */}
        <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-[28%] bg-[var(--primary)]/25 md:block" />

        <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-[28%] bg-[var(--primary)]/25 md:block" />

        {/* About Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Discover Concetto
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-[#c0c0c0] md:text-6xl">
            About Us
            <span className="text-[var(--primary)]">.</span>
          </h1>

          <div className="mx-auto mt-7 h-px w-24 bg-[var(--primary)]" />

          <div className="mx-auto mt-7 max-w-3xl space-y-5 text-sm leading-7 text-[#a7a7a7] md:text-base">
            <p>
              <span className="font-bold text-[var(--primary)]">
                CONCETTO
              </span>{" "}
              is the renowned annual techno-management fest hosted by the
              Indian Institute of Technology (Indian School of Mines), Dhanbad.
              With its first edition held in 2011, it is reputed to be
              Eastern India's largest gathering of tech minds and innovators.
              It attracts over 20,000 spirited participants every year and
              celebrates imagination and intellect, combining technical genius
              with management prowess.
            </p>
          </div>
        </div>
      </section>

      <Glimpses />

      {/* Messages */}
      <section className="relative px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-4xl space-y-16">
          {messages.map((message) => (
            <Message key={message.name} {...message} />
          ))}
        </div>
      </section>
    </main>
  );
}