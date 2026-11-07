interface LogoProps {
  className?: string;
  size?: number;
}

export default function LogoNgeposari({ className = "", size = 48 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lambang Kalurahan Ngeposari"
    >
      {/* Perisai Segi Lima Luar */}
      <path
        d="M50 4 L94 22 L82 92 L50 116 L18 92 L6 22 Z"
        fill="#2C4A3B"
        stroke="#1A1A18"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      
      {/* Garis Ganda Emas/Kuning Gading Dalam */}
      <path
        d="M50 10 L88 26 L78 88 L50 110 L22 88 L12 26 Z"
        fill="#F4EFE6"
        stroke="#A9492A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Siluet Gunung Karst Sewu */}
      <path
        d="M24 78 Q38 52 50 64 Q62 50 76 78 Z"
        fill="#EAE3D3"
        stroke="#2C4A3B"
        strokeWidth="1"
      />

      {/* Aliran Sungai / Mata Air Bawah Tanah */}
      <path
        d="M26 84 C38 82 44 86 50 84 C56 82 62 86 74 84"
        stroke="#2C4A3B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Keris Pusaka Jawa di Tengah */}
      <path
        d="M48 34 L50 24 L52 34 L51 72 L49 72 Z"
        fill="#1A1A18"
      />
      <circle cx="50" cy="74" r="2.5" fill="#A9492A" />

      {/* Bintang Emas Terakota */}
      <polygon
        points="50,15 52,20 57,20 53,23 55,28 50,25 45,28 47,23 43,20 48,20"
        fill="#A9492A"
      />

      {/* Untaian Padi dan Kapas Kiri Kanan */}
      <path
        d="M28 66 C26 50 32 38 42 30"
        stroke="#2C4A3B"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        fill="none"
      />
      <path
        d="M72 66 C74 50 68 38 58 30"
        stroke="#2C4A3B"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        fill="none"
      />

      {/* Pita Bawah: NGEPOSARI */}
      <path
        d="M20 96 L50 92 L80 96 L76 104 L50 100 L24 104 Z"
        fill="#A9492A"
        stroke="#1A1A18"
        strokeWidth="1"
      />
      <text
        x="50"
        y="99"
        textAnchor="middle"
        fill="#F4EFE6"
        fontSize="5.5"
        fontWeight="bold"
        fontFamily="monospace"
        letterSpacing="0.8"
      >
        NGEPOSARI
      </text>

      {/* Teks Atas Busur: DHAKSINARGA */}
      <text
        x="50"
        y="21"
        textAnchor="middle"
        fill="#2C4A3B"
        fontSize="3.8"
        fontWeight="600"
        fontFamily="monospace"
        letterSpacing="0.4"
      >
        DHAKSINARGA
      </text>
    </svg>
  );
}

