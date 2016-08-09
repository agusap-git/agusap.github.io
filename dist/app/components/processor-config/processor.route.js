"use strict";
var processor_config_component_1 = require("./processor-config.component");
var processor_form_component_1 = require("./processor-form.component");
exports.ProcessorRoutes = [
    { path: 'processor', children: [
            { path: '', component: processor_config_component_1.ProcessorConfigComponent },
            { path: 'add', component: processor_form_component_1.ProcessorFormComponent },
            { path: 'update' },
            { path: 'delete' },
            { path: 'return' }
        ] }
];
//# sourceMappingURL=processor.route.js.map