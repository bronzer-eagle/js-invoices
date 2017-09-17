export default class DataService {
    /*@ngInject*/
    constructor(UtilService, $http) {
        this.UtilService = UtilService;

        this.$http = $http;

        this.settings = this.UtilService.getSettings();

    }

    loadList(listName) {
        const baseUrl = this.settings.apiPrefixed(listName);

        return this.$http.get(baseUrl)
            .then(data => data.data)
            .catch(e => {
                console.log('error', e);
            })
    }
}