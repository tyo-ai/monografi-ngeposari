"use client";

import Section from "./Section";
import ClickablePhoto from "./ClickablePhoto";
import { WISATA_DATA } from "@/app/data";

export default function Wisata() {
  const { alam, budaya, catatanPenutup } = WISATA_DATA;

  return (
    <Section
      id="wisata"
      number="05"
      title="Wisata"
      subtitle="Ruang Alam & Adat Tradisi"
    >
      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kolom 1: Alam */}
          <div className="flex flex-col justify-between space-y-6 bg-slate-50 p-4 border border-slate-200">
            <div>
              <div className="border-b-2 border-[#1b3d2b] pb-2 mb-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#1b3d2b] font-bold">
                  Bentang Alam &amp; Goa Karst
                </h3>
              </div>
              <ul className="divide-y divide-slate-200">
                {alam.map((item, idx) => (
                  <li key={idx} className="py-2.5">
                    <div className="font-display text-base text-slate-800 font-bold">
                      {item.nama}
                    </div>
                    <div className="font-mono text-xs text-slate-500 mt-0.5">
                      {item.keterangan}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pelat Foto: Kawasan Goa Karst */}
            <ClickablePhoto
              index={5}
              src="/images/goa-karst.jpg"
              alt="Lorong goa karst bawah tanah dan aliran air alami di Semanu"
              plate="Pl. 05"
              captionTitle="Lorong Goa Karst Bawah Tanah & Mata Air Alami"
              maxHeight="max-h-[260px]"
            />
          </div>

          {/* Kolom 2: Budaya */}
          <div className="flex flex-col justify-between space-y-6 bg-slate-50 p-4 border border-slate-200">
            <div>
              <div className="border-b-2 border-[#1b3d2b] pb-2 mb-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#1b3d2b] font-bold">
                  Adat &amp; Warisan Budaya
                </h3>
              </div>
              <ul className="divide-y divide-slate-200">
                {budaya.map((item, idx) => (
                  <li key={idx} className="py-2.5">
                    <div className="font-display text-base text-slate-800 font-bold">
                      {item.nama}
                    </div>
                    <div className="font-mono text-xs text-slate-500 mt-0.5">
                      {item.keterangan}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pelat Foto: Upacara Rasulan */}
            <ClickablePhoto
              index={6}
              src="/images/upacara-rasulan.jpg"
              alt="Warga membawa arak-arakan gunungan hasil bumi dalam tradisi Rasulan"
              plate="Pl. 06"
              captionTitle="Kirab Gunungan Hasil Bumi Tradisi Rasulan"
              maxHeight="max-h-[260px]"
            />
          </div>
        </div>

        {/* Catatan Penutup */}
        <div className="p-4 bg-emerald-50/70 border-l-4 border-[#1b3d2b] shadow-xs">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#1b3d2b] font-bold block mb-1">
            Catatan Wilayah
          </span>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
            {catatanPenutup}
          </p>
        </div>
      </div>
    </Section>
  );
}
