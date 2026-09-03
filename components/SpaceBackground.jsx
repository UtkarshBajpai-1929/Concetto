"use client";
import "../styles/space-background.css"
export default function SpaceBackground() {
  return (
    <div className="space-background pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* =====================================================
          ATMOSPHERIC NEBULA
      ====================================================== */}

      <div className="space-nebula nebula-left" />
      <div className="space-nebula nebula-right" />
      <div className="space-nebula nebula-center" />

      {/* =====================================================
          DISTANT GALAXIES
      ====================================================== */}

      <div className="space-galaxy galaxy-left" />
      <div className="space-galaxy galaxy-right" />

      {/* =====================================================
          LARGE ORANGE PLANET
      ====================================================== */}

      <div className="space-planet planet-large">
        <div className="planet-atmosphere" />
        <div className="planet-surface" />
        <div className="planet-highlight" />

        <div className="planet-ring planet-ring-back" />
        <div className="planet-ring planet-ring-front" />
      </div>

      {/* =====================================================
          SMALL PLANET
      ====================================================== */}

      <div className="space-planet planet-small">
        <div className="planet-atmosphere" />
        <div className="planet-surface" />
      </div>

      {/* =====================================================
          SPACESHIP — MAIN
      ====================================================== */}

      <div className="space-ship ship-main">

        <div className="ship-body">
          <div className="ship-cockpit" />
          <div className="ship-window" />
        </div>

        <div className="ship-wing ship-wing-left" />
        <div className="ship-wing ship-wing-right" />

        <div className="ship-engine engine-left" />
        <div className="ship-engine engine-right" />

        <div className="ship-trail trail-left" />
        <div className="ship-trail trail-right" />
      </div>

      {/* =====================================================
          DISTANT SPACESHIP
      ====================================================== */}

      <div className="space-ship ship-distant">

        <div className="ship-body">
          <div className="ship-cockpit" />
        </div>

        <div className="ship-wing ship-wing-left" />
        <div className="ship-wing ship-wing-right" />

        <div className="ship-engine engine-left" />
        <div className="ship-engine engine-right" />
      </div>

      {/* =====================================================
          SATELLITE
      ====================================================== */}

      <div className="space-satellite">

        <div className="satellite-body">
          <div className="satellite-core" />
        </div>

        <div className="satellite-panel satellite-panel-left">
          <span />
          <span />
          <span />
        </div>

        <div className="satellite-panel satellite-panel-right">
          <span />
          <span />
          <span />
        </div>

        <div className="satellite-arm" />
        <div className="satellite-antenna" />
      </div>

      {/* =====================================================
          ORBITAL SYSTEMS
      ====================================================== */}

      <div className="space-orbit orbit-one" />
      <div className="space-orbit orbit-two" />
      <div className="space-orbit orbit-three" />

      {/* =====================================================
          SCI-FI HUD OBJECTS
      ====================================================== */}

      <div className="space-marker marker-one">
        <span />
        <span />
        <span />
      </div>

      <div className="space-marker marker-two">
        <span />
        <span />
        <span />
      </div>

      {/* =====================================================
          SPACE DUST
      ====================================================== */}

      <div className="space-dust" />

    </div>
  );
}