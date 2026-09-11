// import Image from "next/image";

// export default function Message({
//   name,
//   designation,
//   message,
//   image,
// }) {
//   return (
//     <div
//       className="relative mt-18 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 px-6 pb-8 pt-20 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-md md:px-12"
//       style={{ "--image-size": "9rem" }}
//     >
//       <div
//         className="absolute left-1/2 top-0 z-10 h-[var(--image-size)] w-[var(--image-size)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-[var(--background)] bg-[var(--surface)] shadow-xl"
//       >
//         <Image
//           src={image}
//           alt={name}
//           fill
//           sizes="144px"
//           className="object-cover"
//         />
//       </div>

//       <div className="text-center">
//         <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
//           Message
//         </p>

//         <h2 className="mt-2 text-2xl font-bold text-[var(--foreground)] md:text-3xl">
//           {name}
//         </h2>

//         <p className="mt-1 text-sm text-[var(--muted)]">
//           {designation}
//         </p>
//       </div>

//       <div className="mx-auto mt-7 max-w-3xl space-y-5 text-sm leading-7 text-[var(--muted)]">
//         {message.map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </div>
//     </div>
//   );
// }
import Image from "next/image";

export default function Message({
  name,
  designation,
  message,
  image,
}) {
  return (
    <div className="relative mt-18 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 px-6 py-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-md md:px-10">

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">

        {/* Left: Image with Name & Designation Overlay */}
        <div className="w-full md:w-1/3 md:shrink-0">
          <div className="relative mx-auto h-80 w-56 overflow-hidden rounded-xl border-4 border-[var(--background)] bg-[var(--surface)] shadow-xl">

            {/* Image */}
            <Image
              src={image}
              alt={name}
              fill
              sizes="224px"
              className="object-cover"
            />

            {/* Dark gradient at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Name & Designation */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 text-center text-white">
              <h2 className="text-xl font-bold md:text-2xl">
                {name}
              </h2>

              <p className="mt-1 text-sm text-white/80">
                {designation}
              </p>
            </div>

          </div>
        </div>

        {/* Right: Message */}
        <div className="w-full md:w-2/3">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Message
          </p>

          <div className="space-y-5 text-sm leading-7 text-[var(--muted)]">
            {message.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}