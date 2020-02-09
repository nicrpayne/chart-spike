import React, { Component } from 'react';
import Chart from 'chart.js';
// require(['moment'], function () {
//     require(['chartjs'], function (Chart) {
//         new Chart(ctx,);
//     });
// });

let myChart = document.getElementById('myChart').getContext('2d');
let testChart = new Chart(myChart, {
    type: 'bar', //bar, horizontalBar, pie, line, donut,  radar, polar area
    data: {
        labels: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', ],
        datasets: [{
            label: 'population',
            data: [
                425403, 
                307695, 
                116961, 
                85884
            ]

        }],

    },
    options: { }
});

class Chart extends Component {


    
    render() {

       

        return (
            
            <>
            
            <body>
                <div className="container">
                    <canvas id="myChart"></canvas>
                    
                </div>

            </body>
            </>
        );
    }
}

export default Chart;
