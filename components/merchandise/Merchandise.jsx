// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { ArrowDown, ArrowUpRight, ShoppingBag } from "lucide-react";

// export default function Merchandise() {
//   const [view, setView] = useState("front");

//   const image =
//     view === "front"
//       ? "/merch/shop_front.webp"
//       : "/merch/shop_back.webp";

//   return (
//     <main className="bg-black text-white">
//       {/* Hero */}
//       <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-16 pt-32 text-center md:px-10 md:pb-20 md:pt-40">
//         {/* Orange glow */}
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[100px] md:h-[520px] md:w-[520px] md:bg-[var(--primary)]/[0.08] md:blur-[130px]" />

//         {/* Left HUD circle */}
//         <div className="pointer-events-none absolute left-[7%] top-[18%] hidden h-48 w-48 rounded-full border border-[var(--primary)]/20 md:block">
//           <div className="absolute inset-7 rounded-full border border-[var(--primary)]/15" />

//           <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom rotate-[32deg] bg-[var(--primary)]/30" />
//         </div>

//         {/* Right HUD circle */}
//         <div className="pointer-events-none absolute right-[7%] top-[18%] hidden h-48 w-48 rounded-full border border-[var(--primary)]/20 md:block">
//           <div className="absolute inset-7 rounded-full border border-[var(--primary)]/15" />

//           <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom -rotate-[32deg] bg-[var(--primary)]/30" />
//         </div>

//         {/* Horizontal lines */}
//         <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-[28%] bg-[var(--primary)]/25 md:block" />

//         <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-[28%] bg-[var(--primary)]/25 md:block" />

//         {/* Hero content */}
//         <div className="relative z-10 mx-auto max-w-4xl">
//           <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
//             Official Merchandise
//           </p>

//           <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-[#c0c0c0] md:text-6xl">
//             Wear Concetto
//             <span className="text-[var(--primary)]">.</span>
//           </h1>

//           <div className="mx-auto mt-6 h-px w-24 bg-[var(--primary)]" />

//           <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#a7a7a7] md:text-base">
//             The official Concetto T-shirt — made for the fest,
//             designed to live beyond it.
//           </p>

//           <a
//             href="#product"
//             className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
//           >
//             Explore
//             <ArrowDown size={14} />
//           </a>
//         </div>
//       </section>

//       {/* Product */}
//       <section id="product" className="px-5 pb-20 md:px-10">
//         <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/30 shadow-2xl lg:grid-cols-2">
//           {/* Image */}
//           <div className="flex min-h-[450px] items-center justify-center border-b border-[var(--border)] p-6 md:p-10 lg:border-b-0 lg:border-r">
//             <Image
//               src={image}
//               alt="Concetto official T-shirt"
//               width={800}
//               height={800}
//               priority
//               className="max-h-[500px] w-full object-contain transition-all duration-500"
//             />
//           </div>

//           {/* Details */}
//           <div className="flex flex-col justify-center p-7 md:p-12">
//             <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
//               Concetto 2026
//             </p>

//             <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-4xl">
//               Official
//               <br />
//               Concetto T-Shirt
//             </h2>

//             <p className="mt-5 text-sm leading-6 text-[#a7a7a7]">
//               Premium cotton T-shirt featuring the official Concetto
//               design. Comfortable, minimal and made for the community.
//             </p>

//             <div className="mt-7 flex items-center gap-4">
//               <span className="text-3xl font-black text-[var(--primary)]">
//                 ₹379
//               </span>

//               {/* <span className="text-sm text-[#a7a7a7] line-through">
//                 ₹699
//               </span>

//               <span className="rounded-md bg-[var(--primary)]/10 px-2 py-1 text-[10px] font-bold uppercase text-[var(--primary)]">
//                 50% Off
//               </span> */}
//             </div>

//             {/* View */}
//             <div className="mt-8 grid grid-cols-2 gap-2">
//               {["front", "back"].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => setView(item)}
//                   className={`rounded-lg border px-4 py-3 text-xs font-semibold uppercase tracking-wider transition ${
//                     view === item
//                       ? "border-[var(--primary)] bg-[var(--primary)] text-white"
//                       : "border-[var(--border)] text-[#a7a7a7] hover:border-[var(--primary)]"
//                   }`}
//                 >
//                   {item} Side
//                 </button>
//               ))}
//             </div>

//             {/* Buy */}
//             <a
//               href="https://docs.google.com/forms/d/1YH3YaouuGGCdojzgFMKLKArhAHH8GGsszZ7CQg2HzN0/edit"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-5 flex items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-6 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg"
//             >
//               <ShoppingBag size={18} />
//               Buy Now
//               <ArrowUpRight size={16} />
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react";

