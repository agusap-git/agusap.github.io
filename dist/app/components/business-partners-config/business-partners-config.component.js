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
var BusinessPartnersConfigComponent = (function () {
    function BusinessPartnersConfigComponent(_router) {
        this._router = _router;
    }
    BusinessPartnersConfigComponent.prototype.ngOnInit = function () {
    };
    BusinessPartnersConfigComponent.prototype.onAdd = function () {
        console.log("I'm Add");
        this._router.navigate(['config/business-partner/add']);
    };
    BusinessPartnersConfigComponent.prototype.onUpdate = function () {
        console.log("I'm Update");
    };
    BusinessPartnersConfigComponent.prototype.onDelete = function () {
        console.log("I'm Delete");
    };
    BusinessPartnersConfigComponent.prototype.onReturn = function () {
        console.log("I'm Return");
    };
    BusinessPartnersConfigComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-business-partners-config',
            templateUrl: 'business-partners-config.component.html',
            styles: []
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], BusinessPartnersConfigComponent);
    return BusinessPartnersConfigComponent;
}());
exports.BusinessPartnersConfigComponent = BusinessPartnersConfigComponent;
//# sourceMappingURL=business-partners-config.component.js.map