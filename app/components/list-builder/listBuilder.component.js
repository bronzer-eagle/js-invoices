import template from './listBuilder.template.html';

class ListBuilder {
    /*@ngInject*/
    constructor(DataService) {

    }

    getDataToDisplay(item) {

        if (this.propToDisplay && item[this.propToDisplay]) {
            return item[this.propToDisplay];
        }

        return item;
    }
}

export default {
    template,
    bindings : {
        list: '<?',
        propToDisplay: '@'
    },
    controller: ListBuilder
}