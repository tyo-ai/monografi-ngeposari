"use client";

import Section from "./Section";
import { useLightbox } from "./LightboxContext";

export default function Ekonomi() {
  const { openLightbox } = useLightbox();
  return (
    <Section
      id="ekonomi"
      number="04"
      title="Ekonomi"
      subtitle="Penghidupan & Sentra Kerajinan"
    >
      <div className="space-y-8">
        <div className="space-y-4 max-w-3xl">
          <p className="text-base md:text-lg leading-relaxed text-slate-700">
            Tanah karst yang kering membentuk watak kerja warga Ngeposari. Di
            ladang, warga menanam jagung, kedelai, dan ketela saat hujan tiba.
            Ketika kemarau panjang datang, tumpuan hidup berpindah ke bengkel
            pahat, anyaman bambu, dan dapur olahan pangan rumahan.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-slate-700">
            Keterampilan mengolah bahan baku hidup lewat kebiasaan sehari-hari.
            Warga membuat perlengkapan harian sekaligus ornamen pesanan luar
            daerah. Tiga sentra utama menopang perputaran nafkah di padukuhan
            sepanjang tahun.
          </p>
        </div>

        {/* Pelat Foto Dokumenter: Pengrajin Batu Alam */}
        <figure className="border border-slate-200 bg-slate-50 p-3.5 rounded-2xl shadow-xs hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div
              className="md:col-span-7 relative overflow-hidden rounded-xl cursor-pointer group bg-slate-900"
              onClick={() => openLightbox(4)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(4);
                }
              }}
              title="Klik untuk memperbesar & melihat galeri slide"
            >
              <img
                src="/images/kerajinan-batu.jpg"
                alt="Pengrajin memahat ornamen batu alam di Padukuhan Mojo"
                className="w-full h-auto max-h-[340px] object-cover block rounded-xl group-hover:scale-105 group-hover:opacity-90 transition-all duration-300 pointer-events-none"
              />
              <div className="absolute inset-0 rounded-xl bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold pointer-events-none">
                <span className="bg-[#1b3d2b]/90 border border-emerald-400 px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 text-emerald-100">
                  <span>⤢</span> Perbesar &amp; Slide Galeri
                </span>
              </div>
            </div>
            <div className="md:col-span-5 px-1 py-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#a9492a] font-bold block mb-1">
                Pelat Dokumentasi Lapangan
              </span>
              <h4 className="font-display text-xl text-slate-800 font-bold">
                Pemahatan Batu Paras Putih
              </h4>
              <p className="font-mono text-xs text-slate-500 mt-1 mb-3">
                Padukuhan Mojo · Kapanewon Semanu
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pekerja merampungkan ukiran ornamen floral dan relief dinding
                secara manual menggunakan tatah pahat tradisional di pelataran
                bengkel padukuhan.
              </p>
            </div>
          </div>
          <figcaption className="pt-2 px-1 font-mono text-[11px] uppercase tracking-wider text-[#1b3d2b] font-bold border-t border-slate-200 mt-2">
            Pl. 04 — Sentra Pemahatan Batu Alam · Padukuhan Mojo
          </figcaption>
        </figure>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#1b3d2b] font-bold mb-3 pb-1 border-b border-slate-200">
            Tiga Sentra Produksi Utama
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 shadow-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#a9492a] font-bold block">
                Sentra Pangan
              </span>
              <h4 className="font-display text-lg text-slate-800 font-bold">
                Bakpia
              </h4>
              <p className="font-mono text-xs text-slate-500">
                Kalangbangi Lor A &amp; B
              </p>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                Tungku rumahan memanggang bakpia sejak pagi hari untuk dijual ke
                jaringan pasar sekitarnya.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 shadow-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#a9492a] font-bold block">
                Sentra Serat
              </span>
              <h4 className="font-display text-lg text-slate-800 font-bold">
                Anyaman
              </h4>
              <p className="font-mono text-xs text-slate-500">
                Bambu turun-temurun
              </p>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                Bilah bambu diraut dan dianyam rapi menjadi keranjang, tampah,
                serta wadah hasil panen.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 shadow-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#a9492a] font-bold block">
                Sentra Kriya Karst
              </span>
              <h4 className="font-display text-lg text-slate-800 font-bold">
                Batu Alam
              </h4>
              <p className="font-mono text-xs text-slate-500">
                Padukuhan Mojo
              </p>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                Warga memahat bongkahan batu alam menjadi relief dinding, ornamen
                taman, dan hiasan bangunan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
