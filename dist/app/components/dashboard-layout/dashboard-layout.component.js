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
var router_1 = require("@angular/router");
var auth_service_1 = require("../../services/auth.service");
var DashboardLayoutComponent = (function () {
    function DashboardLayoutComponent(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
    }
    DashboardLayoutComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DashboardLayoutComponent.prototype, "pageTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DashboardLayoutComponent.prototype, "pageSubtitle", void 0);
    DashboardLayoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dashboard-layout',
            templateUrl: 'dashboard-layout.component.html',
            styles: [],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [auth_service_1.Auth]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.Auth])
    ], DashboardLayoutComponent);
    return DashboardLayoutComponent;
}());
exports.DashboardLayoutComponent = DashboardLayoutComponent;
//# sourceMappingURL=dashboard-layout.component.js.map