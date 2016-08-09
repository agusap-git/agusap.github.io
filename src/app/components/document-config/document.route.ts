/**
 * Created by aaltamir on 8/7/16.
 */
import { RouterConfig } from '@angular/router';
import {DocumentConfigComponent} from "./document-config.component";
import {DocumentFormComponent} from "./document-form.component";

export const DocumentRoutes: RouterConfig = [
  { path: 'document', children: [
    { path: '', component: DocumentConfigComponent },
    { path: 'add', component: DocumentFormComponent },
    { path: 'update' },
    { path: 'delete' },
    { path: 'return' }
  ]}
];
