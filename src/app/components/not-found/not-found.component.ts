import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-not-found',
  templateUrl: 'not-found.component.html',
  styles: [],
  directives: [ROUTER_DIRECTIVES],
})
export class PageNotFoundComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

}
