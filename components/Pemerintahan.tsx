import Section from "./Section";
import Row from "./Row";
import CapStempel from "./CapStempel";
import ClickablePhoto from "./ClickablePhoto";
import { PEMERINTAHAN_DATA } from "@/app/data";

export default function Pemerintahan() {
  const { ringkasan, padukuhanList } = PEMERINTAHAN_DATA;

  return (
    <Section
      id="pemerintahan"
      number="02"
      title="Pemerintahan"
      subtitle="Struktur Pamong & Padukuhan"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: Foto Balai Kalurahan & Struktur Pamong */}
        <div className="lg:col-span-5 space-y-6">
          <ClickablePhoto
            index={2}
            src="/images/balai-kalurahan.jpg"
            alt="Kompleks Balai Kalurahan berarsitektur Joglo tradisional"
            plate="Pl. 02"
            captionTitle="Balai Kalurahan & Kantor Pamong"
            captionRight="19 Padukuhan"
            maxHeight="max-h-[300px]"
          />

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#1b3d2b] font-bold mb-2 pb-1 border-b border-slate-200">
              Struktur Administratif
            </h3>
            <dl className="border-t border-slate-200 bg-slate-50/50">
              <Row label="Padukuhan" value={ringkasan.padukuhan} mono />
              <Row label="Pamong" value={ringkasan.pamong} mono />
              <Row label="Rukun Warga (RW)" value={ringkasan.rw} mono />
              <Row label="Rukun Tetangga (RT)" value={ringkasan.rt} mono />
              <Row label="Terluas" value={ringkasan.terluas} />
              <Row label="Tersempit" value={ringkasan.tersempit} />
            </dl>
          </div>

          {/* Box Cap Resmi & Jam Pelayanan */}
          <div className="p-4 bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
            <div className="space-y-1 font-mono text-xs">
              <span className="text-[#1b3d2b] font-bold uppercase block">
                Jam Pelayanan Pamong
              </span>
              <p className="text-slate-600">Senin – Jumat: 08.00 – 15.30 WIB</p>
              <p className="text-slate-400 text-[11px]">Pelayanan Warga Kalurahan</p>
            </div>
            <CapStempel size={72} />
          </div>
        </div>

        {/* Kolom Kanan: Daftar Sembilan Belas Padukuhan */}
        <div className="lg:col-span-7">
          <div className="flex items-baseline justify-between border-b-2 border-[#1b3d2b] pb-2 mb-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#1b3d2b] font-bold">
              Daftar Sembilan Belas Padukuhan
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold">
              Luas (Ha)
            </span>
          </div>

          <ol className="border border-slate-200 bg-white">
            {padukuhanList.map((p, idx) => {
              const isEven = idx % 2 === 0;
              const isMax = p.nama.includes("Wediutah");
              const isMin = p.nama.includes("Kulon");
              return (
                <li
                  key={p.nomor}
                  className={`py-2 px-3 flex items-baseline justify-between border-b border-slate-100 ${
                    isEven ? "bg-slate-50/70" : "bg-white"
                  } hover:bg-emerald-50/60 transition-colors duration-150`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-slate-400 tabular w-6">
                      {p.nomor}
                    </span>
                    <span className="text-sm sm:text-base text-slate-800 font-medium">
                      {p.nama}
                    </span>
                    {isMax && (
                      <span className="font-mono text-[10px] uppercase text-[#a9492a] bg-orange-100 px-1.5 py-0.5 font-bold">
                        Terluas
                      </span>
                    )}
                    {isMin && (
                      <span className="font-mono text-[10px] uppercase text-slate-600 bg-slate-200 px-1.5 py-0.5 font-bold">
                        Tersempit
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-sm sm:text-base text-slate-800 tabular text-right font-bold">
                    {p.luasHa}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
