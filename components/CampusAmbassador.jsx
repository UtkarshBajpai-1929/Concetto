import { ArrowUpRight, Megaphone } from "lucide-react";

export default function CampusAmbassador() {
  return (
    <section className="px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] border border-[var(--primary)]/40 bg-[#0d0d0d] px-6 py-10 text-center md:px-10 md:py-12">

          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[90px]" />

          {/* Decorative Lines */}
          <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-[15%] bg-gradient-to-r from-transparent to-[var(--primary)]/30 md:block" />
          <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-[15%] bg-gradient-to-l from-transparent to-[var(--primary)]/30 md:block" />

          <div className="relative z-10 mx-auto max-w-4xl">

            {/* Label */}
            <div className="mb-3 flex items-center justify-center gap-2">
              <Megaphone
                size={14}
                className="text-[var(--primary)]"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--primary)] md:text-xs">
                Campus Ambassador Program
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Be the Face.
              <br />
              Be the Voice.
              <br />
              <span className="text-[var(--primary)]">
                Be the Bridge.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-[#a7a7a7] md:text-sm">
              Concetto&apos;26 is back with the Campus Ambassador Program.
              Represent your campus, connect with the community, and lead
              the change.
            </p>

            {/* CTA */}
            <a
              href="https://www.instagram.com/p/DdyVBPqkfmZ/?stkn=YTc0ancxZXNiZWF2"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff620f] hover:shadow-[0_8px_25px_rgba(232,80,2,0.3)]"
            >
              Apply Now
              <ArrowUpRight size={16} />
            </a>

            {/* Bottom Info */}
            <div className="mt-5 flex flex-col items-center justify-center gap-1.5 text-[9px] uppercase tracking-wider text-[#646464] md:flex-row md:gap-4 md:text-[10px]">
              <span>Scan QR to Register</span>
              <span className="hidden text-[var(--primary)] md:block">•</span>
              <span>Link in Bio</span>
              <span className="hidden text-[var(--primary)] md:block">•</span>
              <span>Lead the Change</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}