import { Component, OnInit } from '@angular/core';
import {BarGraphDirective} from "../../common/directives/charts/bargraph.directive";
import {PiegraphDirective} from "../../common/directives/charts/piegraph.directive";
import {DoughnutgraphDirective} from "../../common/directives/charts/doughnutgraph.directive";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [],
  directives: [BarGraphDirective, PiegraphDirective, DoughnutgraphDirective]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
