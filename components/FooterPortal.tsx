import LogoNgeposari from "./LogoNgeposari";

export default function FooterPortal() {
  return (
    <footer className="w-full bg-[#142e20] text-slate-300 text-xs mt-12 border-t-4 border-[#a9492a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kolom 1: Logo & Nama */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white border border-slate-300">
                <LogoNgeposari size={42} />
              </div>
              <div>
                <h3 className="font-display text-lg text-white font-bold">
                  Kalurahan Ngeposari
                </h3>
                <span className="font-mono text-[11px] text-emerald-400">
                  Kapanewon Semanu
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Situs resmi dokumen monografi dan arsip data wilayah Kalurahan
              Ngeposari, Kabupaten Gunungkidul, D.I. Yogyakarta.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="space-y-3 font-mono">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800/80 pb-2">
              Daftar Section
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#perkenalan" className="hover:text-emerald-300">
                  00 Perkenalan Monografi
                </a>
              </li>
              <li>
                <a href="#geografi" className="hover:text-emerald-300">
                  01 Geografi &amp; Wilayah
                </a>
              </li>
              <li>
                <a href="#pemerintahan" className="hover:text-emerald-300">
                  02 Pemerintahan &amp; Padukuhan
                </a>
              </li>
              <li>
                <a href="#demografi" className="hover:text-emerald-300">
                  03 Demografi Penduduk
                </a>
              </li>
              <li>
                <a href="#ekonomi" className="hover:text-emerald-300">
                  04 Potensi Ekonomi
                </a>
              </li>
              <li>
                <a href="#wisata" className="hover:text-emerald-300">
                  05 Ruang Alam &amp; Budaya
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Sumber Data Resmi */}
          <div className="space-y-3 font-mono">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800/80 pb-2">
              Sumber Data
            </h4>
            <div className="space-y-2 text-slate-400 text-xs">
              <p>Buku Monografi Kalurahan (2016)</p>
              <p>Data Kependudukan Dukcapil (2024)</p>
              <p>SK Kalurahan Budaya DIY (2024)</p>
              <p>Catatan Administrasi Semanu</p>
            </div>
          </div>

          {/* Kolom 4: Alamat & Wilayah */}
          <div className="space-y-3 font-mono">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800/80 pb-2">
              Wilayah Administratif
            </h4>
            <div className="space-y-2 text-slate-400 text-xs leading-relaxed">
              <p className="text-white">Kantor Kalurahan Ngeposari</p>
              <p>Kapanewon Semanu, Kabupaten Gunungkidul</p>
              <p>Daerah Istimewa Yogyakarta 55893</p>
              <p className="text-emerald-400 pt-1">
                Kode Kemendagri: 34.03.02.2004
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar Bawah */}
        <div className="mt-12 pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 font-mono text-[11px]">
          <div>
            &copy; 1946–2026 Kalurahan Ngeposari · Seluruh Data Terverifikasi
          </div>
          <div className="tabular">
            Koordinat: 7.99° LS · 110.67° BT · Elevasi ± 800 mdpl
          </div>
        </div>
      </div>
    </footer>
  );
}

