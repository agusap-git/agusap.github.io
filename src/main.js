"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var forms_1 = require("@angular/forms");
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map