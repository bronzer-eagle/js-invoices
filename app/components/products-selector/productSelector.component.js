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

    onProductSelection(index) {
        let product = this.ngModel[index];

        product.price = this.getProductPrice(product.product_id);

        if (!product.quantity) {
            product.quantity = 1;
        }

        this.removeProductFromAvailAble(product.product_id);

        if (this.onAdding) {
            this.onAdding({product});
        }
    }

    getProductPrice(id) {
        const product = _find(this.products, item => item.id === id);

        return product ? product.price : 0;
    }

    removeProductFromAvailAble(id) {
        this.productsAvailable = _reject(this.products, product => {
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