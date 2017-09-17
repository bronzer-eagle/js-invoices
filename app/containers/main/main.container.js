import template from './main.template.html';

import _each from 'lodash/each';

class MainController {
    /*@ngInject*/
    constructor(DataService, UtilService, $state) {
        this.DataService = DataService;
        this.UtilService = UtilService;

        this.$state = $state;

        this.$onInit = this.init;
    }

    init() {
        this._setDefaults();
        this._loadList();
    }

    _setDefaults() {
        this.listName = this.$state.current.data.listName;
        this.invoiceFormShowing = false;
        this.additionalData = {};
    }

    _loadList() {
        this.DataService.loadList(this.listName)
            .then(data => {
                this.list = data;
            })
    }

    _loadAdditionalData() {
        const additionalLists = ['products', 'customers'];

        _each(additionalLists, listName => {
            this.DataService.loadList(listName).then(data => {
                    this.additionalData[listName] = data;
                });
        });
    }

    /* Actions */

    isInvoiceState() {
        return this.listName === 'invoices';
    }

    showInvoiceForm() {
        this._loadAdditionalData();

        this.invoiceFormShowing = true;
    }

    cancelCreatingInvoice() {
        this.invoiceFormShowing = false;
    }
}

export default {
    template,
    controller: MainController
}