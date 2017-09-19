import template from './productSelector.template.html';

import angular from 'angular';
import _reject from 'lodash/reject';
import _find from 'lodash/find';

class ProductSelectorController {
    /*@ngInject*/
    constructor() {
        this.$onInit = this.init;
    }

    init() {
        this._setDefaults();
    }

    _setDefaults() {
        this.limitProducts = 1;
        this.productsAvailable = angular.copy(this.products);
        this.disabledSelectors = [];
        this.disabledInputs = []
    }

    onAddingProduct(index) {

        this.disabledSelectors.push(index);

        if (this.onAdding) {
            this.onAdding(index);
        }

        this.removeProductFromAvailAble(id);
        this.addProductRow();
    }

    isDisabledSelector(index) {
        return this.disabledSelectors.includes(index);
    }

    onAddingQuantity(index) {

    }

    removeProductFromAvailAble(id) {
        this.productsAvailable = _reject(this.productsAvailable, product => {
            return product.id === id;
        })
    }

    addProductRow() {

        if (this.limitProducts <= this.products.length) {
            this.limitProducts++;
        }

    }
}

export default {
    controller: ProductSelectorController,
    bindings: {
        products: '<',
        ngModel: '=',
        onAdding: '&'
    },
    template
}