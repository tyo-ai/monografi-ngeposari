"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import PhotoLightbox, { GalleryPhoto } from "./PhotoLightbox";

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/kangkung-a.jpg",
    alt: "Gapura Masuk Padukuhan Kangkung A",
    title: "Gerbang Masuk Padukuhan Kangkung A",
    plate: "Pl. 00",
    desc: "Gerbang identitas batas wilayah Padukuhan Kangkung A dengan ornamen khas dan pondasi susunan batu kali karst di tepi jalan penghubung padukuhan.",
  },
  {
    src: "/images/peta-ngeposari.jpg",
    alt: "Peta Wilayah Kalurahan Ngeposari Skala 1:18.000",
    title: "Peta Batas Administrasi & Tata Ruang Padukuhan",
    plate: "Pl. 01",
    desc: "Peta kartografi resmi wilayah Kalurahan Ngeposari skala 1:18.000 memuat tata batas 19 padukuhan, persebaran sumber mata air, telaga, dan goa karst.",
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

