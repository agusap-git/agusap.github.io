import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-processor-form',
  templateUrl: 'processor-form.component.html',
  styles: []
})
export class ProcessorFormComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onCancel(){
    this._router.navigate(['config/processor']);
  }

}
