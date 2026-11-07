export default function StatStrip() {
  const stats = [
    { label: "Padukuhan", value: "19", note: "Wilayah Administratif" },
    { label: "Pamong", value: "31", note: "Aparatur Kalurahan" },
    { label: "Penduduk", value: "10.433", note: "Dukcapil 2024" },
    { label: "Ketinggian", value: "± 800", note: "Meter dpl" },
    { label: "Pembentukan", value: "1946", note: "Tahun Berdiri" },
  ];

  return (
    <div className="border-b border-[#1A1A18] bg-[#2C4A3B] text-[#F4EFE6]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#EAE3D3]/20">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`py-6 md:py-8 ${
                idx === 0 ? "md:pl-0" : "md:px-6"
              } flex flex-col justify-between`}
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#EAE3D3]">
                {s.label}
              </span>
              <div className="mt-2 mb-1">
                <span className="font-display text-3xl md:text-4xl text-[#F4EFE6] tabular">
                  {s.value}
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#EAE3D3]/75">
                {s.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
