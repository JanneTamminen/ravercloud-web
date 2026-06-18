"use client";

import { useEffect } from "react";

const FAQ_ITEMS = [
  {
    q: "Do I need VR?",
    a: "No. RaverCloud is a screen-based virtual club — your fans watch and join from a browser. There's no headset required for you or your audience.",
  },
  {
    q: "Do I need OBS?",
    a: "Yes — for now, you'll stream into the virtual club using OBS. We give you a guided setup and a 10-minute tech rehearsal so it's straightforward even if it's your first time.",
  },
  {
    q: "Can I perform from home?",
    a: "Absolutely. A home setup is the most common way founding DJs run their residency. You bring the decks and the camera; we provide the room.",
  },
  {
    q: "Can I sell tickets?",
    a: "Yes. Each event page supports paid entry, tiers, and tips. Replay access can be sold or gated after the show ends.",
  },
  {
    q: "Can fans appear in the virtual club?",
    a: "Yes — fans can opt in to the audience video wall and appear inside the room. It's always opt-in, never forced.",
  },
  {
    q: "What happens after the live event?",
    a: "Your set becomes a replay you own. Gate it, sell it, clip it for promo, or release it free — every show builds your archive.",
  },
  {
    q: "Is this fully self-serve?",
    a: "Not yet. The early version is a guided Founding DJ program — we set things up with you by hand so the first cohort's shows look and feel premium. Self-serve tooling comes later.",
  },
];

export function Faq() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLDetailsElement>(".faq details"));
    const handlers = items.map((details) => {
      const handler = () => {
        if (details.open) {
          items.forEach((other) => {
            if (other !== details) other.open = false;
          });
        }
      };
      details.addEventListener("toggle", handler);
      return { details, handler };
    });
    return () => {
      handlers.forEach(({ details, handler }) => details.removeEventListener("toggle", handler));
    };
  }, []);

  return (
    <div className="faq reveal">
      {FAQ_ITEMS.map((item) => (
        <details key={item.q}>
          <summary>
            <span className="q">{item.q}</span>
            <span className="plus" />
          </summary>
          <p className="a">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
