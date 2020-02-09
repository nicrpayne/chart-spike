import React, { Component } from 'react';
import Chart from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// require(['moment'], function () {
//     require(['chartjs'], function (Chart) {
//         new Chart(ctx,);
//     });
// });






class ChartComponent extends Component {
    componentDidMount() {
        let myChart = document.getElementById('myChart').getContext('2d');
        let testChart = new Chart(myChart, {
            type: 'bar', //bar, horizontalBar, pie, line, donut,  radar, polar area
            data: {
                labels: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth',],
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
            options: {}
        });
        console.log(testChart);
    }

    
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

export default ChartComponent;
