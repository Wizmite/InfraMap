import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
    const data = {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'Infrastructure Growth',
            data: [65, 59, 80],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
        }]
    };

    return <Line data={data} />;
};

export default ChartComponent;
