import { useState } from 'react';
import ExerciseCard from './components/ExerciseCard';
import { exercises, Level } from './data/exercises';

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState<Level | 'all'>('all');
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);

  const filteredExercises = selectedLevel === 'all'
    ? exercises
    : exercises.filter(e => e.level === selectedLevel);

  const levelColors: Record<Level, string> = {
    1: 'from-green-400 to-emerald-500',
    2: 'from-blue-400 to-cyan-500',
    3: 'from-yellow-400 to-orange-500',
    4: 'from-red-400 to-pink-500',
  };

  const levelNames: Record<Level, string> = {
    1: '🟢 Très Facile',
    2: '🔵 Facile',
    3: '🟡 Intermédiaire',
    4: '🔴 Avancé',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl">⚡</span>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                Exercices LINQ en C#
              </h1>
            </div>
            <p className="text-lg text-purple-200 max-w-3xl mx-auto mt-4">
              Maîtrisez LINQ (Language Integrated Query) avec des exercices progressifs.
              Compatible <span className="font-semibold text-cyan-300">.NET 8.0</span> / Visual Studio Community.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-purple-800/50 rounded-full px-4 py-2 text-sm text-purple-200 border border-purple-600/30">
              <span>📘</span>
              <span>Après ADO.NET — Passez au niveau supérieur avec LINQ !</span>
            </div>
          </div>
        </div>
      </header>

      {/* Level Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
              selectedLevel === 'all'
                ? 'bg-white text-slate-900 shadow-lg shadow-white/20'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
          >
            📋 Tous les exercices
          </button>
          {([1, 2, 3, 4] as Level[]).map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedLevel === level
                  ? `bg-gradient-to-r ${levelColors[level]} text-white shadow-lg`
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              {levelNames[level]}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {([1, 2, 3, 4] as Level[]).map(level => (
            <div key={level} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-white">
                {exercises.filter(e => e.level === level).length}
              </div>
              <div className="text-sm text-purple-300">{levelNames[level]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Exercises */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-4">
          {filteredExercises.map((exercise, index) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              isExpanded={expandedExercise === exercise.id}
              onToggle={() => setExpandedExercise(expandedExercise === exercise.id ? null : exercise.id)}
              index={index}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-purple-300 text-sm">
          <p>💡 Conseil : Copiez ces exercices dans Visual Studio 2022 (.NET 8.0) et testez-les !</p>
          <p className="mt-2 text-purple-400">LINQ = Language Integrated Query — La puissance des requêtes directement dans C#</p>
        </div>
      </footer>
    </div>
  );
}
