import template from './listBuilder.template.html';

class ListBuilder {
    /*@ngInject*/
    constructor(DataService) {

    }
}

export default {
    template,
    bindings : {
        list: '<?'
    },
    controller: ListBuilder
}