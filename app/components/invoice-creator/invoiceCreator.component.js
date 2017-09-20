import template from './invoiceCreator.template.html';

import _find from 'lodash/find';

class InvoiceCreator {
    /*@ngInject*/
    constructor(DataService) {
        this.DataService = DataService;

        this.$onInit = this.init;
    }

    init() {
        this._setDefaults();
    }

    _setDefaults() {
        this.newInvoice = {
            products: []
        };
    }

    /* Actions */

    saveInvoice() {
        this.DataService.saveInvoice(this.newInvoice)
            .then(res => {
                if (!this.newInvoice.id) {
                    this.newInvoice.id = res.id;
                }
            })
    }

    saveInvoiceItem(product) {

        if (!product) return;

        this.DataService.saveInvoiceItem(this.newInvoice.id, product)
            .then(res => {
                if (!product.id) {
                    this._addInvoiceItemId(product, res.id);
                }

                this._processInvoice();
            })
    }

    calculateInvoiceTotal() {
        let total = this.newInvoice.products.reduce((sum, product) => {
            let discount = (100 - this.newInvoice.discount) / 100;
            let summaryPrice = product.price * product.quantity;

            return sum + summaryPrice * discount;
        }, 0);

        return Math.round(total * 100) / 100;
    }

    /* Private methods */

    _processInvoice() {
        this.newInvoice.total = this.calculateInvoiceTotal();
        this.saveInvoice();
    }

    _addInvoiceItemId(product, id) {
        let productInstance = _find(this.newInvoice.products, item => {
            return item.product_id === product.product_id
        });

        productInstance.id = id;
    }
}

export default {
    template,
    bindings: {
        ngModel: '=',
        additionalData: '<'
    },
    controller: InvoiceCreator
}