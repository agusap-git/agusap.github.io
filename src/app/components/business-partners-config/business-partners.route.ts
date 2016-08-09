/**
 * Created by aaltamir on 8/7/16.
 */
import { RouterConfig } from '@angular/router';
import {BusinessPartnerFormComponent} from "./business-partner-form.component";
import {BusinessPartnersConfigComponent} from "./business-partners-config.component";

export const BusinessPartnersRoutes: RouterConfig = [
  { path: 'business-partner', children: [
    { path: '', component: BusinessPartnersConfigComponent },
    { path: 'add',  component: BusinessPartnerFormComponent },
    { path: 'update',  component: BusinessPartnerFormComponent },
    { path: 'delete',  component: BusinessPartnerFormComponent },
    { path: 'return',  component: BusinessPartnerFormComponent }
  ]}
];
