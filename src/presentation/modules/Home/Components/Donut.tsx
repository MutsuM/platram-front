import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Donut = () => {

    const [donut, setDonut] = useState({
        options: {
            // Opciones específicas para el gráfico de donut
            chart: {
                id: 'donut-chart'
            },
            labels: ['.Doc', '.Xls', '.Png', '.Jpg'],
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '50%' // Tamaño del donut
                    }
                }
            },
            legend: {
                fontSize: '20px', // Tamaño del texto de la leyenda
                offsetY: 20
            }
        },
        series: [44, 55, 13, 33] // Datos para el gráfico
    });

    return <div className="donut-chart">

        <label htmlFor="">% Aislamiento positivos</label>

        <Chart options={donut.options} series={donut.series} type="donut" height={250} />

        <p className='col-lg-10 mx-auto pt-3 text-center'>
            Porcentaje de aislamiento positivos (sobre total de muestras analizadas) de muestras tomadas en alimentos
        </p>
    </div>;
};

export default Donut;