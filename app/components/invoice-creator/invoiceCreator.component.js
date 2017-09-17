import template from './invoiceCreator.template.html';

class InvoiceCreator {
    /*@ngInject*/
    constructor(DataService) {

    }
}

export default {
    template,
    bindings : {
        ngModel: '=',
        additionalData: '<'
    },
    controller: InvoiceCreator
}