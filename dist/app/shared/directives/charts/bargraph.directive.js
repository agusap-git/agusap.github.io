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