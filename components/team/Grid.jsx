import Card from "./Card";

export default function Grid({ members }) {
  const teams = [
     "convener",
    "secretariat",
    "coordinators",
    "co-coordinators",
    "pr",
    "event",
    "sponsorship",
  ];

  return (
    <div className="space-y-16">
      {teams.map((team) => {
        const teamMembers = members.filter(
          (member) => member.team === team
        );

        if (teamMembers.length === 0) return null;

        return (
          <section key={team}>
            <h2 className="mb-4 text-2xl font-bold uppercase">
              {team} Team
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <Card key={member.name} member={member} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}