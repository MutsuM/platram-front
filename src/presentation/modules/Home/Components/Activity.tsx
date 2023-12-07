import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Activity = () => {

    const [chart, setChart] = useState({
        options: {
            xaxis: {
                categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']
            }
        },
        series: [
            {
                name: 'Series 1',
                data: [30, 40, 45, 50, 49, 60, 70]
            }
        ]
    });

    return <div className="line-chart">
        <label htmlFor="">Mi actividad</label>
        <ReactApexChart options={chart.options} series={chart.series} type="line" height={350} />
    </div>;
};

export default Activity;