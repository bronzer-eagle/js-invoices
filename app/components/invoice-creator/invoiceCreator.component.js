import template from './invoiceCreator.template.html';

class InvoiceCreator {
    /*@ngInject*/
    constructor(DataService) {
        this.DataService = DataService;

        this.$onInit = this.init;
    }

    init() {
        this.ngModel.products = [];
    }
}

export default {
    template,
    bindings: {
        ngModel: '=',
        additionalData: '<',
        onChange: '&',
        onItemChange: '&'
    },
    controller: InvoiceCreator
}