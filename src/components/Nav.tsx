"use client";

import { useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#product", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#formats", label: "Formats" },
  { href: "#founding", label: "Founding" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <a className="brand" href="#top" aria-label="RaverCloud home">
          <span className="mark" />
          <b>RaverCloud</b>
          <span className="sub">/ Residency</span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-cta">
          <a href="#demo" className="nav-demo">
            Watch demo
          </a>
          <a href="#founding" className="btn btn--primary">
            Apply
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <button
          type="button"
          className="nav-drawer-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
        <div className="nav-drawer-panel">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#demo" onClick={closeMenu}>
            Watch demo
          </a>
          <a href="#founding" className="btn btn--primary" style={{ marginTop: 16 }} onClick={closeMenu}>
            Apply
          </a>
        </div>
      </div>
    </>
  );
}
