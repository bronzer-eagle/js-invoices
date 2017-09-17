/*@ngInject*/
export default function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('invoices');

    $locationProvider.html5Mode(true);

    $stateProvider
        .state({
            name: 'products',
            url: '/products',
            data: {
                listName: 'products'
            },
            component: 'mainComponent'
        })
        .state({
            name: 'customers',
            url: '/customers',
            data: {
                listName: 'customers'
            },
            component: 'mainComponent'
        })
        .state({
            name: 'invoices',
            url: '/invoices',
            data: {
                listName: 'invoices'
            },
            component: 'mainComponent'
        })
    ;
};