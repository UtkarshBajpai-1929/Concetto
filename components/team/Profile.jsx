import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Profile({ member }) {
  return (
    <section className="min-h-screen px-5 md:mt-10 py-24 md:px-10 md:py-28">
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-6xl items-center">
        <div className="grid w-full gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">

          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[var(--border)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={member.image || "/team/default.jpg"}
                  alt={member.name || "Team Member"}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">

            {/* <Link
              href="/teams"
              className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-[#a7a7a7] transition hover:text-[var(--primary)]"
            >
              <FaArrowLeft />
              Back to Team
            </Link> */}

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              {member.team}
            </p>

            <h1 className="mt-3 text-4xl font-black leading-[1.05] text-[#c0c0c0] md:text-5xl lg:text-6xl">
              {member.name}
            </h1>

            <p className="mt-4 text-lg font-semibold text-[var(--primary)] md:text-xl">
              {member.role}
            </p>

            <div className="mt-6 h-px w-20 bg-[var(--primary)]" />

            <div className="mt-6 space-y-3 text-sm leading-6 text-[#a7a7a7]">
              {member.department && (
                <p>
                  <span className="font-semibold text-white">
                    Department:
                  </span>{" "}
                  {member.department}
                </p>
              )}

              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 transition hover:text-[var(--primary)]"
                >
                  <FaEnvelope className="shrink-0 text-[var(--primary)]" />
                  <span>{member.email}</span>
                </a>
              )}

              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-3 transition hover:text-[var(--primary)]"
                >
                  <FaPhone className="shrink-0 text-[var(--primary)]" />
                  <span>{member.phone}</span>
                </a>
              )}
            </div>

            {/* Social Links */}
            {(member.linkedin ||
              member.instagram ||
              member.github) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    LinkedIn
                  </a>
                )}

                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    Instagram
                  </a>
                )}

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}