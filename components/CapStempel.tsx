interface CapStempelProps {
  className?: string;
  size?: number;
}

export default function CapStempel({ className = "", size = 110 }: CapStempelProps) {
  return (
    <div
      className={`inline-block select-none rotate-[-5deg] ${className}`}
      style={{ width: size, height: size }}
      aria-label="Cap Stempel Resmi Kalurahan Ngeposari"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#A9492A] opacity-85"
      >
        {/* Lingkaran Luar Ganda Bertekstur Stempel */}
        <circle
          cx="60"
          cy="60"
          r="56"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="180 2"
        />
        <circle
          cx="60"
          cy="60"
          r="51"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        {/* Lingkaran Dalam */}
        <circle
          cx="60"
          cy="60"
          r="34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Teks Melingkar Atas */}
        <path
          id="textPathTop"
          d="M 18,60 A 42,42 0 1,1 102,60"
          fill="none"
        />
        <text
          fontSize="7"
          fontWeight="bold"
          fontFamily="monospace"
          fill="currentColor"
          letterSpacing="1.2"
        >
          <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
            KALURAHAN NGEPOSARI
          </textPath>
        </text>

        {/* Teks Melingkar Bawah */}
        <path
          id="textPathBottom"
          d="M 102,60 A 42,42 0 0,1 18,60"
          fill="none"
        />
        <text
          fontSize="6.5"
          fontWeight="bold"
          fontFamily="monospace"
          fill="currentColor"
          letterSpacing="1.2"
        >
          <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
            SEMANU · GUNUNGKIDUL
          </textPath>
        </text>

        {/* Bintang Pembatas Kiri Kanan */}
        <text x="14" y="62" fontSize="6" fill="currentColor">★</text>
        <text x="100" y="62" fontSize="6" fill="currentColor">★</text>

        {/* Teks Tengah Stempel */}
        <text
          x="60"
          y="55"
          textAnchor="middle"
          fontSize="8"
          fontWeight="bold"
          fontFamily="monospace"
          fill="currentColor"
          letterSpacing="0.8"
        >
          MONOGRAFI
        </text>
        <line x1="38" y1="59" x2="82" y2="59" stroke="currentColor" strokeWidth="1" />
        <text
          x="60"
          y="68"
          textAnchor="middle"
          fontSize="7"
          fontWeight="bold"
          fontFamily="monospace"
          fill="currentColor"
          letterSpacing="1"
        >
          RESMI 1946
        </text>
      </svg>
    </div>
  );
}

