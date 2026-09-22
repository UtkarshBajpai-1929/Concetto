import Image from "next/image";
import Link from "next/link";

export default function Card({ member }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--background)]">
        <Image
          src={member.image || "/team/default.jpg"}
          alt={member.name || "Team Member"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          className="object-cover object-center transition duration-500 group-hover:scale-105"
        />

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`/teams/${member.slug}`}
          className="absolute bottom-3 right-3 rounded-lg bg-black/80 px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:bg-[var(--primary)]"
        >
          View Profile
        </Link>
      </div>

      <div className="bg-[var(--background)] p-5">
        <h3 className="text-base font-bold text-[var(--foreground)]">
          {member.name || "—"}
        </h3>

        <h4 className="text-base font-semibold text-[var(--primary)]">
          {member.role || "—"}
        </h4>
      </div>
    </article>
  );
}