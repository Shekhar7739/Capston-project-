/**
 * UrlChecker.jsx
 * URL Safety Checker with debounced input, animated results, and check history.
 */
import { useState, useCallback } from 'react';
import { checkUrlSafety } from '../services/urlCheckerService';
import { useDebounce } from '../hooks/useDebounce';
import {
  Link2, Search, ShieldCheck, ShieldAlert, ShieldX,
  Loader2, Clock, AlertTriangle, CheckCircle2, XCircle, Trash2
} from 'lucide-react';

const statusConfig = {
  safe: { icon: ShieldCheck, color: 'text-safe', bg: 'status-safe', label: 'Safe', glow: 'glow-green' },
  suspicious: { icon: ShieldAlert, color: 'text-warning', bg: 'status-warning', label: 'Suspicious', glow: 'glow-blue' },
  dangerous: { icon: ShieldX, color: 'text-danger', bg: 'status-danger', label: 'Dangerous', glow: 'glow-red' },
};

const UrlChecker = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  const handleCheck = useCallback(async () => {
    if (!url.trim()) { setError('Please enter a URL to check.'); return; }
    setError('');
    setResult(null);
    setLoading(true);
    try {
      const res = await checkUrlSafety(url);
      setResult(res);
      // Add to history (newest first, max 10)
      setHistory((prev) => [res, ...prev.filter((h) => h.url !== res.url)].slice(0, 10));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCheck();
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 animate-fade-in pb-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
          <Link2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">URL Safety Checker</h1>
        <p className="text-gray-400">Enter any URL to analyze it for potential security threats</p>
      </div>

      {/* Input Section */}
      <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              id="url-input"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://example.com or enter any URL..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-cyber-dark border border-cyber-border text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-colors text-lg"
            />
          </div>
          <button
            onClick={handleCheck}
            disabled={loading}
            id="check-url-btn"
            className="px-8 py-4 rounded-xl gradient-primary text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 flex-shrink-0"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
            {loading ? 'Scanning...' : 'Scan URL'}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 p-4 rounded-lg bg-danger/10 border border-danger/20 text-danger text-sm flex items-center gap-2 animate-fade-in">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" /> {error}
          </div>
        )}

        {/* Loading animation */}
        {loading && (
          <div className="mt-6 text-center animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
              <div className="spinner !w-5 !h-5" />
              <span className="text-primary-400 text-sm">Analyzing URL for threats...</span>
            </div>
          </div>
        )}
      </div>

      {/* Result Display */}
      {result && !loading && (
        <div className={`p-8 rounded-2xl bg-cyber-card border border-cyber-border animate-fade-in-up ${statusConfig[result.status].glow}`}>
          {/* Status Header */}
          <div className="flex items-center gap-4 mb-6">
            {(() => {
              const Icon = statusConfig[result.status].icon;
              return <Icon className={`w-16 h-16 ${statusConfig[result.status].color}`} />;
            })()}
            <div>
              <h2 className={`text-3xl font-bold ${statusConfig[result.status].color}`}>
                {statusConfig[result.status].label}
              </h2>
              <p className="text-gray-400 mt-1">{result.message}</p>
            </div>
          </div>

          {/* Safety Score */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Safety Score</span>
              <span className={`text-lg font-bold ${statusConfig[result.status].color}`}>{result.score}/100</span>
            </div>
            <div className="w-full h-3 bg-cyber-dark rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  result.score >= 70 ? 'bg-safe' : result.score >= 40 ? 'bg-warning' : 'bg-danger'
                }`}
                style={{ width: `${result.score}%` }}
              />
            </div>
          </div>

          {/* URL checked */}
          <div className="p-4 rounded-lg bg-cyber-dark border border-cyber-border mb-6">
            <p className="text-xs text-gray-500 mb-1">Scanned URL</p>
            <p className="text-sm text-gray-300 break-all">{result.url}</p>
          </div>

          {/* Flags */}
          {result.flags.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-3">Detected Issues ({result.flags.length})</h3>
              <ul className="space-y-2">
                {result.flags.map((flag, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-danger mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.flags.length === 0 && (
            <div className="flex items-center gap-2 text-safe text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>No issues detected. This URL appears to be safe.</span>
            </div>
          )}
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" /> Recent Checks
            </h3>
            <button onClick={clearHistory} className="text-xs text-gray-500 hover:text-danger flex items-center gap-1 transition-colors">
              <Trash2 className="w-3 h-3" /> Clear
            </button>
          </div>
          <div className="space-y-2">
            {history.map((item, i) => {
              const Icon = statusConfig[item.status].icon;
              return (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-cyber-dark border border-cyber-border hover:border-cyber-hover transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className={`w-5 h-5 flex-shrink-0 ${statusConfig[item.status].color}`} />
                    <span className="text-sm text-gray-300 truncate">{item.url}</span>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                    <span className={`text-xs px-2 py-1 rounded-md ${statusConfig[item.status].bg}`}>
                      {item.score}/100
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Example URLs */}
      <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border">
        <h3 className="text-sm font-medium text-gray-300 mb-3">Try these example URLs:</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'https://www.google.com',
            'http://free-prize-winner.tk/claim',
            'https://paypal-login-verify.xyz/secure',
            'https://github.com',
            'http://192.168.1.1/admin/hack-tool',
          ].map((example) => (
            <button
              key={example}
              onClick={() => setUrl(example)}
              className="text-xs px-3 py-1.5 rounded-lg bg-cyber-dark border border-cyber-border text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UrlChecker;
