/*@ngInject*/
export default function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('app/invoices');

    $locationProvider.html5Mode(true);

    $stateProvider
        .state({
            name: 'in',
            url: '/app',
            abstract: true
        })
        .state({
            name: 'products',
            url: '/products',
            parent: 'in',
            data: {
                listName: 'products'
            },
            component: 'mainComponent'
        })
        .state({
            name: 'customers',
            parent: 'in',
            url: '/customers',
            data: {
                listName: 'customers'
            },
            component: 'mainComponent'
        })
        .state({
            name: 'invoices',
            parent: 'in',
            url: '/invoices',
            data: {
                listName: 'invoices'
            },
            component: 'mainComponent'
        })
    ;
};