import {provideRouter, RouterConfig} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {BusinessPartnersRoutes} from "./components/business-partners-config/index";
import {DocumentRoutes} from "./components/document-config/index";
import {DocumentTypeRoutes} from "./components/document-type-config/index";
import {ProcessorRoutes} from "./components/processor-config/index";
import {TransmissionRoutes} from "./components/transmission-config/index";
import {AuthGuard} from "./shared/guards/auth-guard";


export const routes: RouterConfig = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'config', children: [
    ...BusinessPartnersRoutes,
    ...DocumentRoutes,
    ...DocumentTypeRoutes,
    ...ProcessorRoutes,
    ...TransmissionRoutes
  ], canActivate: [AuthGuard]},
  { path: '', pathMatch:'full', redirectTo: 'home', canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
];

export const APP_ROUTER_PROVIDER = [
  provideRouter(routes)
];
