import { useState } from 'react';
import PdfViewer from './PdfViewer';

const base = import.meta.env.BASE_URL;

export const TPS = [
  { id: 'tp1', label: '📝 Tp1 Linq', src: `${base}pages/Travaux/Tp1/Tp1_Linq.pdf` },
  { id: 'tp2', label: '📝 Tp2 Linq', src: `${base}pages/Travaux/Tp2/Tp2_Linq.pdf` },
];

export default function Travaux() {
  const [currentId, setCurrentId] = useState(TPS[0].id);
  const current = TPS.find(tp => tp.id === currentId)!;

  return (
    <div>
      <div className="flex gap-3 mb-4">
        {TPS.map(tp => (
          <button
            key={tp.id}
            onClick={() => setCurrentId(tp.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentId === tp.id
                ? 'bg-white text-slate-900 shadow-lg shadow-white/20'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            {tp.label}
          </button>
        ))}
      </div>
      <PdfViewer src={current.src} title={current.label} />
    </div>
  );
}
