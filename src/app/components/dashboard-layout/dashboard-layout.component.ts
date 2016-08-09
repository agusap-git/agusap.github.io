import {Component, OnInit, Input} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {Auth} from "../../services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-dashboard-layout',
  templateUrl: 'dashboard-layout.component.html',
  styles: [],
  directives: [ROUTER_DIRECTIVES],
  providers: [Auth]
})
export class DashboardLayoutComponent implements OnInit {
  @Input() pageTitle: String;
  @Input() pageSubtitle: String;

  loggedIn : boolean;

  constructor(private _router : Router, private _auth : Auth ) {
    this.loggedIn = this._auth.authenticated();
  }

  ngOnInit() {
  }

}
