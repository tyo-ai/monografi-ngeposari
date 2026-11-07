import LogoNgeposari from "./LogoNgeposari";
import CapStempel from "./CapStempel";

export default function SidebarPortal() {
  return (
    <aside className="space-y-6">
      {/* Widget 1: Navigasi Cepat Daftar Isi */}
      <div className="bg-white border border-slate-200 shadow-xs overflow-hidden">
        <div className="bg-[#1b3d2b] text-white px-4 py-3 border-b-2 border-[#a9492a] flex items-center justify-between">
          <h3 className="font-mono text-xs uppercase tracking-wider font-bold">
            Navigasi Cepat
          </h3>
          <span className="font-mono text-[10px] text-emerald-300">Monografi</span>
        </div>
        <div className="p-2 font-mono text-xs divide-y divide-slate-100">
          <a
            href="#perkenalan"
            className="flex items-center justify-between py-2.5 px-3 text-slate-700 hover:bg-emerald-50 hover:text-[#1b3d2b] transition-colors"
          >
            <span>00 Perkenalan</span>
            <span className="text-slate-400">→</span>
          </a>
          <a
            href="#geografi"
            className="flex items-center justify-between py-2.5 px-3 text-slate-700 hover:bg-emerald-50 hover:text-[#1b3d2b] transition-colors"
          >
            <span>01 Geografi &amp; Batas</span>
            <span className="text-slate-400">→</span>
          </a>
          <a
            href="#pemerintahan"
            className="flex items-center justify-between py-2.5 px-3 text-slate-700 hover:bg-emerald-50 hover:text-[#1b3d2b] transition-colors"
          >
            <span>02 Pemerintahan &amp; Padukuhan</span>
            <span className="text-slate-400">→</span>
          </a>
          <a
            href="#demografi"
            className="flex items-center justify-between py-2.5 px-3 text-slate-700 hover:bg-emerald-50 hover:text-[#1b3d2b] transition-colors"
          >
            <span>03 Demografi Penduduk</span>
            <span className="text-slate-400">→</span>
          </a>
          <a
            href="#ekonomi"
            className="flex items-center justify-between py-2.5 px-3 text-slate-700 hover:bg-emerald-50 hover:text-[#1b3d2b] transition-colors"
          >
            <span>04 Sentra Ekonomi</span>
            <span className="text-slate-400">→</span>
          </a>
          <a
            href="#wisata"
            className="flex items-center justify-between py-2.5 px-3 text-slate-700 hover:bg-emerald-50 hover:text-[#1b3d2b] transition-colors"
          >
            <span>05 Ruang Alam &amp; Budaya</span>
            <span className="text-slate-400">→</span>
          </a>
        </div>
      </div>

      {/* Widget 2: Pamong Kalurahan & Pelayanan */}
      <div className="bg-white border border-slate-200 shadow-xs overflow-hidden">
        <div className="bg-[#1b3d2b] text-white px-4 py-3 border-b-2 border-[#a9492a]">
          <h3 className="font-mono text-xs uppercase tracking-wider font-bold">
            Pamong Kalurahan
          </h3>
        </div>
        <div className="p-4 space-y-3">
          <div className="border border-slate-200 overflow-hidden">
            <img
              src="/images/balai-kalurahan.jpg"
              alt="Balai Kalurahan Ngeposari"
              className="w-full h-36 object-cover"
            />
          </div>
          <div className="text-center pt-1">
            <h4 className="font-display text-lg text-slate-800 font-bold">
              Pemerintah Kalurahan Ngeposari
            </h4>
            <p className="font-mono text-xs text-slate-500">
              31 Pamong · 19 Padukuhan · 19 RW · 81 RT
            </p>
          </div>
          <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 space-y-1.5 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">Kapanewon:</span>
              <span className="font-medium text-slate-700">Semanu</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Kabupaten:</span>
              <span className="font-medium text-slate-700">Gunungkidul</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Provinsi:</span>
              <span className="font-medium text-slate-700">D.I. Yogyakarta</span>
            </div>
            <div className="flex justify-between border-t border-slate-100 pt-1.5">
              <span className="text-slate-400">Pelayanan:</span>
              <span className="font-medium text-emerald-800">Senin–Jumat 08.00–15.30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Widget 3: Tradisi & Adat Tahunan */}
      <div className="bg-white border border-slate-200 shadow-xs overflow-hidden">
        <div className="bg-[#1b3d2b] text-white px-4 py-3 border-b-2 border-[#a9492a]">
          <h3 className="font-mono text-xs uppercase tracking-wider font-bold">
            Adat &amp; Tradisi Wilayah
          </h3>
        </div>
        <div className="p-4 space-y-3">
          <div className="border border-slate-200 overflow-hidden">
            <img
              src="/images/upacara-rasulan.jpg"
              alt="Tradisi Rasulan Kalurahan Ngeposari"
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-slate-50 border-l-3 border-[#a9492a]">
              <span className="font-mono font-bold text-slate-800 block">
                Upacara Rasulan
              </span>
              <span className="text-slate-500 text-[11px]">
                Upacara adat tahunan bersih desa &amp; sedekah bumi 19 padukuhan.
              </span>
            </div>
            <div className="p-2.5 bg-slate-50 border-l-3 border-[#1b3d2b]">
              <span className="font-mono font-bold text-slate-800 block">
                Cing-cing Goling
              </span>
              <span className="text-slate-500 text-[11px]">
                Selamatan dan pembersihan mata air kali perbukitan.
              </span>
            </div>
            <div className="p-2.5 bg-slate-50 border-l-3 border-emerald-700">
              <span className="font-mono font-bold text-slate-800 block">
                Kampung Hanacaraka
              </span>
              <span className="text-slate-500 text-[11px]">
                Pusat pelestarian dan penulisan aksara Jawa.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Widget 4: Peta Kedudukan Geografis & Elevasi */}
      <div className="bg-white border border-slate-200 shadow-xs overflow-hidden">
        <div className="bg-[#1b3d2b] text-white px-4 py-3 border-b-2 border-[#a9492a]">
          <h3 className="font-mono text-xs uppercase tracking-wider font-bold">
            Kedudukan Geografis
          </h3>
        </div>
        <div className="p-4 space-y-3">
          <div className="border border-slate-200 overflow-hidden">
            <img
              src="/images/geografi-karst.jpg"
              alt="Morfologi karst Semanu"
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="bg-slate-50 p-3 border border-slate-200 text-xs font-mono space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Koordinat:</span>
              <span className="font-semibold text-slate-800 tabular">7.99° LS · 110.67° BT</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-500">Elevasi:</span>
              <span className="font-semibold text-slate-800 tabular">± 800 mdpl</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Tahun Berdiri:</span>
              <span className="font-semibold text-slate-800 tabular">1946</span>
            </div>
          </div>

          <div className="text-xs font-mono space-y-1.5 pt-1">
            <span className="font-bold text-slate-700 block mb-1">Jarak Tempuh:</span>
            <div className="flex justify-between text-slate-600 border-b border-slate-100 py-1">
              <span>Ke Kapanewon Semanu</span>
              <span className="tabular font-semibold">2 km</span>
            </div>
            <div className="flex justify-between text-slate-600 border-b border-slate-100 py-1">
              <span>Ke Wonosari</span>
              <span className="tabular font-semibold">9 km</span>
            </div>
            <div className="flex justify-between text-slate-600 py-1">
              <span>Ke Yogyakarta</span>
              <span className="tabular font-semibold">52 km</span>
            </div>
          </div>
        </div>
      </div>

      {/* Widget 5: Fasilitas Akomodasi Desa Wisata */}
      <div className="bg-white border border-slate-200 shadow-xs overflow-hidden">
        <div className="bg-[#1b3d2b] text-white px-4 py-3 border-b-2 border-[#a9492a]">
          <h3 className="font-mono text-xs uppercase tracking-wider font-bold">
            Akomodasi Kalurahan
          </h3>
        </div>
        <div className="p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-slate-600 font-medium">Homestay Terdaftar:</span>
            <span className="font-mono font-bold text-emerald-800 tabular">6 Unit</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-slate-600 font-medium">Kapasitas Tamu:</span>
            <span className="font-mono font-bold text-slate-800 tabular">40 Orang</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-slate-600 font-medium">Status Wisata:</span>
            <span className="font-mono font-bold text-[#a9492a]">Mandiri Budaya</span>
          </div>
        </div>
      </div>

      {/* Widget 6: Status & Cap Stempel Resmi */}
      <div className="bg-white border border-slate-200 shadow-xs p-4 flex flex-col items-center text-center space-y-3">
        <CapStempel size={110} />
        <div>
          <h4 className="font-display text-base text-slate-800 font-bold">
            Kalurahan Budaya Mandiri
          </h4>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Ditetapkan resmi oleh Pemerintah D.I. Yogyakarta (2024) serta berpredikat Kampung Siaga Bencana.
          </p>
        </div>
      </div>

      {/* Widget 7: Sumber Data Monografi */}
      <div className="bg-white border border-slate-200 shadow-xs overflow-hidden">
        <div className="bg-[#1b3d2b] text-white px-4 py-3 border-b-2 border-[#a9492a]">
          <h3 className="font-mono text-xs uppercase tracking-wider font-bold">
            Sumber Data Dokumen
          </h3>
        </div>
        <div className="p-4 space-y-2 font-mono text-xs text-slate-600">
          <p className="border-b border-slate-100 pb-1.5">
            1. Buku Monografi Kalurahan (2016)
          </p>
          <p className="border-b border-slate-100 pb-1.5">
            2. Data Kependudukan Dukcapil (2024)
          </p>
          <p className="border-b border-slate-100 pb-1.5">
            3. SK Kalurahan Budaya DIY (2024)
          </p>
          <p>
            4. Catatan Kapanewon Semanu
          </p>
        </div>
      </div>
    </aside>
  );
}
