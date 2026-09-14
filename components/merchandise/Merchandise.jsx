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
    "/merch/merch_sizes.png",
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

  // Touch start 
  const handleTouchStart = (e) => { 
    setTouchStart(e.touches[0].clientX); 
  }; 
  // Touch end 
  const handleTouchEnd = (e) => {
     if (touchStart === null) 
      return; 
    const touchEnd = e.changedTouches[0].clientX; 
    const distance = touchStart - touchEnd; 
    // Minimum swipe distance 
    const minSwipeDistance = 50; 
    if (Math.abs(distance) < minSwipeDistance) 
    { 
      setTouchStart(null);
      return; 
    } 
    if (distance > 0) { 
      // Swipe left → next image 
      nextImage(); 
    } 
    else { 
      // Swipe right → previous image 
      previousImage(); 
    } 
    setTouchStart(null); 
  };

  return (
    <main className="bg-black text-white">

      {/* Hero */}
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

      {/* Product */}
      <section id="product" className="px-5 pb-20 md:px-10">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/30 shadow-2xl lg:grid-cols-2">

          {/* Image Gallery */}
          <div className="flex min-h-[450px] flex-col items-center justify-center border-b border-[var(--border)] p-6 md:p-10 lg:border-b-0 lg:border-r">

            {/* Image */}
            <div 
            className="relative flex w-full items-center justify-center touch-pan-y" 
            onTouchStart={handleTouchStart} 
            onTouchEnd={handleTouchEnd} 
            >
              <Image
                key={images[currentImage]}
                src={images[currentImage]}
                alt={`Concetto official T-shirt image ${currentImage + 1}`}
                width={800}
                height={800}
                priority
                className="max-h-[500px] w-full object-contain transition-all duration-500"
              />

              {/* Previous Button */}
              <button
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-2 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)]/50 bg-black/70 text-[var(--primary)] backdrop-blur-md transition hover:bg-[var(--primary)] hover:text-white md:left-4"
              >
                <ArrowLeft size={18} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)]/50 bg-black/70 text-[var(--primary)] backdrop-blur-md transition hover:bg-[var(--primary)] hover:text-white md:right-4"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Image Indicators */}
            <div className="mt-5 flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    currentImage === index
                      ? "w-8 bg-[var(--primary)]"
                      : "w-2 bg-[var(--border)]"
                  }`}
                />
              ))}

            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center p-7 md:p-12">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
              Concetto 2026
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-4xl">
              Official
              <br />
              Concetto T-Shirt
            </h2>

            <p className="mt-5 text-sm leading-6 text-[#a7a7a7]">
              Premium cotton T-shirt featuring the official Concetto
              design. Comfortable, minimal and made for the community.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="text-3xl font-black text-[var(--primary)]">
                ₹379
              </span>
            </div>

            {/* Buy */}
            <a
              href="https://docs.google.com/forms/d/1YH3YaouuGGCdojzgFMKLKArhAHH8GGsszZ7CQg2HzN0/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-6 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <ShoppingBag size={18} />
              Buy Now
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}