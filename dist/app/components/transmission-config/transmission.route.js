"use strict";
var transmission_config_component_1 = require("./transmission-config.component");
var transmission_form_component_1 = require("./transmission-form.component");
exports.TransmissionRoutes = [
    { path: 'transmission', children: [
            { path: '', component: transmission_config_component_1.TransmissionConfigComponent },
            { path: 'add', component: transmission_form_component_1.TransmissionFormComponent },
            { path: 'update' },
            { path: 'delete' },
            { path: 'return' }
        ] }
];
//# sourceMappingURL=transmission.route.js.map