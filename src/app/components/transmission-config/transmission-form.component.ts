import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-transmission-form',
  templateUrl: 'transmission-form.component.html',
  styles: []
})
export class TransmissionFormComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onCancel(){
    this._router.navigate(['config/transmission']);
  }
}
