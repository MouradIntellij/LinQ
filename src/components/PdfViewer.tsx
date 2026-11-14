import { useEffect, useState } from 'react';

interface PdfViewerProps {
  src: string;
  title: string;
}

/** Affiche un PDF dans la page centrale (avec message si le fichier est absent). */
export default function PdfViewer({ src, title }: PdfViewerProps) {
  const [status, setStatus] = useState<'loading' | 'ok' | 'missing'>('loading');

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    // Le serveur Vite renvoie index.html si le fichier n'existe pas : on vérifie le type.
    fetch(src, { method: 'HEAD' })
      .then(res => {
        const type = res.headers.get('content-type') ?? '';
        if (!cancelled) setStatus(res.ok && type.includes('pdf') ? 'ok' : 'missing');
      })
      .catch(() => !cancelled && setStatus('missing'));
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3">
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-white font-semibold">{title}</h2>
        {status === 'ok' && (
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-cyan-300 hover:text-cyan-200 underline"
          >
            Ouvrir dans un nouvel onglet ↗
          </a>
        )}
      </div>

      {status === 'loading' && <p className="text-purple-200 p-6">Chargement…</p>}

      {status === 'missing' && (
        <div className="text-purple-200 p-6">
          <p className="font-medium text-white">PDF introuvable 😕</p>
          <p className="mt-2 text-sm">
            Placez le fichier dans <code className="text-cyan-300">public{src.replace(import.meta.env.BASE_URL.replace(/\/$/, ''), '')}</code>
          </p>
        </div>
      )}

      {status === 'ok' && (
        <iframe
          src={src}
          title={title}
          className="w-full h-[80vh] rounded-lg bg-white"
        />
      )}
    </div>
  );
}
