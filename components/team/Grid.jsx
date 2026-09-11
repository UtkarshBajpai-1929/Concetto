import Card from "./Card";

export default function Grid({ members, teams }) {
  return (
    <div className="space-y-16 bg-black px-4 sm:px-6 md:space-y-20 lg:px-8">
      {teams.map((team) => {
        const teamMembers = members.filter(
          (member) => member.team === team
        );

        if (teamMembers.length === 0) return null;

        return (
          <section key={team} className="mx-auto w-full max-w-6xl">
            <div className="mb-7 text-center">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                {team} Team
              </h2>

              <div className="mx-auto mt-3 h-px w-24 bg-[var(--primary)]" />
            </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:gap-10">
  {teamMembers.map((member, index) => (
    <div
      key={member.name}
      className={`w-full max-w-[520px] ${
        teamMembers.length % 2 !== 0 && index === teamMembers.length - 1
          ? "md:col-span-2 md:justify-self-center"
          : ""
      }`}
    >
      <Card member={member} />
    </div>
  ))}
</div>
          </section>
        );
      })}
    </div>
  );
}