import { useState } from 'react';
import { Exercise, Level } from '../data/exercises';

interface ExerciseCardProps {
  exercise: Exercise;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export default function ExerciseCard({ exercise, isExpanded, onToggle, index }: ExerciseCardProps) {
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [copied, setCopied] = useState<'starter' | 'solution' | null>(null);

  const levelColors: Record<Level, string> = {
    1: 'border-green-500/50 bg-green-500/5',
    2: 'border-blue-500/50 bg-blue-500/5',
    3: 'border-yellow-500/50 bg-yellow-500/5',
    4: 'border-red-500/50 bg-red-500/5',
  };

  const levelBadgeColors: Record<Level, string> = {
    1: 'bg-green-500/20 text-green-300 border-green-500/30',
    2: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    3: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    4: 'bg-red-500/20 text-red-300 border-red-500/30',
  };

  const levelNames: Record<Level, string> = {
    1: 'Très Facile',
    2: 'Facile',
    3: 'Intermédiaire',
    4: 'Avancé',
  };

  const copyToClipboard = (text: string, type: 'starter' | 'solution') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className={`rounded-xl border ${levelColors[exercise.level]} backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10`}>
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white font-bold text-sm">
            {exercise.id}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">{exercise.title}</h3>
            <p className="text-sm text-purple-300 mt-0.5">{exercise.objective}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${levelBadgeColors[exercise.level]}`}>
            {levelNames[exercise.level]}
          </span>
          <svg
            className={`w-5 h-5 text-purple-300 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Content */}
      {isExpanded && (
        <div className="px-6 pb-6 space-y-4">
          {/* Description */}
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <p className="text-purple-100 whitespace-pre-line text-sm leading-relaxed">
              {exercise.description}
            </p>
          </div>

          {/* Concepts */}
          <div className="flex flex-wrap gap-2">
            {exercise.concepts.map((concept, i) => (
              <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-200 rounded text-xs font-mono border border-purple-500/30">
                {concept}
              </span>
            ))}
          </div>

          {/* Starter Code */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-cyan-300 flex items-center gap-2">
                <span>📝</span> Code de départ (à compléter)
              </h4>
              <button
                onClick={() => copyToClipboard(exercise.starterCode, 'starter')}
                className="text-xs px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-purple-200 transition-colors"
              >
                {copied === 'starter' ? '✓ Copié !' : '📋 Copier'}
              </button>
            </div>
            <pre className="bg-slate-900/80 rounded-lg p-4 overflow-x-auto border border-slate-700/50">
              <code className="text-sm text-green-300 font-mono whitespace-pre">{exercise.starterCode}</code>
            </pre>
          </div>

          {/* Hints */}
          <div>
            <button
              onClick={() => setShowHints(!showHints)}
              className="flex items-center gap-2 text-sm text-yellow-300 hover:text-yellow-200 transition-colors"
            >
              <span>💡</span>
              <span>{showHints ? 'Masquer les indices' : 'Afficher les indices'}</span>
              <svg
                className={`w-4 h-4 transition-transform ${showHints ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showHints && (
              <ul className="mt-2 space-y-1 pl-6">
                {exercise.hints.map((hint, i) => (
                  <li key={i} className="text-sm text-yellow-100/80 flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span>{hint}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Solution */}
          <div>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                showSolution
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>{showSolution ? '🔓' : '🔒'}</span>
              <span>{showSolution ? 'Masquer la solution' : 'Voir la solution'}</span>
            </button>
            {showSolution && (
              <div className="mt-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-emerald-300 flex items-center gap-2">
                    <span>✅</span> Solution
                  </h4>
                  <button
                    onClick={() => copyToClipboard(exercise.solution, 'solution')}
                    className="text-xs px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-purple-200 transition-colors"
                  >
                    {copied === 'solution' ? '✓ Copié !' : '📋 Copier'}
                  </button>
                </div>
                <pre className="bg-slate-900/80 rounded-lg p-4 overflow-x-auto border border-emerald-500/20">
                  <code className="text-sm text-emerald-200 font-mono whitespace-pre">{exercise.solution}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
