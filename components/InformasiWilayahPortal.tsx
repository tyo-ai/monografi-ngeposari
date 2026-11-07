import CapStempel from "./CapStempel";

export default function InformasiWilayahPortal() {
  return (
    <section className="bg-white border border-slate-200 shadow-xs mb-8 overflow-hidden rounded-2xl">
      <div className="bg-[#1b3d2b] text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-[#a9492a]">
        <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
          Layanan &amp; Warta Kalurahan Ngeposari
        </h2>
        <span className="font-mono text-xs text-emerald-200 uppercase tracking-wider">
          Informasi Wilayah
        </span>
      </div>

      <div className="p-5 sm:p-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Pamong & Pelayanan */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#1b3d2b] font-bold block mb-1">
                Aparatur Pamong
              </span>
              <h3 className="font-display text-base font-bold text-slate-800">
                Pemerintah Kalurahan
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                31 Pamong melayani 19 padukuhan, 19 RW, dan 81 RT di Kapanewon Semanu.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200 text-xs font-mono text-emerald-800 font-semibold">
              Senin–Jumat: 08.00–15.30 WIB
            </div>
          </div>

          {/* Card 2: Tradisi & Budaya */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#a9492a] font-bold block mb-1">
                Adat Tradisi
              </span>
              <h3 className="font-display text-base font-bold text-slate-800">
                Upacara Adat Tahunan
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Rasulan, selamatan Cing-cing Goling, dan pembinaan aksara Jawa di Kampung Hanacaraka.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200 text-xs font-mono text-slate-500 font-medium">
              Pelestarian Budaya Jawa
            </div>
          </div>

          {/* Card 3: Akomodasi Wisata */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#1b3d2b] font-bold block mb-1">
                Fasilitas Wilayah
              </span>
              <h3 className="font-display text-base font-bold text-slate-800">
                Homestay Wisata
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Tersedia 6 homestay berkapasitas 40 tamu untuk kunjungan riset dan wisata budaya.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200 text-xs font-mono text-slate-700 font-bold tabular">
              Status: Mandiri Budaya
            </div>
          </div>

          {/* Card 4: Cap Stempel Resmi */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-2 hover:shadow-xs transition-shadow">
            <CapStempel size={84} />
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Dokumen Monografi Resmi 1946
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

