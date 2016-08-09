import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms, FORM_PROVIDERS } from "@angular/forms";
import { ConfigService } from "./app/services/config.service";
import { HTTP_PROVIDERS } from "@angular/http";
import { APP_ROUTER_PROVIDER } from "./app/app.routes";
import { AuthGuard } from "./app/shared/guards/auth-guard";
import { DataService } from "./app/services/data.service";
import {AUTH_PROVIDERS} from "angular2-jwt";

var providers = [
  disableDeprecatedForms(),
  provideForms(),
  ConfigService,
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDER,
  AUTH_PROVIDERS,
  AuthGuard,
  DataService
];

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, providers).catch(err => console.error(err));
