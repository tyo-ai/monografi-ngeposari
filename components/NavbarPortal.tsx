"use client";

import React, { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "Beranda", href: "#top" },
  { label: "Perkenalan", href: "#perkenalan" },
  { label: "Geografi", href: "#geografi" },
  { label: "Pemerintahan", href: "#pemerintahan" },
  { label: "Demografi", href: "#demografi" },
  { label: "Ekonomi", href: "#ekonomi" },
  { label: "Wisata", href: "#wisata" },
];

export default function NavbarPortal() {
  const [activeSection, setActiveSection] = useState<string>("top");
  const isClickScrolling = useRef(false);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  // Track active section on manual user scroll using getBoundingClientRect
  useEffect(() => {
    const handleScroll = () => {
      // Do not override active tab if user just clicked a nav tab
      if (isClickScrolling.current) return;

      // If near the top, mark "top" (Beranda)
      if (window.scrollY < 220) {
        setActiveSection("top");
        return;
      }

      // Check sections from bottom to top to find the currently active one
      const sections = NAV_ITEMS.slice(1).map((item) => ({
        id: item.href.replace("#", ""),
        el: document.getElementById(item.href.replace("#", "")),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.el) {
          const rect = sec.el.getBoundingClientRect();
          // If the section top is near the navbar viewing area
          if (rect.top <= 180) {
            setActiveSection(sec.id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href === "#top" ? "top" : href.replace("#", "");

    // 1. Instantly switch the active indicator ("tanda") to the clicked menu
    setActiveSection(targetId);

    // 2. Lock scroll listener for 1000ms so the active indicator stays on the clicked tab
    isClickScrolling.current = true;
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);

    // 3. Smooth scroll to the target position
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const navbarClearance = 70;
        const targetTop =
          targetEl.getBoundingClientRect().top + window.scrollY - navbarClearance;

        window.scrollTo({ top: targetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#143121]/95 backdrop-blur-md border-y border-emerald-900/60 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-13 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium whitespace-nowrap py-1.5">
          {NAV_ITEMS.map((item) => {
            const itemId = item.href.replace("#", "");
            const isActive = activeSection === itemId;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-2 rounded-lg font-semibold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-sm border border-emerald-400/80"
                    : "text-emerald-100/85 hover:text-white hover:bg-white/15 hover:border-emerald-400/50 hover:shadow-xs border border-transparent"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3 font-mono text-xs text-emerald-200 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Kalurahan Ngeposari · Gunungkidul</span>
        </div>
      </div>
    </nav>
  );
}
