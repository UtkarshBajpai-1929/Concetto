"use client";

import { useEffect, useState } from "react";
import "../styles/space-background.css"; 
export default function SpaceBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black">
      {/* Nebula / atmospheric glow */}
      <div className="absolute inset-0">
        <div className="nebula nebula-1" />
        <div className="nebula nebula-2" />
        <div className="nebula nebula-3" />
      </div>

      {/* Distant planet */}
      <div className="planet planet-1">
        <div className="planet-glow" />
        <div className="planet-surface" />
        <div className="planet-ring" />
      </div>

      {/* Small distant planet */}
      <div className="planet planet-2">
        <div className="planet-glow" />
        <div className="planet-surface" />
      </div>

      {/* Spaceship */}
      <div className="spaceship ship-1">
        <div className="ship-body" />
        <div className="ship-wing ship-wing-left" />
        <div className="ship-wing ship-wing-right" />
        <div className="ship-engine ship-engine-1" />
        <div className="ship-engine ship-engine-2" />
      </div>

      {/* Distant satellite */}
      <div className="satellite">
        <div className="satellite-body" />
        <div className="solar-panel panel-left" />
        <div className="solar-panel panel-right" />
        <div className="satellite-arm" />
      </div>

      {/* Distant orbital ring */}
      <div className="orbit orbit-1" />
      <div className="orbit orbit-2" />

      {/* Subtle space dust */}
      <div className="space-dust" />
    </div>
  );
}