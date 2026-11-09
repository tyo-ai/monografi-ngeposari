"use client";

import Section from "./Section";
import Row from "./Row";
import ClickablePhoto from "./ClickablePhoto";
import { GEOGRAFI_DATA } from "@/app/data";

export default function Geografi() {
  return (
    <Section
      id="geografi"
      number="01"
      title="Geografi"
      subtitle="Kedudukan & Batas Wilayah"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: Foto Morfologi Karst & Jarak Tempuh */}
        <div className="lg:col-span-6 space-y-6">
          <ClickablePhoto
            index={1}
            src="/images/geografi-karst.jpg"
            alt="Morfologi bentang alam perbukitan karst dan lembah pertanian Semanu"
            plate="Pl. 01"
            captionTitle="Morfologi Perbukitan Karst & Lembah Pertanian"
            captionRight="7.99° LS · 110.67° BT"
            maxHeight="max-h-[320px]"
          />

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#1b3d2b] font-bold mb-2 pb-1 border-b border-slate-200">
              Jarak Tempuh ke Pusat Wilayah
            </h3>
            <dl className="border-t border-slate-200 bg-slate-50/50">
              {GEOGRAFI_DATA.jarak.map((item, idx) => (
                <Row
                  key={idx}
                  label={`Ke ${item.tujuan}`}
                  value={item.jarak}
                  mono
                />
              ))}
            </dl>
          </div>
        </div>

        {/* Kolom Kanan: Administrasi & Batas Wilayah */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#1b3d2b] font-bold mb-2 pb-1 border-b border-slate-200">
              Administrasi &amp; Elevasi Wilayah
            </h3>
            <dl className="border-t border-slate-200 bg-slate-50/50">
              <Row label="Kapanewon" value={GEOGRAFI_DATA.kapanewon} />
              <Row label="Kabupaten" value={GEOGRAFI_DATA.kabupaten} />
              <Row label="Provinsi" value={GEOGRAFI_DATA.provinsi} />
              <Row label="Tahun Berdiri" value={GEOGRAFI_DATA.berdiri} mono />
              <Row label="Ketinggian" value={GEOGRAFI_DATA.ketinggian} mono />
              <Row label="Koordinat" value={GEOGRAFI_DATA.koordinat} mono />
            </dl>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#1b3d2b] font-bold mb-2 pb-1 border-b border-slate-200">
              Batas Wilayah
            </h3>
            <dl className="border-t border-slate-200 bg-slate-50/50">
              <Row label="Batas Utara" value={GEOGRAFI_DATA.batas.utara} />
              <Row label="Batas Selatan" value={GEOGRAFI_DATA.batas.selatan} />
              <Row label="Batas Barat" value={GEOGRAFI_DATA.batas.barat} />
              <Row label="Batas Timur" value={GEOGRAFI_DATA.batas.timur} />
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
