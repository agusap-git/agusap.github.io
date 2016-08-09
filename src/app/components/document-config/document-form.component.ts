import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-document-form',
  templateUrl: 'document-form.component.html',
  styles: []
})
export class DocumentFormComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onCancel(){
    this._router.navigate(['config/document']);
  }
}
