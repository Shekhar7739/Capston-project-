/**
 * Awareness.jsx
 * Cybersecurity tips & best practices page with expandable cards.
 */
import { useState } from 'react';
import { awarenessTips } from '../data/mockData';
import { ChevronDown, ChevronUp, Search, BookOpen } from 'lucide-react';

const Awareness = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggle = (id) => setExpandedId(expandedId === id ? null : id);

  const filtered = awarenessTips.filter((tip) => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return (
      tip.title.toLowerCase().includes(q) ||
      tip.category.toLowerCase().includes(q) ||
      tip.tips.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 animate-fade-in pb-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Cybersecurity Awareness</h1>
        <p className="text-gray-400">Essential tips and best practices to keep you safe online</p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          id="tips-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tips..."
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-cyber-card border border-cyber-border text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors"
        />
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Categories', value: awarenessTips.length, color: 'text-primary-400' },
          { label: 'Total Tips', value: awarenessTips.reduce((a, t) => a + t.tips.length, 0), color: 'text-safe' },
          { label: 'Phishing Tips', value: awarenessTips.find((t) => t.category === 'phishing')?.tips.length || 0, color: 'text-warning' },
          { label: 'Malware Tips', value: awarenessTips.find((t) => t.category === 'malware')?.tips.length || 0, color: 'text-danger' },
        ].map((s) => (
          <div key={s.label} className="p-4 rounded-xl bg-cyber-card border border-cyber-border text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Tips Accordion */}
      <div className="space-y-4">
        {filtered.map((tip) => {
          const isOpen = expandedId === tip.id;
          return (
            <div
              key={tip.id}
              className={`rounded-2xl bg-cyber-card border transition-all duration-300 ${
                isOpen ? 'border-primary-500/30' : 'border-cyber-border hover:border-cyber-hover'
              }`}
            >
              {/* Header */}
              <button
                onClick={() => toggle(tip.id)}
                className="w-full flex items-center justify-between p-6 text-left"
                id={`tip-${tip.id}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{tip.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{tip.title}</h3>
                    <p className="text-sm text-gray-500 capitalize mt-0.5">{tip.category.replace('-', ' ')} • {tip.tips.length} tips</p>
                  </div>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {/* Content */}
              {isOpen && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="border-t border-cyber-border pt-4 space-y-3">
                    {tip.tips.map((t, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-cyber-dark/50">
                        <span className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-sm text-gray-300 leading-relaxed">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No tips found matching &quot;{searchTerm}&quot;</p>
        </div>
      )}

      {/* Footer CTA */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-primary-900/50 to-purple-900/50 border border-primary-500/20 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Stay Vigilant, Stay Safe</h3>
        <p className="text-gray-400 max-w-lg mx-auto">
          Cybersecurity is everyone&apos;s responsibility. Share these tips with your friends and family
          to help create a safer digital world.
        </p>
      </div>
    </div>
  );
};

export default Awareness;
