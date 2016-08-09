/**
 * Created by aaltamir on 8/7/16.
 */
import { RouterConfig } from '@angular/router';
import {ProcessorConfigComponent} from "./processor-config.component";
import {ProcessorFormComponent} from "./processor-form.component";

export const ProcessorRoutes: RouterConfig = [
  { path: 'processor', children: [
    { path: '', component: ProcessorConfigComponent },
    { path: 'add', component: ProcessorFormComponent },
    { path: 'update' },
    { path: 'delete' },
    { path: 'return' }
  ]}
];
