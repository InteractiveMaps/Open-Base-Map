// components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function findBaseNames(dataSource){
    const baseNames = [];
    dataSource.map((base)=> baseNames.push(base.country));
    return baseNames;
}

function findBaseCount(dataSource){
    const baseCounts = [];
    dataSource.map((base) => baseCounts.push(parseInt(base.numberOfBases)))
    return baseCounts;
}

const BarChart = ({dataSource}) => {
  const data = {
    labels: findBaseNames(dataSource),
    datasets: [
      {
        label: 'Bases',
        data: findBaseCount(dataSource),
        backgroundColor: "rgba("+ Math.round(Math.random()*255)+","+ Math.round(Math.random()*255)+"," + Math.round(Math.random()*255)+", 0.2)",
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0,
      },
    ],
  };

  const options = {
    // responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Overseas Military Bases*',
      },
    },
  };

  return <div><Bar data={data} options={options} /><p className='text-xs'>&copy; InteractiveMaps {new Date().getFullYear()}</p></div>;
};

export default BarChart;
