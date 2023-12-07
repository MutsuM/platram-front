import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Column = () => {

    const [chart, setChart] = useState({

        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val: any) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },


    });

    return <div className="column-chart">
        <ReactApexChart options={chart.options} series={chart.series} type="bar" height={270} />

        <p className='col-lg-10 mx-auto pt-3 text-center'>
            Porcentaje de aislamientos positivos (sobre total de muestras analizadas) de muestras tomadas en alimentos, discriminados por bacteria identificada.
        </p>
    </div>;
};

export default Column;