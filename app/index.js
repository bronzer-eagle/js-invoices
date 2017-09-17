import angular from 'angular';

/* Components */

import ListBuilder from './components/list-builder/listBuilder.component';
import InvoiceCreator from './components/invoice-creator/invoiceCreator.component';

/* Containers */

import Main from './containers/main/main.container';

/* Services */

import DataService from './services/data.service';
import UtilService from './services/util.service';

/* Modules */

import 'angular-ui-router';
import 'ui-select';

/* Configs */

import routes from './routes/routes';

/* Other */

import './styles/index.scss';


angular.module('invoice-app', [
    'ui.router',
    'ui.select'
])
    .config(routes)

    .component('mainComponent', Main)
    .component('listBuilder', ListBuilder)
    .component('invoiceCreator', InvoiceCreator)

    .service('DataService', DataService)
    .service('UtilService', UtilService)
;