export default function Hero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-5 pb-14 pt-28 text-center md:px-10 md:pb-20 md:pt-36">
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

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[var(--primary)]/60 md:w-16" />

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Concetto '26
          </p>

          <span className="h-px w-12 bg-[var(--primary)]/60 md:w-16" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-tight text-[#c0c0c0] md:text-5xl lg:text-6xl">
          Our Team
          
        </h1>

        {/* Accent */}
        <div className="mx-auto mt-6 h-px w-24 bg-[var(--primary)]" />

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#a7a7a7] md:text-base md:leading-8">
          Every great experience begins with a great team. Meet the passionate
          students and dedicated faculty shaping{" "}
          <span className="font-semibold text-[var(--primary)]">
            CONCETTO '26
          </span>{" "}
          — bringing together vision, creativity, and a shared drive to create
          an experience that goes beyond expectations.
        </p>
      </div>
    </section>
  );
}