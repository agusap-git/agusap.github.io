"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var emailvalidator_directive_1 = require("../../shared/directives/validators/emailvalidator.directive");
var config_service_1 = require("../../services/config.service");
var bargraph_directive_1 = require("../../shared/directives/charts/bargraph.directive");
var forms_1 = require('@angular/forms');
var TestFormComponent = (function () {
    function TestFormComponent(_fb, _config) {
        this._fb = _fb;
        this._config = _config;
        _config.load().then(function () { return console.log('Environment: ' + _config.get('apiUrl')); });
    }
    TestFormComponent.prototype.ngOnInit = function () {
        this.testForm = this._fb.group({
            email: ['']
        });
    };
    TestFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'test-form',
            templateUrl: 'test-form.component.html',
            styleUrls: [],
            directives: [emailvalidator_directive_1.EmailValidator, bargraph_directive_1.BarGraphDirective, forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, config_service_1.ConfigService])
    ], TestFormComponent);
    return TestFormComponent;
}());
exports.TestFormComponent = TestFormComponent;
//# sourceMappingURL=test-form.component.js.map