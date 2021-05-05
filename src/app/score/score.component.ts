import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../services/metrics.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
 chartData = [
    {
      label: 'Low Necessity',
      data: [] 
    },
    {
      label: 'Medium Necessity',
      data: [] 
    },
    { 
      label: 'High Necessity',
      data: []
    }
  ];

  constructor(private metricsService: MetricsService) { }
  ngOnInit(): void {
    // this.metricsService.getPurchaseData();
    // this.list = this.metricsService.getSpendByNecessity()
    this.populateCharts()
  }
  

  async getSpendByNecessity(){
    let necessityMap = await this.metricsService.getSpendByNecessity()
    return necessityMap
  }
  //  getSpendByNecessity(){
  //   let list =  this.metricsService.getSpendByNecessity();
  //   let data = list[0]
  //   let highdata = list[1]
  //   return [data, highdata]
  // }


  async populateCharts(){
    let data = await this.getSpendByNecessity()
    // let sum = data.low.reduce((a,b)=>{
    //   return a+b
    // })
    // console.log(sum)
    // let lowSum = data.low.reduce((a, b) => a + b, 0)
    // let medSum = data.medium.reduce((a, b) => a + b, 0)
    // let highSum= data.high.reduce((a, b) => a + b, 0)
    this.chartData[0].data = [data.low]
    this.chartData[1].data = [data.medium]
    this.chartData[2].data = [data.high]

    // console.log(this.chartData)
  }

  // ADD CHART OPTIONS. 
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels = ['LOW', 'MED', 'HIGH']
  // labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];



  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]
  
  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }
}
