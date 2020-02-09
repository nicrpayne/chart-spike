import React, { Component } from 'react';
import Chart from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// require(['moment'], function () {
//     require(['chartjs'], function (Chart) {
//         new Chart(ctx,);
//     });
// });






class ChartComponent extends Component {

    state= {
        barClick: '',
    }

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
                    ],
                    
                    // backgroundColor: 'green'
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86 0.6',
                        'rgba(75, 192, 192, 0.6)'

                    ]
                    
                }],

            },
            options: {}
        });
        console.log(testChart);
        
    }



    handleClick = () => {
        // console.log('bar Clicked!');
        
            this.setState({
                barClick: 'clicked'
            })   
            console.log(this.state.barClick);
            
    }
        
    
    
    
    render() {

       

        return (
                <body>
                    <div className="container">
                    <canvas 
                    onClick={() => this.handleClick()}  
                        // value='rgba(255, 99, 132, 0.6)'
                    id="myChart"></canvas>
         

                    </div>

                </body>
          
        );
    }
}

export default ChartComponent;
