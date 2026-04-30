/**
 * Dashboard.jsx
 * Main threat dashboard with stats cards, charts, and threat table with search/filter.
 */
import { useState, useEffect, useMemo } from 'react';
import { getThreats, getMonthlyStats, getDashboardStats } from '../services/threatService';
import { useDebounce } from '../hooks/useDebounce';
import ThreatBarChart from '../components/Charts/ThreatBarChart';
import ThreatPieChart from '../components/Charts/ThreatPieChart';
import ThreatLineChart from '../components/Charts/ThreatLineChart';
import {
  ShieldAlert, Bug, Mail, Lock, Wifi, TrendingUp,
  Search, Filter, AlertTriangle, ChevronDown
} from 'lucide-react';

const CATEGORIES = ['all', 'phishing', 'malware', 'spam', 'ransomware', 'ddos'];

const severityColors = {
  critical: 'status-danger',
  high: 'status-warning',
  medium: 'bg-primary-500/15 text-primary-400 border border-primary-500/30',
  low: 'status-safe',
};

const categoryIcons = {
  phishing: ShieldAlert, malware: Bug, spam: Mail, ransomware: Lock, ddos: Wifi,
};

const Dashboard = () => {
  const [threats, setThreats] = useState([]);
  const [monthlyStats, setMonthlyStats] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 300);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [t, m, s] = await Promise.all([getThreats(), getMonthlyStats(), getDashboardStats()]);
        setThreats(t);
        setMonthlyStats(m);
        setStats(s);
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter threats using memoization
  const filteredThreats = useMemo(() => {
    let result = threats;
    if (selectedCategory !== 'all') {
      result = result.filter((t) => t.category === selectedCategory);
    }
    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(
        (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [threats, selectedCategory, debouncedSearch]);

  // Stat cards config
  const statCards = stats ? [
    { label: 'Total Threats', value: stats.totalThreats.toLocaleString(), icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { label: 'Phishing Attacks', value: stats.phishingAttacks.toLocaleString(), icon: ShieldAlert, color: 'from-purple-500 to-pink-500' },
    { label: 'Malware Detected', value: stats.malwareDetected.toLocaleString(), icon: Bug, color: 'from-red-500 to-orange-500' },
    { label: 'Blocked Today', value: stats.threatsBlockedToday.toLocaleString(), icon: AlertTriangle, color: 'from-amber-500 to-yellow-500' },
  ] : [];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="spinner mx-auto mb-4" />
          <p className="text-gray-400">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 animate-fade-in pb-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, i) => (
          <div
            key={card.label}
            className={`p-6 rounded-2xl bg-cyber-card border border-cyber-border hover:border-primary-500/20 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-2xl font-bold text-white">{card.value}</p>
            <p className="text-sm text-gray-400 mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border">
          <h3 className="text-lg font-semibold text-white mb-4">Monthly Threat Trends</h3>
          <ThreatLineChart data={monthlyStats} />
        </div>
        <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border">
          <h3 className="text-lg font-semibold text-white mb-4">Threat Distribution</h3>
          <ThreatPieChart data={monthlyStats} />
        </div>
      </div>

      {/* Full-width Bar Chart */}
      <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border">
        <h3 className="text-lg font-semibold text-white mb-4">Threats by Category (Monthly)</h3>
        <ThreatBarChart data={monthlyStats} />
      </div>

      {/* Threats Table */}
      <div className="p-6 rounded-2xl bg-cyber-card border border-cyber-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-lg font-semibold text-white">Recent Threats</h3>
          <div className="flex gap-3">
            {/* Search */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                id="threat-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search threats..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-cyber-dark border border-cyber-border text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>
            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-dark border border-cyber-border text-gray-300 text-sm hover:border-primary-500/30 transition-colors"
                id="category-filter"
              >
                <Filter className="w-4 h-4" />
                <span className="capitalize">{selectedCategory}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showFilterDropdown && (
                <div className="absolute right-0 top-full mt-2 w-40 rounded-lg bg-cyber-dark border border-cyber-border shadow-xl z-20 py-1 animate-fade-in">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setShowFilterDropdown(false); }}
                      className={`w-full text-left px-4 py-2 text-sm capitalize hover:bg-white/5 transition-colors ${
                        selectedCategory === cat ? 'text-primary-400' : 'text-gray-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-cyber-border">
                <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Threat</th>
                <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Category</th>
                <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Affected</th>
                <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyber-border">
              {filteredThreats.slice(0, 15).map((threat) => {
                const Icon = categoryIcons[threat.category] || ShieldAlert;
                return (
                  <tr key={threat.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-white">{threat.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1 max-w-xs">{threat.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 hidden md:table-cell">
                      <span className="text-xs capitalize text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">{threat.category}</span>
                    </td>
                    <td className="py-4">
                      <span className={`text-xs capitalize px-2.5 py-1 rounded-md font-medium ${severityColors[threat.severity]}`}>
                        {threat.severity}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-gray-400 hidden lg:table-cell">
                      {threat.affectedUsers.toLocaleString()}
                    </td>
                    <td className="py-4 text-sm text-gray-500 hidden sm:table-cell">{threat.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filteredThreats.length === 0 && (
            <p className="text-center text-gray-500 py-8">No threats found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
