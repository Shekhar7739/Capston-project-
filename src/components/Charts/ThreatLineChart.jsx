/**
 * ThreatLineChart.jsx
 * Line chart showing attack trends over months.
 */
import { memo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Legend, Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const ThreatLineChart = memo(({ data }) => {
  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: 'Phishing', data: data.map((d) => d.phishing),
        borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.1)',
        fill: true, tension: 0.4, pointRadius: 3,
      },
      {
        label: 'Malware', data: data.map((d) => d.malware),
        borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.1)',
        fill: true, tension: 0.4, pointRadius: 3,
      },
      {
        label: 'Ransomware', data: data.map((d) => d.ransomware),
        borderColor: '#a855f7', backgroundColor: 'rgba(168,85,247,0.1)',
        fill: true, tension: 0.4, pointRadius: 3,
      },
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
      x: { ticks: { color: '#64748b' }, grid: { color: 'rgba(51,65,85,0.3)' } },
      y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(51,65,85,0.3)' } },
    },
  };

  return (
    <div className="chart-container" style={{ height: '300px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
});

ThreatLineChart.displayName = 'ThreatLineChart';
export default ThreatLineChart;
