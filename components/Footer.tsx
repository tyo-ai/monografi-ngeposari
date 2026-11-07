import LogoNgeposari from "./LogoNgeposari";
import CapStempel from "./CapStempel";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#1A1A18] py-12 md:py-16 bg-[#2C4A3B] text-[#F4EFE6]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Identitas Kalurahan & Logo */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-[#F4EFE6] border border-[#1A1A18]">
                <LogoNgeposari size={36} />
              </div>
              <div>
                <h3 className="font-display text-xl text-[#F4EFE6] uppercase tracking-tight">
                  Kalurahan Ngeposari
                </h3>
                <span className="font-mono text-[10px] uppercase text-[#EAE3D3]/80">
                  Kapanewon Semanu · Gunungkidul
                </span>
              </div>
            </div>
            <p className="text-sm text-[#EAE3D3] leading-relaxed max-w-md">
              Pemerintah Kalurahan Ngeposari, Kapanewon Semanu, Kabupaten
              Gunungkidul, Daerah Istimewa Yogyakarta.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#EAE3D3]/80 pt-1">
              Dokumen Monografi Kalurahan · Tahun Pembentukan 1946
            </p>
          </div>

          {/* Kolom Kanan: Sumber Data & Cap Stempel */}
          <div className="md:col-span-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:text-right">
            <div className="hidden md:block">
              <CapStempel size={96} className="text-[#EAE3D3] opacity-70" />
            </div>
            <div className="space-y-1.5 font-mono text-[11px] text-[#EAE3D3] uppercase tracking-wider">
              <div className="text-[#F4EFE6] font-medium mb-2 border-b border-[#EAE3D3]/30 pb-1">
                Sumber Data Resmi
              </div>
              <p>Buku Monografi Kalurahan Ngeposari (2016)</p>
              <p>Data Kependudukan Dinas Dukcapil Gunungkidul (2024)</p>
              <p>Keputusan Kalurahan Budaya D.I. Yogyakarta (2024)</p>
              <p>Catatan Administrasi Kapanewon Semanu</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#EAE3D3]/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#EAE3D3]/75">
          <div>Kalurahan Ngeposari · Semanu · Gunungkidul</div>
          <div className="tabular">Kode Kemendagri: 34.03.02.2004 · 7.99° LS · 110.67° BT</div>
        </div>
      </div>
    </footer>
  );
}
