import React from "react";
import Chart from "react-apexcharts"

import {currency} from '../../helpers/formatters';

function Charts(props) {

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // chart
  const options = {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: months,
        labels: {
          style: {
            // colors: '#ffffff',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            // colors: '#ffffff',
          },
          formatter: function (value) {
            return currency(value);
          }
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            orientation: 'vertical',
            position: 'center' // bottom/center/top
          }
        }
      },
      legend: {
        labels: {
          // colors: '#ffffff',
        },
      },
      grid: {
        show: false,
      },
    }
    const series = [
      {
        name: "Inflow",
        data: props.chartData.monthlyInflow,
        color: '#254138',
      },
      {
        name: "Outflow",
        data: props.chartData.monthlyOutflow,
        color: '#ff9d22',
      },
    ];

  return (
    <Chart
      // className='sales-chart'
      options={options}
      series={series}
      type="bar"
      height= '350'
      // width='500'
    />
  )
}

export default Charts