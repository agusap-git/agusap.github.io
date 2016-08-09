import {Directive, ElementRef, AfterViewInit} from '@angular/core';

declare var Chart:any;

@Directive({
  selector: '[piegraph]'
})
export class PiegraphDirective implements AfterViewInit{

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
        "Arrived",
        "Rejected",
        "In Progress",
        "Processed"
      ],
      datasets: [
        {
          data: [300, 50, 100, 200],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF7070"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF7070"
          ]
        }]
    };

    var _options = {
      responsive: true,
      legend: {
        position: 'right',
        display: true
      },
/*
      title: {
        display: true,
        text: 'Document Status'
      }
*/
    };

    var config = {
      type: 'pie',
      data: _data,
      options: _options
    }

    this.myChart = new Chart(ctx,  config);

    console.log(ctx);
    console.log(this.myChart);
  }


}
