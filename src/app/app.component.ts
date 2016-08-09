import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {DashboardLayoutComponent} from "./components/dashboard-layout/dashboard-layout.component";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DashboardLayoutComponent, ROUTER_DIRECTIVES],
})

export class AppComponent {
  title = 'app works!';
}
