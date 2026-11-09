"use client";

import Section from "./Section";
import Row from "./Row";
import ClickablePhoto from "./ClickablePhoto";
import { DEMOGRAFI_DATA } from "@/app/data";

export default function Demografi() {
  const { populasi, mataPencaharian2016 } = DEMOGRAFI_DATA;

  return (
    <Section
      id="demografi"
      number="03"
      title="Demografi"
      subtitle="Kependudukan & Pekerjaan"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: Foto Petani Karst & Tabel Kependudukan */}
        <div className="lg:col-span-6 space-y-6">
          <ClickablePhoto
            index={3}
            src="/images/demografi-petani.jpg"
            alt="Warga petani di kawasan lahan tadah hujan perbukitan karst"
            plate="Pl. 03"
            captionTitle="Kehidupan Warga Petani Ladang Karst"
            captionRight="Mata Pencaharian Utama"
            maxHeight="max-h-[300px]"
          />

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#1b3d2b] font-bold mb-2 pb-1 border-b border-slate-200">
              Catatan Penduduk (Tabel Kependudukan)
            </h3>
            <div className="overflow-x-auto border border-slate-200 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#1b3d2b] bg-slate-100">
                    <th className="font-mono text-xs uppercase tracking-wider text-slate-700 py-2.5 px-3">
                      Sumber
                    </th>
                    <th className="font-mono text-xs uppercase tracking-wider text-slate-700 py-2.5 px-3 text-right">
                      L
                    </th>
                    <th className="font-mono text-xs uppercase tracking-wider text-slate-700 py-2.5 px-3 text-right">
                      P
                    </th>
                    <th className="font-mono text-xs uppercase tracking-wider text-slate-700 py-2.5 px-3 text-right">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {populasi.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`hover:bg-emerald-50/40 transition-colors ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                      }`}
                    >
                      <td className="py-2.5 px-3 text-sm text-slate-800 font-medium">
                        {row.sumber}
                      </td>
                      <td className="py-2.5 px-3 text-sm font-mono tabular text-right text-slate-700">
                        {row.lakiLaki}
                      </td>
                      <td className="py-2.5 px-3 text-sm font-mono tabular text-right text-slate-700">
                        {row.perempuan}
                      </td>
                      <td className="py-2.5 px-3 text-sm font-mono tabular text-right font-bold text-[#a9492a]">
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Rincian Mata Pencaharian */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-baseline justify-between border-b-2 border-[#1b3d2b] pb-2 mb-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#1b3d2b] font-bold">
              Mata Pencaharian (Monografi 2016)
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold">
              Jiwa
            </span>
          </div>

          <dl className="border-t border-slate-200 bg-slate-50/50">
            {mataPencaharian2016.map((item, idx) => (
              <Row
                key={idx}
                label={item.nama}
                value={item.jumlah}
                mono
              />
            ))}
          </dl>

          <div className="p-3 bg-emerald-50/60 border border-emerald-200 text-xs text-slate-600 font-mono">
            <span className="font-bold text-[#1b3d2b] block mb-1">
              Catatan Ketenagakerjaan:
            </span>
            Sektor agraris (petani dan buruh tani) mencakup 3.568 jiwa dari total
            tenaga kerja tercatat di monografi wilayah.
          </div>
        </div>
      </div>
    </Section>
  );
}
