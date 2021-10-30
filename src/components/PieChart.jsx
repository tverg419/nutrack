import React from 'react';
import { Doughnut } from 'react-chartjs-2'
import data from '../seed.json'

function PieChart(props) {
    return (
        <div>
            <Doughnut
            data={data}
            options={{
                indexAxis: 'y'
            }}
            />
        </div>
    );
}

export default PieChart;