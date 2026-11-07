export interface Padukuhan {
  nomor: string;
  nama: string;
  luasHa: string;
}

export interface DemografiData {
  sumber: string;
  lakiLaki: string;
  perempuan: string;
  total: string;
}

export interface PekerjaanData {
  nama: string;
  jumlah: string;
}

export interface WisataItem {
  nama: string;
  keterangan: string;
}

export const GEOGRAFI_DATA = {
  kapanewon: "Semanu",
  kabupaten: "Gunungkidul",
  provinsi: "D.I. Yogyakarta",
  berdiri: "1946",
  ketinggian: "± 800 mdpl",
  koordinat: "7.99° LS · 110.67° BT",
  batas: {
    utara: "Desa Ngipak (Karangmojo)",
    selatan: "Desa Candirejo (Semanu)",
    barat: "Desa Semanu (Semanu)",
    timur: "Desa Sidorejo (Ponjong)",
  },
  jarak: [
    { tujuan: "Kapanewon Semanu", jarak: "2 km" },
    { tujuan: "Wonosari", jarak: "9 km" },
    { tujuan: "Yogyakarta", jarak: "52 km" },
  ],
};

export const PEMERINTAHAN_DATA = {
  ringkasan: {
    padukuhan: "19",
    pamong: "31",
    rw: "19",
    rt: "81",
    terluas: "Wediutah (189,36 Ha)",
    tersempit: "Kalangbangi Kulon (35,67 Ha)",
  },
  padukuhanList: [
    { nomor: "01", nama: "Tunggaknongko", luasHa: "51,72" },
    { nomor: "02", nama: "Kalangbangi Lor A", luasHa: "79,90" },
    { nomor: "03", nama: "Kalangbangi Lor B", luasHa: "70,87" },
    { nomor: "04", nama: "Kalangbangi Wetan", luasHa: "51,27" },
    { nomor: "05", nama: "Kalangbangi Kulon", luasHa: "35,67" },
    { nomor: "06", nama: "Kangkung A", luasHa: "60,78" },
    { nomor: "07", nama: "Kangkung B", luasHa: "57,43" },
    { nomor: "08", nama: "Ngepos", luasHa: "60,53" },
    { nomor: "09", nama: "Keblak", luasHa: "132,56" },
    { nomor: "10", nama: "Munggur", luasHa: "62,17" },
    { nomor: "11", nama: "Kranggan", luasHa: "72,47" },
    { nomor: "12", nama: "Gunungsari", luasHa: "100,41" },
    { nomor: "13", nama: "Mojo", luasHa: "85,22" },
    { nomor: "14", nama: "Semuluh Lor", luasHa: "66,37" },
    { nomor: "15", nama: "Semuluh Kidul", luasHa: "75,08" },
    { nomor: "16", nama: "Ngaglik", luasHa: "58,66" },
    { nomor: "17", nama: "Jragum", luasHa: "71,07" },
    { nomor: "18", nama: "Wediutah", luasHa: "189,36" },
    { nomor: "19", nama: "Gemulung", luasHa: "54,17" },
  ] as Padukuhan[],
};

export const DEMOGRAFI_DATA = {
  populasi: [
    { sumber: "Monografi 2016", lakiLaki: "5.183", perempuan: "5.130", total: "10.313" },
    { sumber: "Dukcapil 2024", lakiLaki: "—", perempuan: "—", total: "10.433" },
  ] as DemografiData[],
  mataPencaharian2016: [
    { nama: "Petani", jumlah: "3.023" },
    { nama: "Buruh tani", jumlah: "545" },
    { nama: "Pengrajin", jumlah: "143" },
    { nama: "PNS", jumlah: "101" },
    { nama: "TNI/Polri", jumlah: "17" },
    { nama: "Wiraswasta", jumlah: "18" },
  ] as PekerjaanData[],
};

export const EKONOMI_DATA = {
  sentra: [
    {
      judul: "Bakpia",
      lokasi: "Kalangbangi Lor A & B",
      keterangan: "Dibuat setiap pagi di tungku rumahan dan dipasarkan siang hari.",
    },
    {
      judul: "Anyaman",
      lokasi: "Turun-temurun",
      keterangan: "Bambu dianyam menjadi keranjang, tampah, dan perabot rumah tangga.",
    },
    {
      judul: "Batu Alam",
      lokasi: "Padukuhan Mojo",
      keterangan: "Sentra pemahatan dan kerajinan ornamen batu alam khas perbukitan karst.",
    },
  ],
};

export const WISATA_DATA = {
  alam: [
    {
      nama: "Kali Ngereneng",
      keterangan: "Mata air perbukitan Wediutah",
    },
    {
      nama: "Embung & Goa Jlamprong",
      keterangan: "Semuluh Lor, Mojo",
    },
    {
      nama: "Goa Sinden, Gesing, Jlamprong",
      keterangan: "Desa Wisata Mojo",
    },
    {
      nama: "Agrowisata",
      keterangan: "Wisata agro dan edukasi",
    },
  ] as WisataItem[],
  budaya: [
    {
      nama: "Kampung Hanacaraka",
      keterangan: "Pelestarian aksara Jawa",
    },
    {
      nama: "Rasulan",
      keterangan: "Upacara adat tahunan",
    },
    {
      nama: "Cing-cing Goling",
      keterangan: "Selamatan & bersih kali",
    },
    {
      nama: "Terbangan & Hadroh",
      keterangan: "Kesenian Dzikir Maulud",
    },
  ] as WisataItem[],
  catatanPenutup:
    "Ditetapkan Kalurahan Budaya (2024) dan Desa Wisata Mandiri Budaya. Tersedia 6 homestay kapasitas 40 orang.",
};

