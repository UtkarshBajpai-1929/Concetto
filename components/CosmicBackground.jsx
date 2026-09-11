export default function CosmicBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Orange nebula */}
      <div className="absolute left-[5%] top-[10%] h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[120px]" />

      {/* Blue nebula */}
      <div className="absolute right-[5%] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Purple nebula */}
      <div className="absolute bottom-[5%] left-[35%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[140px]" />

      {/* Stars */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(circle, white 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px, 150px 150px, 230px 230px",
          backgroundPosition: "20px 30px, 70px 90px, 130px 40px",
        }}
      />

      {/* Large orbit */}
      <div className="absolute left-1/2 top-[15%] h-[650px] w-[650px] -translate-x-1/2 rotate-12 rounded-full border border-white/10" />

      {/* Wide orbit */}
      <div className="absolute left-1/2 top-[20%] h-[500px] w-[850px] -translate-x-1/2 -rotate-12 rounded-[50%] border border-orange-500/15" />

      {/* Orbital system */}
      <div className="absolute right-[8%] top-[15%] hidden h-56 w-56 rounded-full border border-orange-500/20 md:block">
        <div className="absolute inset-6 rounded-full border border-white/10" />

        <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom rotate-45 bg-orange-500/40" />

        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 shadow-[0_0_20px_orange]" />
      </div>

      {/* Distant planet */}
      <div className="absolute bottom-[15%] right-[12%] hidden h-24 w-24 rounded-full border border-white/10 bg-white/5 md:block" />

      {/* Signal points */}
      <div className="absolute left-[12%] top-[42%] h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_15px_orange]" />

      <div className="absolute right-[20%] top-[65%] h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_15px_orange]" />
    </div>
  );
}