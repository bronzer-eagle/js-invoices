import settings from '../settings';

export default class UtilService {
    /*@ngInject*/
    constructor() {

    }

    getSettings() {
        return settings;
    }
}