"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var not_found_component_1 = require("./components/not-found/not-found.component");
var home_component_1 = require("./components/home/home.component");
var index_1 = require("./components/business-partners-config/index");
var index_2 = require("./components/document-config/index");
var index_3 = require("./components/document-type-config/index");
var index_4 = require("./components/processor-config/index");
var index_5 = require("./components/transmission-config/index");
var auth_guard_1 = require("./shared/guards/auth-guard");
exports.routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'config', children: index_1.BusinessPartnersRoutes.concat(index_2.DocumentRoutes, index_3.DocumentTypeRoutes, index_4.ProcessorRoutes, index_5.TransmissionRoutes), canActivate: [auth_guard_1.AuthGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'home', canActivate: [auth_guard_1.AuthGuard] },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
exports.APP_ROUTER_PROVIDER = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map