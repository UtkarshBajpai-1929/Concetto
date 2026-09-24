"use client";

import {
  CheckCircle2,
  ExternalLink,
  Ticket,
} from "lucide-react";

const themeStyles = {
  silver: {
    border: "border-zinc-500/50",
    glow: "shadow-[0_0_25px_rgba(180,180,180,0.08)]",
    title: "text-zinc-300",
    badge: "border-zinc-500/40 bg-zinc-500/10 text-zinc-300",
    check: "text-zinc-300",
    button: "bg-zinc-200 text-black hover:bg-white",
  },

  gold: {
    border: "border-yellow-500/60",
    glow: "shadow-[0_0_25px_rgba(234,179,8,0.12)]",
    title: "text-yellow-400",
    badge: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400",
    check: "text-yellow-400",
    button: "bg-yellow-500 text-black hover:bg-yellow-400",
  },

  diamond: {
    border: "border-cyan-500/70",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.12)]",
    title: "text-cyan-400",
    badge: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
    check: "text-cyan-400",
    button: "bg-cyan-400 text-black hover:bg-cyan-300",
  },

  merch: {
    border: "border-pink-600/70",
    glow: "shadow-[0_0_30px_rgba(219,39,119,0.12)]",
    title: "text-pink-500",
    badge: "border-pink-600/40 bg-pink-600/10 text-pink-400",
    check: "text-pink-500",
    button: "bg-pink-500 text-white hover:bg-pink-400",
  },
};

function PassCard({ pass }) {
  const style =
    themeStyles[pass.theme] || themeStyles.silver;

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-[#0d0202] p-4 transition duration-300 hover:-translate-y-1 md:p-5 ${style.border} ${style.glow}`}
    >
      {/* Top section */}
      <div>
        {/* Header */}
        <div className="flex min-h-[42px] items-start justify-between gap-3">
          <div>
            <h3
              className={`text-sm font-bold uppercase tracking-[0.12em] ${style.title}`}
            >
              {pass.name}
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
              {pass.duration}
            </p>
          </div>

          <Ticket
            size={18}
            className={`shrink-0 ${style.title}`}
          />
        </div>

        {/* Badge */}
        <div className="mt-3 min-h-[27px]">
          <span
            className={`inline-block rounded-md border px-2 py-1 text-[8px] font-bold uppercase tracking-wider ${style.badge}`}
          >
            {pass.badge}
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex min-h-[40px] items-end gap-2">
          <span className="text-2xl font-black leading-none text-white md:text-3xl">
            {pass.price}
          </span>

          {pass.originalPrice && (
            <span className="mb-0.5 text-[10px] text-zinc-600 line-through">
              {pass.originalPrice}
            </span>
          )}

          <span className="mb-0.5 text-[8px] text-zinc-500">
            Per Participant
          </span>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-white/[0.08]" />

        {/* Benefits */}
        <ul className="space-y-2.5">
          {pass.benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-[10px] leading-4 text-zinc-300 md:text-[11px]"
            >
              <CheckCircle2
                size={12}
                className={`mt-0.5 shrink-0 ${style.check}`}
              />

              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button pushed to same bottom level */}
      <a
        href={pass.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg px-3 py-3 text-center text-[9px] font-bold uppercase tracking-wide transition hover:cursor-pointer ${style.button}`}
      >
        <ExternalLink size={13} className="shrink-0" />

        <span>
          {pass.buttonText}
        </span>

        <span className="shrink-0 opacity-70">
          | {pass.price}
        </span>
      </a>
    </article>
  );
}

export default function Passes({
  passes = [],
  title = "Outside College Passes",
  description = "Official Concetto entry and access packages for participants from other universities.",
}) {
  return (
    <section className="px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-6xl">

        {/* Section heading */}
        <div className="mb-7">
          <div className="flex items-center gap-3">
            <Ticket
              size={20}
              className="text-[var(--primary)]"
            />

            <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-white md:text-xl">
              {title}
            </h2>
          </div>

          <p className="mt-2 max-w-2xl text-[10px] leading-5 text-zinc-500 md:text-xs">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
          {passes.map((pass) => (
            <PassCard
              key={pass.id}
              pass={pass}
            />
          ))}
        </div>

      </div>
    </section>
  );
}