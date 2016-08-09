import {Directive, ElementRef, AfterViewInit} from '@angular/core';

declare var Chart:any;

@Directive({
  selector: '[bargraph]'
})

export class BarGraphDirective implements AfterViewInit{

  el:any;
  myChart:any;

  constructor(element:ElementRef) {
    this.el = element.nativeElement;
  }

  ngAfterViewInit() {
    var canvas = this.el;
    var ctx = canvas.getContext('2d');

    var _data = {
      labels: ["01-01",
        "01-04",
        "01-15",
        "02-03",
        "03-25",
        "04-03",
        "04-14",
        "05-27",
        "08-03"],
      datasets: [{
        data: [5, 13, 23, 20, 5, 13, 23, 130, 2],
        label: "male",
        borderColor: "r#00a65a",
        backgroundColor: "#00a65a",
        hoverBackgroundColor: "rgba(197,23,1,1)",
        borderWidth: 1,
        pointBorderColor: "rgba(197,23,1,1)",
        pointBackgroundColor: "rgba(255,255,255,0.8)",
        pointBorderWidth: 1.5,
        yAxisID: "y-axis-1",
      }, ],
    };

    var _options = {
      scales: {
        xAxes: [{
          categorySpacing: 0
        }],
        yAxes: [{
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        }]
      }
    };

    var config = {
      type: 'line',
      data: _data,
      options: _options
    }

    this.myChart = new Chart(ctx,  config);

    console.log(ctx);
    console.log(this.myChart);
  }
}
