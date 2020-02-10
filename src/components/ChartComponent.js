import React, { Component } from 'react';
import Chart from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class ChartComponent extends Component {

    // state= {
    //     barClick: '',
    // }
    
    componentDidMount() {
        
        let myChart = document.getElementById('myChart').getContext('2d');
        // let chartBars = document.getElementById(chartBars).onClick(this.handleClick());
        
        
        //Global Options

        Chart.defaults.global.defaultFontFamily= 'Lato';
        Chart.defaults.global.defaultFontSize= 12;
        Chart.defaults.global.defaultFontColor= '#777';

        let populationChart = new Chart(myChart, {
            type: 'bar', //bar, horizontalBar, pie, line, donut,  radar, polar area
            
            data: {
                labels: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth',],
                datasets: [{
                    label: 'Population',
                    data: [
                        425403,
                        307695,
                        116961,
                        85884
                    ],
                    // backgroundColor: 'green'
                    backgroundColor: 
                    [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86 0.6',
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    boverBorderColor: '#000',  
                }],
            },
            options: {
                title: {
                    display: true,
                    text: 'Largest Cities In MN',
                    fontSize: '25'
                },
                legend: {
                    onClick: this.handleClick,
                    position: 'right',
                    // display: 'false',
                    labels: {
                        fontColor: '#000'
                    }
                },
                
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        bottom: 0,
                        top: 0,
                    }
                },
                tooltips: {
                    
                    enabled: true
                }
            }
            
        });
        // console.log(testChart);
       
    }
    // *onClick(){
    //     console.log('in onClick!');
        
    //     yield* this.handleClick()
    // }
    handleClick = () => {
        console.log('bar Clicked!');
        
    }
      render() {

       

        return (
                <body>
                    <div className="container">
                    <canvas 
                    width= '900px'
                    height= '600px'
                    // onClick={() => this.handleClick()}  
                        // value='rgba(255, 99, 132, 0.6)'
                    id="myChart"></canvas>
         

                    </div>

                </body>
          
        );
    }
}

export default ChartComponent;


// onClick: function* (legend, event) {
//     console.log('clicked!', legend, event);
//     yield* this.handleClick()
// },


// const App = React.createClass({
//     handleClick(e) {
//         const chart = this.Bar.getChart()
//         chart.getElementAtEvent(e)
//     },
//     render() {
//         return (<Bar data={chartData} options={chartOption} onClick={this.handleClick} ref={(ref) => this.Bar = ref} />)
//     }
// })