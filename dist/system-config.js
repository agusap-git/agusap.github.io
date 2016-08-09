"use strict";
// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'angular2-jwt': 'vendor/angular2-jwt'
};
/** User packages configuration. */
var packages = {
    'angular2-jwt': {
        defaultExtension: 'js',
        main: 'angular2-jwt.js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/components/test-form',
    'app/components/navigator',
    'app/components/dashboard',
    'app/components/dashboard-layout',
    'app/components/business-partners-config',
    'app/components/document-type-config',
    'app/components/document-config',
    'app/components/processor-config',
    'app/components/transmission-config',
    'app/components/home',
    'app/components/login',
    'app/components/not-found',
    'app/components/business-partner-form',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map