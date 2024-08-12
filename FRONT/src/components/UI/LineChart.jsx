import React from 'react';
import { PropTypes } from 'prop-types';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Tooltip, Legend, Title } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale, Tooltip, Legend, Title);
Chart.defaults.font.size = '16';
Chart.defaults.color = 'black';

export default function LineChart({
	chartData,
	setSelectedDataset,
	title = '',
	subTitle = '',
}) {
	return (
		<Line
			data={chartData}
			className='w-full rounded-md bg-zinc-300'
			options={{
				plugins: {
					tooltip: {
						displayColors: false,
						callbacks: {
							label: (tooltipItems) => `'Result: ${tooltipItems.raw}%`,
						},
					},
					legend: {
						labels: {
							generateLabels: (chart) => {
								const original =
									Chart.defaults.plugins.legend.labels.generateLabels(chart);
								return original.map((label) => {
									// Customize the opacity for non-enabled (hidden) labels
									if (!chart.isDatasetVisible(label.datasetIndex)) {
										label.fillStyle = 'rgba(0, 0, 0, 0.5)';
										label.strokeStyle = 'rgba(0, 0, 0, 0.5)';
									}
									return label;
								});
							},
						},
						onClick: (_, legendItem, legend) => {
							setSelectedDataset(legendItem.text);
							const chart = legend.chart;
							chart.tooltip.setActiveElements([], { x: 0, y: 0 });
							chart.update();
						},
					},
					title: {
						text: title,
						display: Boolean(title),
						font: { size: 24, weight: 'bold' },
					},
					subtitle: {
						text: subTitle,
						display: Boolean(subTitle),
						font: { size: 20, weight: 'bold' },
					},
				},
				layout: { padding: { top: 20, bottom: 20 } },
				aspectRatio: 1,
				scales: {
					y: {
						ticks: { font: { size: 16, weight: 'bold' } },
						stack: true,
						display: true,
						max: 100,
					},
					x: {
						ticks: { font: { size: 16, weight: 'bold' }, align: 'inner' },
					},
				},
				responsive: true,
			}}
		/>
	);
}

LineChart.propTypes = {
	chartData: PropTypes.object.isRequired,
	setSelectedDataset: PropTypes.func,
	title: PropTypes.string,
	subTitle: PropTypes.string,
};
