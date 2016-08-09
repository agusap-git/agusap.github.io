"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BarGraphDirective = (function () {
    function BarGraphDirective(element) {
        this.el = element.nativeElement;
    }
    BarGraphDirective.prototype.ngAfterViewInit = function () {
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
                },],
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
        };
        this.myChart = new Chart(ctx, config);
        console.log(ctx);
        console.log(this.myChart);
    };
    BarGraphDirective = __decorate([
        core_1.Directive({
            selector: '[bargraph]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BarGraphDirective);
    return BarGraphDirective;
}());
exports.BarGraphDirective = BarGraphDirective;
//# sourceMappingURL=bargraph.directive.js.map