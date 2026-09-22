import { notFound } from "next/navigation";
import { team } from "@/data/team";
import Profile from "@/components/team/Profile";

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;

  const member = team.find((person) => person.slug === slug);
  if (!member) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="relative z-10">
        <Profile member={member} />
      </div>
    </main>
  );
}