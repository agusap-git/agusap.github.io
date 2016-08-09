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
      labels: ["Sent", "Received", "WEB", "FTP"],
      datasets: [{
        backgroundColor: "#36A2EB",
        data: [70, 50, 45, 100]
      }]
    };

    var _options = {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'left'
        }
      },
      responsive: true,
      legend: {
        display: false
      },
    };

    var config = {
      type: 'horizontalBar',
      data: _data,
      options: _options
    }

    this.myChart = new Chart(ctx,  config);
  }
}
