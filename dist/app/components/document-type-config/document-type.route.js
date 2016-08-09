"use strict";
var document_type_config_component_1 = require("./document-type-config.component");
var document_type_form_component_1 = require("./document-type-form.component");
exports.DocumentTypeRoutes = [
    { path: 'document-type', children: [
            { path: '', component: document_type_config_component_1.DocumentTypeConfigComponent },
            { path: 'add', component: document_type_form_component_1.DocumentTypeFormComponent },
            { path: 'update' },
            { path: 'delete' },
            { path: 'return' }
        ] }
];
//# sourceMappingURL=document-type.route.js.map