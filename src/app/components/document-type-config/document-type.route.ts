/**
 * Created by aaltamir on 8/7/16.
 */
import { RouterConfig } from '@angular/router';
import {DocumentTypeConfigComponent} from "./document-type-config.component";
import {DocumentTypeFormComponent} from "./document-type-form.component";

export const DocumentTypeRoutes: RouterConfig = [
  { path: 'document-type', children: [
    { path: '', component: DocumentTypeConfigComponent },
    { path: 'add', component: DocumentTypeFormComponent },
    { path: 'update' },
    { path: 'delete' },
    { path: 'return' }
  ]}
];
