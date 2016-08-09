import {Directive, AfterViewInit, ElementRef} from '@angular/core';

declare var Chart:any;

@Directive({
  selector: '[doughnutgraph]'
})
export class DoughnutgraphDirective  implements AfterViewInit{

  el:any;
  myChart:any;

  constructor(element:ElementRef) {
    this.el = element.nativeElement;
  }

  ngAfterViewInit() {
    var canvas = this.el;
    var ctx = canvas.getContext('2d');

    var _data = {
      labels: [
        "Red",
        "Blue",
        "Yellow"
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    var _options = {
      responsive: true,
      legend: {
        display: true
      }
    };

    var config = {
      type: 'doughnut',
      data: _data,
      options: _options
    }

    this.myChart = new Chart(ctx,  config);

    console.log(ctx);
    console.log(this.myChart);
  }

}
