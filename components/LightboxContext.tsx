"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import PhotoLightbox, { GalleryPhoto } from "./PhotoLightbox";

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/bentang-alam.jpg",
    alt: "Bentang Alam Karst",
    title: "Bentang Perbukitan Karst & Lahan Terasering",
    plate: "Pl. 00",
    desc: "Lanskap perbukitan kapur karst dan lahan tadah hujan Semanu pada ketinggian ± 800 mdpl.",
  },
  {
    src: "/images/geografi-karst.jpg",
    alt: "Topografi Semanu",
    title: "Morfologi Karst & Lembah Pertanian Semanu",
    plate: "Pl. 01",
    desc: "Kedudukan wilayah Kalurahan Ngeposari pada koordinat 7.99° LS · 110.67° BT.",
  },
  {
    src: "/images/balai-kalurahan.jpg",
    alt: "Balai Kalurahan",
    title: "Kompleks Balai Kalurahan & Kantor Pamong",
    plate: "Pl. 02",
    desc: "Pusat pelayanan administrasi 31 pamong dan musyawarah 19 padukuhan berarsitektur Joglo.",
  },
  {
    src: "/images/demografi-petani.jpg",
    alt: "Warga Petani",
    title: "Kehidupan Warga Petani Ladang Karst",
    plate: "Pl. 03",
    desc: "Potret warga petani yang menopang 3.568 jiwa mata pencaharian pertanian kalurahan.",
  },
  {
    src: "/images/kerajinan-batu.jpg",
    alt: "Sentra Batu Alam",
    title: "Sentra Pemahatan Batu Alam · Padukuhan Mojo",
    plate: "Pl. 04",
    desc: "Pengrajin memahat batu paras putih menjadi relief arsitektur dan ornamen dinding.",
  },
  {
    src: "/images/goa-karst.jpg",
    alt: "Goa Karst Semanu",
    title: "Lorong Goa Karst Bawah Tanah & Mata Air Alami",
    plate: "Pl. 05",
    desc: "Karakteristik perbukitan karst dengan lorong goa alam serta mata air Kali Ngereneng.",
  },
  {
    src: "/images/upacara-rasulan.jpg",
    alt: "Tradisi Rasulan",
    title: "Kirab Gunungan Hasil Bumi Tradisi Rasulan",
    plate: "Pl. 06",
    desc: "Warga berpakaian adat Jawa mengarak gunungan hasil bumi dalam prosesi bersih desa tahunan.",
  },
  {
    src: "/images/kangkung-a.jpg",
    alt: "Gapura Padukuhan Kangkung A",
    title: "Gapura Masuk Padukuhan Kangkung A",
    plate: "Pl. 07",
    desc: "Salah satu dari 19 gapura padukuhan Kalurahan Ngeposari — Kangkung A berdiri di tepi jalan utama, menandai wilayah seluas 60,78 hektare.",
  },
];

interface LightboxContextType {
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  currentIndex: number | null;
}

const LightboxContext = createContext<LightboxContextType>({
  openLightbox: () => {},
  closeLightbox: () => {},
  currentIndex: null,
});

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox, currentIndex }}>
      {children}
      <PhotoLightbox
        photos={GALLERY_PHOTOS}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onSelectIndex={(idx) => setCurrentIndex(idx)}
      />
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  return useContext(LightboxContext);
}

