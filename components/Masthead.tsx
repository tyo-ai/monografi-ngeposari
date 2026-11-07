import LogoNgeposari from "./LogoNgeposari";

export default function Masthead() {
  return (
    <header className="border-b border-[#1A1A18] bg-[#2C4A3B] text-[#F4EFE6] sticky top-0 z-20">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-wider text-[#F4EFE6] font-medium hover:text-[#EAE3D3] transition-colors duration-150"
        >
          <LogoNgeposari size={28} className="shrink-0" />
          <span>Monografi Kalurahan Ngeposari</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider text-[#EAE3D3]">
          <a
            href="#perkenalan"
            className="hover:text-[#FFFFFF] transition-colors duration-150"
          >
            00 Perkenalan
          </a>
          <a
            href="#geografi"
            className="hover:text-[#FFFFFF] transition-colors duration-150"
          >
            01 Geografi
          </a>
          <a
            href="#pemerintahan"
            className="hover:text-[#FFFFFF] transition-colors duration-150"
          >
            02 Pemerintahan
          </a>
          <a
            href="#demografi"
            className="hover:text-[#FFFFFF] transition-colors duration-150"
          >
            03 Demografi
          </a>
          <a
            href="#ekonomi"
            className="hover:text-[#FFFFFF] transition-colors duration-150"
          >
            04 Ekonomi
          </a>
          <a
            href="#wisata"
            className="hover:text-[#FFFFFF] transition-colors duration-150"
          >
            05 Wisata
          </a>
        </nav>
      </div>
    </header>
  );
}
