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
        label: "data",
        backgroundColor: "#36A2EB",
        data: [70, 50, 45, 100]
      }]
    };

    var _options = {
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide and green
      elements: {
        rectangle: {
          borderWidth: 2,
//          borderColor: 'rgb(0, 255, 0)',
          borderSkipped: 'left'
        }
      },
      responsive: true,
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Document Transmission'
      }
    };

    var config = {
      type: 'horizontalBar',
      data: _data,
      options: _options
    }

    this.myChart = new Chart(ctx,  config);

    console.log(ctx);
    console.log(this.myChart);
  }
}
