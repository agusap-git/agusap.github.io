"use strict";
var business_partner_form_component_1 = require("./business-partner-form.component");
var business_partners_config_component_1 = require("./business-partners-config.component");
exports.BusinessPartnersRoutes = [
    { path: 'business-partner', children: [
            { path: '', component: business_partners_config_component_1.BusinessPartnersConfigComponent },
            { path: 'add', component: business_partner_form_component_1.BusinessPartnerFormComponent },
            { path: 'update', component: business_partner_form_component_1.BusinessPartnerFormComponent },
            { path: 'delete', component: business_partner_form_component_1.BusinessPartnerFormComponent },
            { path: 'return', component: business_partner_form_component_1.BusinessPartnerFormComponent }
        ] }
];
//# sourceMappingURL=business-partners.route.js.map