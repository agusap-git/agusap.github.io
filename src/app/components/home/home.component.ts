import { Component, OnInit } from '@angular/core';
import {BarGraphDirective} from "../../shared/directives/charts/bargraph.directive";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [],
  directives: [BarGraphDirective]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
