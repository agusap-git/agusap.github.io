import { Component, OnInit } from '@angular/core';
import {Auth} from "../../services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: [],
  providers: [Auth]
})
export class LoginComponent implements OnInit {

  constructor(private _auth: Auth) { }

  ngOnInit() {
  }

}