export default function Merchandise() {
  const images = [
    "/merch/merch.png",
    "/merch/merch_sizes.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) {
      setTouchStart(null);
      return;
    }

    if (distance > 0) {
      nextImage();
    } else {
      previousImage();
    }

    setTouchStart(null);
  };

  return (
    <main className="bg-black text-white">

      {/* =====================================================
          EXISTING HERO — KEPT AS IT WAS
      ====================================================== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-16 pt-32 text-center md:px-10 md:pb-20 md:pt-40">

        {/* Orange glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[100px] md:h-[520px] md:w-[520px] md:bg-[var(--primary)]/[0.08] md:blur-[130px]" />

        {/* Left HUD circle */}
        <div className="pointer-events-none absolute left-[7%] top-[18%] hidden h-48 w-48 rounded-full border border-[var(--primary)]/20 md:block">
          <div className="absolute inset-7 rounded-full border border-[var(--primary)]/15" />
          <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom rotate-[32deg] bg-[var(--primary)]/30" />
        </div>

        {/* Right HUD circle */}
        <div className="pointer-events-none absolute right-[7%] top-[18%] hidden h-48 w-48 rounded-full border border-[var(--primary)]/20 md:block">
          <div className="absolute inset-7 rounded-full border border-[var(--primary)]/15" />
          <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom -rotate-[32deg] bg-[var(--primary)]/30" />
        </div>

        {/* Horizontal lines */}
        <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-[28%] bg-[var(--primary)]/25 md:block" />
        <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-[28%] bg-[var(--primary)]/25 md:block" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-4xl">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Official Merchandise
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-[#c0c0c0] md:text-6xl">
            Wear Concetto
            <span className="text-[var(--primary)]">.</span>
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-[var(--primary)]" />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#a7a7a7] md:text-base">
            The official Concetto T-shirt — made for the fest,
            designed to live beyond it.
          </p>

          <a
            href="#product"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
          >
            Explore
            <ArrowDown size={14} />
          </a>

        </div>
      </section>


      {/* =====================================================
          MAIN PRODUCT SECTION — NEW DESIGN
      ====================================================== */}
      <section
        id="product"
        className="px-4 pb-20 md:px-8"
      >
        <div className="mx-auto max-w-[1200px]">

          {/* -----------------------------------------------
              TOP PRODUCT LABEL
          ------------------------------------------------ */}
          <div className="mb-5 flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-black">
                <ShoppingBag size={18} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                  Official Festival
                </p>

                <h2 className="text-lg font-black uppercase tracking-wide text-white md:text-xl">
                  T-Shirt
                </h2>
              </div>
            </div>

            <div className="rounded-lg bg-[var(--primary)] px-3 py-2 text-xs font-black text-black md:px-5 md:text-sm">
              38% OFF
            </div>

          </div>


          {/* =================================================
              PRODUCT CARD
          ================================================== */}
          <div className="overflow-hidden rounded-[2rem] border border-[#711006] bg-[#0d0101] shadow-[0_0_70px_rgba(232,80,2,0.12)]">

            {/* =================================================
                IMAGE SHOWCASE
            ================================================== */}
            <div
              className="relative overflow-hidden bg-[#180202]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >

              {/* Background gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(232,80,2,0.20),transparent_45%),linear-gradient(135deg,#210302,#350402,#110101)]" />

              {/* Decorative network */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 12% 72%, rgba(255,80,0,0.8) 0 2px, transparent 3px),
                    radial-gradient(circle at 88% 30%, rgba(255,80,0,0.8) 0 2px, transparent 3px),
                    radial-gradient(circle at 72% 82%, rgba(255,80,0,0.6) 0 1px, transparent 3px),
                    linear-gradient(25deg, transparent 49.7%, rgba(255,80,0,0.18) 50%, transparent 50.3%),
                    linear-gradient(155deg, transparent 49.7%, rgba(255,80,0,0.15) 50%, transparent 50.3%)
                  `,
                  backgroundSize:
                    "100% 100%,100% 100%,100% 100%,160px 160px,200px 200px",
                }}
              />

              {/* Decorative circles */}
              <div className="absolute -right-24 top-16 h-64 w-64 rounded-full border border-orange-600/20">
                <div className="absolute inset-10 rounded-full border border-orange-600/10" />
              </div>

              <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-red-600/20">
                <div className="absolute inset-10 rounded-full border border-red-600/10" />
              </div>


              {/* -----------------------------------------------
                  CARD HEADER
              ------------------------------------------------ */}
              <div className="relative z-20 flex items-center justify-between px-5 pt-5 md:px-8 md:pt-7">

                <div className="text-sm font-black uppercase tracking-[0.12em] text-white/80 md:text-lg">
                  Concetto
                </div>

                <div className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-[10px] text-white/70 backdrop-blur-md md:text-xs">
                  <span className="mr-1">⌕</span>
                  Tap to Zoom
                </div>

              </div>


              {/* -----------------------------------------------
                  FAINT MERCHANDISE TITLE
              ------------------------------------------------ */}
              <div className="pointer-events-none absolute left-1/2 top-[13%] z-0 -translate-x-1/2 whitespace-nowrap">

                <span className="text-[55px] font-black uppercase tracking-tight text-red-950/80 sm:text-7xl md:text-8xl lg:text-[115px]">
                  Merchandise
                </span>

              </div>


              {/* -----------------------------------------------
                  IMAGE FRAME
              ------------------------------------------------ */}
              <div className="relative z-10 mx-auto mt-8 w-[88%] max-w-[760px] rounded-[1.5rem] border border-white/10 bg-[#44201b]/80 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:p-5 md:mt-12 md:p-7">

                <div className="relative aspect-[4/3]">

                  <Image
                    key={images[currentImage]}
                    src={images[currentImage]}
                    alt={`Concetto official T-shirt image ${
                      currentImage + 1
                    }`}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 760px"
                    className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                  />

                  {/* Previous */}
                  <button
                    onClick={previousImage}
                    aria-label="Previous image"
                    className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-orange-500/40 bg-black/70 text-orange-400 backdrop-blur-md transition hover:bg-orange-500 hover:text-black md:left-3"
                  >
                    <ArrowLeft size={17} />
                  </button>

                  {/* Next */}
                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-orange-500/40 bg-black/70 text-orange-400 backdrop-blur-md transition hover:bg-orange-500 hover:text-black md:right-3"
                  >
                    <ArrowRight size={17} />
                  </button>

                </div>
              </div>


              {/* -----------------------------------------------
                  ORDER NOW
              ------------------------------------------------ */}
              <div className="relative z-20 flex justify-center py-6 md:py-8">

                <a
                  href="#product-details"
                  className="flex overflow-hidden rounded-lg border border-orange-700/50 bg-black/70 shadow-[0_0_25px_rgba(232,80,2,0.15)] backdrop-blur-md"
                >

                  <span className="px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 md:px-12">
                    Order Now
                  </span>

                  <span className="flex w-12 items-center justify-center border-l border-orange-700/40 bg-orange-900/20 text-orange-400 md:w-16">
                    <ArrowRight size={19} />
                  </span>

                </a>

              </div>


              {/* Indicators */}
              <div className="relative z-20 mb-6 flex justify-center gap-2">

                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      currentImage === index
                        ? "w-8 bg-orange-500"
                        : "w-2 bg-white/25"
                    }`}
                  />
                ))}

              </div>

            </div>


            {/* =================================================
                PRODUCT INFORMATION
            ================================================== */}
            <div
              id="product-details"
              className="border-t border-red-900/40 px-6 py-8 md:px-12 md:py-10"
            >

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
                Concetto '26
              </p>

              <h2 className="mt-3 max-w-3xl text-2xl font-black leading-tight text-white md:text-4xl">
                Official Centauri Synapse
                <br className="hidden md:block" />
                T-Shirt
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#a7a7a7] md:text-base">
                Premium 240 GSM Bio-Washed Combed Cotton • Screen-Printed
                Rocket & Barcode Graphics • Glow-in-the-Dark Centenary
                Detailing
              </p>


              {/* Price */}
              <div className="mt-7 flex flex-wrap items-center gap-4">

                <span className="text-4xl font-black text-[var(--primary)] md:text-5xl">
                  ₹379
                </span>

                <span className="text-lg text-gray-500 line-through">
                  ₹599
                </span>

                <span className="text-sm font-bold text-emerald-400">
                  37% OFF • Fest Subsidy
                </span>

              </div>


              {/* Size */}
              <div className="mt-8">

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Select Size:
                </p>
{/* 
                <div className="flex flex-wrap gap-3">

                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      className="h-14 w-16 rounded-xl border border-white/20 bg-transparent text-sm font-medium text-white transition hover:border-[var(--primary)] hover:text-[var(--primary)] md:h-16 md:w-20"
                    >
                      {size}
                    </button>
                  ))}

                </div> */}

              </div>


              {/* Buy Now */}
              <a
                href="https://docs.google.com/forms/d/1YH3YaouuGGCdojzgFMKLKArhAHH8GGsszZ7CQg2HzN0/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(232,80,2,0.25)]"
              >
                <ShoppingBag size={18} />
                Buy Now
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}