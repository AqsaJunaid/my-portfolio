"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    return {
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 60, density: { enable: true } },
        color: { value: ["#3B82F6", "#1E3A5F", "#60A5FA"] },
        links: {
          enable: true,
          color: "#3B82F6",
          distance: 150,
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: !reduceMotion,
          speed: 0.7,
          outModes: { default: "out" },
        },
        opacity: { value: { min: 0.3, max: 0.7 } },
        size: { value: { min: 1, max: 3 } },
        shape: { type: "circle" },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: !reduceMotion, mode: "grab" },
          resize: { enable: true },
        },
        modes: { grab: { distance: 160, links: { opacity: 0.5 } } },
      },
    };
  }, []);

  if (!ready) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <Particles id="tsparticles" options={options} className="h-full w-full" />
    </div>
  );
}