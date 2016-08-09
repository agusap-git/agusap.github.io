import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-processor-config',
  templateUrl: 'processor-config.component.html',
  styles: []
})
export class ProcessorConfigComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onAdd(){
    console.log("I'm Add");
    this._router.navigate(['config/processor/add']);
  }

  onUpdate(){
    console.log("I'm Update");
  }

  onDelete(){
    console.log("I'm Delete");
  }

  onReturn(){
    console.log("I'm Return");
  }

}
