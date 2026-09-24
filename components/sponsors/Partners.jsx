"use client";

const partnerTypes = [
  {
    title: "Theme Partner",
    description:
      "Associate your brand with the central theme and vision of Concetto 2026.",
  },
  {
    title: "Online Media Partner",
    description:
      "Promote the event and your brand through digital media, social platforms and online campaigns.",
  },
  {
    title: "Platform Partner",
    description:
      "Provide or support the digital platforms and technology used during the event.",
  },
  {
    title: "Logistic Partner",
    description:
      "Support transportation, movement of equipment and other logistical requirements.",
  },
  {
    title: "Travel Partner",
    description:
      "Support travel and transportation arrangements for guests, speakers and participants.",
  },
  {
    title: "Health Partner",
    description:
      "Support medical assistance, first-aid facilities and health-related requirements.",
  },
  {
    title: "Snack Partner",
    description:
      "Provide snacks and refreshments for participants, volunteers and event teams.",
  },
  {
    title: "Magazine Partner",
    description:
      "Partner with Concetto through magazine publications and print-based promotions.",
  },
  {
    title: "Stationery Partner",
    description:
      "Provide stationery and essential event materials for participants and organizers.",
  },
  {
    title: "Merchandise Partner",
    description:
      "Support event merchandise such as T-shirts, bags, badges and branded products.",
  },
  {
    title: "Gaming Partner",
    description:
      "Associate your brand with gaming competitions, esports and gaming-related activities.",
  },
  {
    title: "Hospitality Partner",
    description:
      "Support accommodation and hospitality arrangements for guests, speakers and teams.",
  },
  {
    title: "Styling Partner",
    description:
      "Support styling, grooming and appearance-related requirements for the event.",
  },
  {
    title: "Cellular Partner",
    description:
      "Provide telecom connectivity, SIM services, data services or communication support.",
  },
  {
    title: "Electronics Partner",
    description:
      "Support the event with electronic devices, equipment and technology products.",
  },
  {
    title: "eCommerce Partner",
    description:
      "Collaborate on online shopping, vouchers, offers and digital commerce promotions.",
  },
  {
    title: "Music Partner",
    description:
      "Associate your brand with musical performances, concerts and entertainment activities.",
  },
  {
    title: "Pro-Nite Partner",
    description:
      "Become a key partner for the flagship entertainment and Pro-Nite experience.",
  },
  {
    title: "Decoration Partner",
    description:
      "Support venue decoration, branding installations and visual event infrastructure.",
  },
  {
    title: "Prize Partner",
    description:
      "Provide prizes, rewards and gifts for competitions and winning participants.",
  },
  {
    title: "Gifts Partner",
    description:
      "Provide gifts and giveaways for guests, participants, speakers and special occasions.",
  },
  {
    title: "Food / Beverage Partner",
    description:
      "Provide food and beverage support while gaining prominent brand visibility.",
  },
];

export default function PartnerTypes() {
  const midIndex = Math.ceil(partnerTypes.length / 3);
  const leftColumn = partnerTypes.slice(0, midIndex);
  const centerColumn = partnerTypes.slice(midIndex, midIndex * 2);
  const rightColumn = partnerTypes.slice(midIndex * 2);

  const PartnerCard = ({ partner }) => (
    <div className="group flex flex-col cursor-pointer rounded-t-lg border-b border-white/10 px-4 py-5 transition-all duration-500 hover:border-[var(--primary)] hover:bg-white/[0.02] hover:backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-1.5 w-1.5 rounded-full bg-white/20 transition-all duration-500 group-hover:scale-150 group-hover:bg-[var(--primary)] group-hover:shadow-[0_0_10px_var(--primary)]" />

          <h3 className="text-lg font-bold uppercase tracking-wide text-[#ccc] transition-all duration-300 group-hover:translate-x-2 group-hover:text-white md:text-xl">
            {partner.title}
          </h3>
        </div>

        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 transition-all duration-500 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]/10 group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white/40 transition-transform duration-500 group-hover:-rotate-45 group-hover:text-[var(--primary)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:grid-rows-[1fr] group-hover:opacity-100">
        <div className="overflow-hidden">
          <p className="max-w-[95%] pb-2 pl-6 pt-4 text-sm leading-relaxed text-[#888]">
            {partner.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] px-5 py-24 md:px-10 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] opacity-10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-[var(--primary)] opacity-[0.08] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start border-b border-white/10 pb-10 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[var(--primary)]">
              <span className="h-px w-8 bg-[var(--primary)]"></span>
              Join the Ecosystem
            </p>

            <h2 className="text-4xl font-black uppercase leading-[1.1] tracking-tighter text-white md:text-6xl">
              Partnership
              <br />
              <span className="bg-gradient-to-r from-white to-[#666] bg-clip-text text-transparent">
                Opportunities
              </span>
            </h2>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#888] md:mt-0">
            Collaborate with Concetto 2026. Align your brand with the pinnacle
            of technology, innovation, and thousands of visionary young minds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-2 sm:grid-cols-3 font-stretch-87%">
          
          {partnerTypes.map((partner) => (
            <div key={partner.title} className="last:lg:col-start-2">
              <PartnerCard key={partner.title} partner={partner} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}