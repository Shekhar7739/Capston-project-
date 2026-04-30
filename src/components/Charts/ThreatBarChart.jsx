/**
 * ThreatBarChart.jsx
 * Bar chart showing monthly threat distribution by category.
 */
import { memo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ThreatBarChart = memo(({ data }) => {
  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      { label: 'Phishing', data: data.map((d) => d.phishing), backgroundColor: 'rgba(59, 130, 246, 0.8)', borderRadius: 4 },
      { label: 'Malware', data: data.map((d) => d.malware), backgroundColor: 'rgba(239, 68, 68, 0.8)', borderRadius: 4 },
      { label: 'Spam', data: data.map((d) => d.spam), backgroundColor: 'rgba(245, 158, 11, 0.8)', borderRadius: 4 },
      { label: 'Ransomware', data: data.map((d) => d.ransomware), backgroundColor: 'rgba(168, 85, 247, 0.8)', borderRadius: 4 },
      { label: 'DDoS', data: data.map((d) => d.ddos), backgroundColor: 'rgba(6, 182, 212, 0.8)', borderRadius: 4 },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { color: '#94a3b8', usePointStyle: true, padding: 20 } },
      tooltip: { backgroundColor: '#1e293b', titleColor: '#f1f5f9', bodyColor: '#cbd5e1', borderColor: '#334155', borderWidth: 1 },
    },
    scales: {
      x: { ticks: { color: '#64748b' }, grid: { color: 'rgba(51, 65, 85, 0.3)' } },
      y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(51, 65, 85, 0.3)' } },
    },
  };

  return (
    <div className="chart-container" style={{ height: '300px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
});

ThreatBarChart.displayName = 'ThreatBarChart';
export default ThreatBarChart;
