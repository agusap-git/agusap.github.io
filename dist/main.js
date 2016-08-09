"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var forms_1 = require("@angular/forms");
var config_service_1 = require("./app/services/config.service");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app/app.routes");
var auth_guard_1 = require("./app/shared/guards/auth-guard");
var data_service_1 = require("./app/services/data.service");
var angular2_jwt_1 = require("angular2-jwt");
var providers = [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    config_service_1.ConfigService,
    forms_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    app_routes_1.APP_ROUTER_PROVIDER,
    angular2_jwt_1.AUTH_PROVIDERS,
    auth_guard_1.AuthGuard,
    data_service_1.DataService
];
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, providers).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map