"use client";

import { useEffect } from "react";

export function PageEffects() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const checkReveals = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const trigger = vh + 120;
      for (let i = reveals.length - 1; i >= 0; i--) {
        const el = reveals[i];
        if (el.getBoundingClientRect().top < trigger) {
          el.classList.add("in");
          reveals.splice(i, 1);
        }
      }
    };

    const tiles = Array.from(
      document.querySelectorAll<HTMLElement>(".wall .tile, .fan-wall .tile"),
    );
    tiles.forEach((tile) => {
      if (!tile.style.getPropertyValue("--d")) {
        tile.style.setProperty("--d", `${(Math.random() * -4).toFixed(2)}s`);
      }
    });

    const onAnchorClick = (ev: MouseEvent) => {
      const anchor = (ev.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      ev.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", id);
    };

    window.addEventListener("scroll", checkReveals, { passive: true });
    window.addEventListener("resize", checkReveals);
    document.addEventListener("click", onAnchorClick);
    checkReveals();
    requestAnimationFrame(checkReveals);
    const timeout = window.setTimeout(checkReveals, 250);
    const fontsReady = document.fonts?.ready?.then(checkReveals);

    return () => {
      window.removeEventListener("scroll", checkReveals);
      window.removeEventListener("resize", checkReveals);
      document.removeEventListener("click", onAnchorClick);
      window.clearTimeout(timeout);
      void fontsReady;
    };
  }, []);

  return null;
}
