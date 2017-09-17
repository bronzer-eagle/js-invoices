import angular from 'angular';

/* Components */

import Main from './containers/main/main.container';

/* Services */

import DataService from './services/data.service';

/* Modules */

import 'angular-ui-router';

/* Configs */
import routes from './routes/routes';

angular.module('invoice-app', [
    'ui.router'
])
    .config(routes)

    .component('mainComponent', Main)

    .service('DataService', DataService)
;