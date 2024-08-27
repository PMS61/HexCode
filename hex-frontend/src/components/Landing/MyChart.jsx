import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

const MyDonutChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut', // Use 'doughnut' for donut chart
            data: {
                labels: ['Total Expenditure', 'Wasted due to inefficiency'],
                datasets: [{
                    label: 'Crores',
                    data: [1500,500],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return `${tooltipItem.label}: ${tooltipItem.raw}`;
                            }
                        }
                    }
                }
            }
        });

        // Clean up chart instance on component unmount
        return () => {
            if (chartRef.current) {
                const chart = Chart.getChart(chartRef.current);
                if (chart) chart.destroy();
            }
        };
    }, []);

    return (
        <canvas ref={chartRef} width="25px" height="25px"></canvas>
    );
};

export default MyDonutChart;
