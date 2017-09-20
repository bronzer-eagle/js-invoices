import settings from '../settings';

export default class UtilService {
    /*@ngInject*/
    constructor() {

    }

    getSettings() {
        return settings;
    }

    untransformWord(word) {

        /* Case camel */

        if (!~word.indexOf('_')) {
            word.replace(/([A-Z])/g, ' $1')
        } else {
            word.replace('_', ' ')
        }

        // uppercase the first character
        return word.replace(/^./, function (str) {
            return str.toUpperCase();
        })
    }
}