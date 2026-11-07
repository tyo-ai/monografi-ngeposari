import LogoNgeposari from "./LogoNgeposari";
import CapStempel from "./CapStempel";

export default function Hero() {
  return (
    <section className="border-b border-[#D4CCBD] pt-12 pb-12 md:pt-20 md:pb-16 relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-6">
          {/* Header Baris Arsip Dokumen */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#2C4A3B] pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#A9492A] inline-block" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#2C4A3B] font-bold">
                Dokumen Monografi Kalurahan
              </span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-[#5F5A55] tabular">
              <span>Kode: 34.03.02.2004</span>
              <span>·</span>
              <span>Arsip Resmi Sejak 1946</span>
            </div>
          </div>

          {/* Area Judul + Logo + Stempel Resmi */}
          <div className="py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-5 sm:gap-6">
              <div className="shrink-0 p-2 bg-[#EAE3D3]/60 border border-[#D4CCBD]">
                <LogoNgeposari size={72} />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#A9492A] font-semibold block mb-1">
                  Pemerintah Kalurahan
                </span>
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal text-[#1A1A18] tracking-tight leading-[1.05]">
                  Kalurahan Ngeposari
                </h1>
                <p className="mt-3 text-base sm:text-lg text-[#5F5A55] font-normal max-w-2xl leading-relaxed">
                  Kapanewon Semanu, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta.
                </p>
              </div>
            </div>

            {/* Cap Stempel Resmi Kalurahan */}
            <div className="hidden lg:block shrink-0 pr-4">
              <CapStempel size={124} />
            </div>
          </div>

          {/* Pita Ledger Spesifikasi Wilayah */}
          <div className="border-t-2 border-b border-[#1A1A18] bg-[#EAE3D3]/40 py-3 px-4 -mx-4 sm:mx-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[11px] uppercase tracking-wider text-[#5F5A55]">
              <div className="border-r border-[#D4CCBD] pr-2">
                <span className="block text-[#5F5A55] text-[10px]">Klasifikasi</span>
                <span className="text-[#2C4A3B] font-bold">Kalurahan Budaya</span>
              </div>
              <div className="border-r border-[#D4CCBD] pr-2">
                <span className="block text-[#5F5A55] text-[10px]">Wilayah</span>
                <span className="text-[#1A1A18] font-bold tabular">19 Padukuhan</span>
              </div>
              <div className="border-r border-[#D4CCBD] pr-2">
                <span className="block text-[#5F5A55] text-[10px]">Elevasi</span>
                <span className="text-[#1A1A18] font-bold tabular">± 800 mdpl</span>
              </div>
              <div>
                <span className="block text-[#5F5A55] text-[10px]">Titik Koordinat</span>
                <span className="text-[#1A1A18] font-bold tabular">7.99° LS · 110.67° BT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
