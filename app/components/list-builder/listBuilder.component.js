import template from './listBuilder.template.html';

class ListBuilder {
    /*@ngInject*/
    constructor(UtilService) {
        this.UtilService = UtilService;

        this.$onInit = this.init;
    }

    init() {
        this.processList();
    }

    getDataToDisplay(item) {

        if (this.propToDisplay && item[this.propToDisplay]) {
            return item[this.propToDisplay];
        }

        return item;
    }

    processList() {
        this.processedList = this.list.map(item => {

            let newItem = {
                title: item[this.titleProp],
                listProps: []
            };

            this.propsToDisplay.forEach(key => {

                let keyToDisplay = this.UtilService.untransformWord(key);

                newItem.listProps.push({
                    key: keyToDisplay,
                    value: item[key]
                })
            });

            return newItem;
        });
    }
}

export default {
    template,
    bindings: {
        list: '<?',
        titleProp: '@',
        propsToDisplay: '<'
    },
    controller: ListBuilder
}