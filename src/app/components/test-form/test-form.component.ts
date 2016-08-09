import {Component, OnInit} from '@angular/core';
import {EmailValidator} from "../../shared/directives/validators/emailvalidator.directive";
import {ConfigService} from "../../services/config.service";
import {BarGraphDirective} from "../../shared/directives/charts/bargraph.directive";
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormGroup, FormBuilder
} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'test-form',
  templateUrl: 'test-form.component.html',
  styleUrls: [],
  directives: [EmailValidator, BarGraphDirective, FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
})
export class TestFormComponent implements OnInit {
  testForm: FormGroup;

  constructor(private _fb: FormBuilder, private _config: ConfigService) {
    _config.load().then(() => console.log('Environment: ' + _config.get('apiUrl')));
  }

  ngOnInit() {
    this.testForm = this._fb.group({
      email: ['']
    });
  }
}
