"use client";

import { LightboxProvider } from "@/components/LightboxContext";
import HeaderPortal from "@/components/HeaderPortal";
import NavbarPortal from "@/components/NavbarPortal";
import StatCardsPortal from "@/components/StatCardsPortal";
import Perkenalan from "@/components/Perkenalan";
import Geografi from "@/components/Geografi";
import Pemerintahan from "@/components/Pemerintahan";
import Demografi from "@/components/Demografi";
import Ekonomi from "@/components/Ekonomi";
import Wisata from "@/components/Wisata";
import InformasiWilayahPortal from "@/components/InformasiWilayahPortal";
import FooterPortal from "@/components/FooterPortal";

export default function Home() {
  return (
    <LightboxProvider>
      <div id="top" className="min-h-screen bg-slate-100 text-slate-800 flex flex-col font-sans">
        {/* 1. Header Portal Desa (Banner & Galeri Foto Mini) */}
        <HeaderPortal />

        {/* 2. Sticky Navigation Bar (Tetap diam di atas saat discroll) */}
        <NavbarPortal />

        {/* 3. Konten Utama Monografi */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* 4 Widget Statistik Utama */}
          <StatCardsPortal />

          {/* Section 00: Perkenalan */}
          <Perkenalan />

          {/* Section 01: Geografi & Wilayah */}
          <Geografi />

          {/* Section 02: Pemerintahan & Padukuhan */}
          <Pemerintahan />

          {/* Section 03: Demografi Penduduk */}
          <Demografi />

          {/* Section 04: Sentra Ekonomi */}
          <Ekonomi />

          {/* Section 05: Ruang Alam & Budaya */}
          <Wisata />

          {/* Layanan & Warta Wilayah */}
          <InformasiWilayahPortal />
        </main>

        {/* 4. Footer Portal Kalurahan */}
        <FooterPortal />
      </div>
    </LightboxProvider>
  );
}
