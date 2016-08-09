"use strict";
var document_config_component_1 = require("./document-config.component");
var document_form_component_1 = require("./document-form.component");
exports.DocumentRoutes = [
    { path: 'document', children: [
            { path: '', component: document_config_component_1.DocumentConfigComponent },
            { path: 'add', component: document_form_component_1.DocumentFormComponent },
            { path: 'update' },
            { path: 'delete' },
            { path: 'return' }
        ] }
];
//# sourceMappingURL=document.route.js.map