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
    title: "Food / Beverage Partner",
    description:
      "Provide food and beverage support while gaining prominent brand visibility.",
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
];

export default function PartnerTypes() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 md:px-10 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/[0.06] blur-[130px]" />

      {/* Decorative lines */}
      <div className="pointer-events-none absolute left-0 top-1/3 hidden h-px w-[15%] bg-[var(--primary)]/20 md:block" />
      <div className="pointer-events-none absolute right-0 top-1/3 hidden h-px w-[15%] bg-[var(--primary)]/20 md:block" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Collaborate With Us
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-[#c0c0c0] md:text-6xl">
            Partnership
            <span className="text-[var(--primary)]"> Opportunities</span>
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-[var(--primary)]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#8f8f8f] md:text-base">
            Partner with Concetto 2026 and connect your brand with innovation,
            technology and thousands of young minds.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((partner, index) => (
            <div
              key={partner.title}
              className="group relative min-h-[105px] overflow-hidden border border-white/[0.08] bg-[#171312] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:bg-[#211713] hover:shadow-[0_0_30px_rgba(255,90,0,0.12)]"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />

              {/* Corner accent */}
              <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-transparent transition-all duration-300 group-hover:border-[var(--primary)]/50" />

              {/* Number */}
              <span className="absolute right-4 top-3 text-[10px] font-bold tracking-widest text-white/10 transition-colors duration-300 group-hover:text-[var(--primary)]/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="relative">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[#bdbdbd] transition-colors duration-300 group-hover:text-[var(--primary)]">
                  {partner.title}
                </h3>

                {/* Description appears on hover */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="text-xs leading-5 text-[#858585]">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom arrow */}
              <div className="absolute bottom-4 right-4 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <span className="text-[var(--primary)]">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#666]">
            Find the partnership that fits your brand
          </p>
        </div>
      </div>
    </section>
  );
}