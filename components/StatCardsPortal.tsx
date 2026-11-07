export default function StatCardsPortal() {
  const cards = [
    {
      title: "Wilayah Administratif",
      value: "19",
      unit: "Padukuhan",
      desc: "19 RW · 81 RT",
      barColor: "bg-emerald-600",
    },
    {
      title: "Aparatur Kalurahan",
      value: "31",
      unit: "Pamong",
      desc: "Pelayanan Warga",
      barColor: "bg-slate-700",
    },
    {
      title: "Jumlah Penduduk",
      value: "10.433",
      unit: "Jiwa",
      desc: "Dukcapil 2024",
      barColor: "bg-[#a9492a]",
    },
    {
      title: "Ketinggian Wilayah",
      value: "± 800",
      unit: "mdpl",
      desc: "Perbukitan Karst",
      barColor: "bg-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-slate-200 rounded-xl shadow-xs p-4 flex flex-col justify-between relative overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className={`absolute top-0 left-0 right-0 h-1 ${item.barColor}`} />
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
              {item.title}
            </span>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="font-display text-2xl sm:text-3xl font-bold text-slate-800 tabular">
                {item.value}
              </span>
              <span className="text-xs font-mono font-medium text-slate-500">
                {item.unit}
              </span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>{item.desc}</span>
            <span className="text-emerald-700 font-bold">●</span>
          </div>
        </div>
      ))}
    </div>
  );
}

