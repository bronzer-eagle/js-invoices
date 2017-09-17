/*@ngInject*/
export default function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('invoices');

    $locationProvider.html5Mode(true);

    $stateProvider
        .state({
            name: 'products',
            url: '/products',
            component: 'mainComponent'
        })
        .state({
            name: 'customers',
            url: '/customers',
            component: 'mainComponent'
        })
        .state({
            name: 'invoices',
            url: '/invoices',
            component: 'mainComponent'
        })
    ;
};