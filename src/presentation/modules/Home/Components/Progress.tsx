import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Progress = () => {

    const [chart, setChart] = useState({
          
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        },
      
      
      });

    return <div className="donut-chart">

        <label htmlFor="">Ejemplo 04</label>

        <Chart options={chart.options} series={chart.series} type="bar" height={270} />

        <p className='col-lg-10 mx-auto pt-3 text-center'>
            Porcentaje de aislamiento positivos (sobre total de muestras analizadas) de muestras tomadas en alimentos
        </p>
    </div>;
};

export default Progress;