import React from "react";
import { PropTypes } from "prop-types";
import { Line } from "react-chartjs-2";
import { CategoryScale, Tooltip, Legend, Title } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale, Tooltip, Legend, Title);
Chart.defaults.font.size = "16";
Chart.defaults.color = "black";

export default function LineChart({ chartData }) {
  // Find the minimum value
  const minY = chartData.datasets.flatMap((dataset) => dataset.data);
  return (
    <Line
      data={chartData}
      className="w-full rounded-md bg-zinc-300 md:h-fit"
      options={{
        clip: false,
        layout: {
          padding: { top: 30, bottom: 15 },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              label: (tooltipItems) => `Result: ${tooltipItems.raw}%`,
            },
          },
        },
        aspectRatio: 1,
        scales: {
          y: {
            ticks: { font: { size: 16, weight: "bold" } },
            stack: true,
            display: true,
            max: 100,
            min: minY,
            padding: { top: 20 },
          },
          x: {
            ticks: { font: { size: 16, weight: "bold" }, align: "start" },
          },
        },
        elements: {
          point: { zIndex: 100 },
        },
        responsive: true,
      }}
    />
  );
}

LineChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  chartData: PropTypes.object.isRequired,
};
