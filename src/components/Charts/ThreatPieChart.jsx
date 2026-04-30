/**
 * ThreatPieChart.jsx
 * Pie/Doughnut chart showing threat category distribution.
 */
import { memo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ThreatPieChart = memo(({ data }) => {
  // Aggregate totals per category
  const totals = data.reduce((acc, d) => ({
    phishing: (acc.phishing || 0) + d.phishing,
    malware: (acc.malware || 0) + d.malware,
    spam: (acc.spam || 0) + d.spam,
    ransomware: (acc.ransomware || 0) + d.ransomware,
    ddos: (acc.ddos || 0) + d.ddos,
  }), {});

  const chartData = {
    labels: ['Phishing', 'Malware', 'Spam', 'Ransomware', 'DDoS'],
    datasets: [{
      data: [totals.phishing, totals.malware, totals.spam, totals.ransomware, totals.ddos],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)', 'rgba(239, 68, 68, 0.8)',
        'rgba(245, 158, 11, 0.8)', 'rgba(168, 85, 247, 0.8)', 'rgba(6, 182, 212, 0.8)',
      ],
      borderColor: '#0a0e1a',
      borderWidth: 2,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#94a3b8', usePointStyle: true, padding: 15 } },
      tooltip: { backgroundColor: '#1e293b', titleColor: '#f1f5f9', bodyColor: '#cbd5e1' },
    },
  };

  return (
    <div className="chart-container" style={{ height: '300px' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
});

ThreatPieChart.displayName = 'ThreatPieChart';
export default ThreatPieChart;
