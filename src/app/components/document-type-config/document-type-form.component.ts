import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-document-type-form',
  templateUrl: 'document-type-form.component.html',
  styles: []
})
export class DocumentTypeFormComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onCancel(){
    this._router.navigate(['config/document-type']);
  }

}
