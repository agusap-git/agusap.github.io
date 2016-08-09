import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-business-partner-form',
  templateUrl: 'business-partner-form.component.html',
  styles: []
})
export class BusinessPartnerFormComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onCancel(){
    this._router.navigate(['config/business-partner']);
  }

}
