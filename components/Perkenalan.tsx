"use client";

import Section from "./Section";
import ClickablePhoto from "./ClickablePhoto";

export default function Perkenalan() {
  return (
    <Section
      id="perkenalan"
      number="00"
      title="Perkenalan"
      subtitle="Pengantar Monografi"
    >
      <div className="space-y-8">
        {/* Baris Atas: Teks + Foto Bentang Alam */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Teks Naskah Asli Monografi */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              <span className="float-left font-display text-[4.2rem] leading-[0.82] text-[#A9492A] pr-3 mr-1 select-none font-bold">
                K
              </span>
              alurahan Ngeposari berdiri di ujung barat Kapanewon Semanu, pada
              ketinggian delapan ratus meter di atas permukaan laut. Tanahnya
              berkapur, airnya tersimpan jauh di bawah, dan hujan hanya datang
              beberapa bulan dalam setahun. Sejak 1946, sembilan belas padukuhan
              tumbuh di atas medan ini dengan cara yang sama: menanam apa yang bisa
              tumbuh, membuat apa yang bisa dijual, dan merawat mata air yang tak
              pernah kering.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              Di Padukuhan Kalangbangi Lor, hampir setiap rumah punya tungku dan
              loyang yang sama. Bakpia dibuat pagi, dijual siang, dan resepnya
              diwariskan tanpa catatan. Di Mojo, warga memahat batu alam; di tempat
              lain, bambu dianyam menjadi keranjang dan tampah. Pendapatan dari
              tanah dan dari tangan berjalan berdampingan — sebuah ekonomi yang
              tidak pernah sepenuhnya bergantung pada satu musim.
            </p>

            <blockquote className="border-l-4 border-[#1b3d2b] pl-5 my-4 font-display italic text-lg md:text-xl text-[#1b3d2b] bg-emerald-50/70 py-3.5 pr-4 leading-relaxed">
              &ldquo;Dua gelar dalam satu tahun — Kalurahan Budaya dan Kampung
              Siaga Bencana — keduanya berbicara tentang hal yang sama: wilayah
              yang tahu betul di mana ia berdiri.&rdquo;
            </blockquote>

            <div className="pt-3 border-t border-slate-200 font-mono text-xs uppercase tracking-wider text-slate-400">
              Ngeposari · Semanu · Gunungkidul
            </div>
          </div>

          {/* Kolom Kanan: Pelat Foto & Ringkasan Identitas */}
          <div className="lg:col-span-5 space-y-4">
            <ClickablePhoto
              index={0}
              src="/images/bentang-alam.jpg"
              alt="Bentang alam perbukitan karst dan lahan ladang di Kalurahan Ngeposari"
              plate="Pl. 00"
              captionTitle="Bentang Karst & Lahan Ladang"
              captionRight="Elevasi ± 800 mdpl"
              maxHeight="max-h-[300px]"
            />

            <div className="p-4 bg-slate-50 border border-slate-200 text-xs font-mono space-y-2">
              <span className="font-bold text-[#1b3d2b] uppercase tracking-wider block border-b border-slate-200 pb-1.5">
                Identitas Monografi
              </span>
              <div className="flex justify-between text-slate-600">
                <span>Status Wilayah:</span>
                <span className="font-bold text-emerald-800">Kalurahan Budaya DIY</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Kesiapsiagaan:</span>
                <span className="font-bold text-amber-800">Kampung Siaga Bencana</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Tahun Pembentukan:</span>
                <span className="font-bold text-slate-800 tabular">1946</span>
              </div>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Foto Gapura Padukuhan — full-width, sebagai penutup visual perkenalan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-t border-slate-100 pt-6">
          <div className="lg:col-span-8">
            <ClickablePhoto
              index={7}
              src="/images/kangkung-a.jpg"
              alt="Gapura masuk Padukuhan Kangkung A, Kalurahan Ngeposari"
              plate="Pl. 07"
              captionTitle="Gapura Padukuhan Kangkung A"
              captionRight="Luas ± 60,78 Ha"
              maxHeight="max-h-[320px]"
            />
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center space-y-3 py-2">
            <p className="text-sm leading-relaxed text-slate-600">
              Seperti delapan belas padukuhan lainnya, Kangkung A memiliki gapura
              masuk yang menjadi tanda batas wilayah sekaligus penanda identitas
              warganya. Gapura-gapura ini berdiri di tepi jalan utama — sederhana,
              namun kokoh seperti masyarakat yang membangunnya.
            </p>
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider border-t border-slate-100 pt-3">
              19 Padukuhan · 1 Kalurahan
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
