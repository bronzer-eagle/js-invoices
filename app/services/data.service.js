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

    saveInvoice(data) {
        const route = `invoices${data.id ? '/' + data.id : ''}`;
        const method = data.id ? 'PUT' : 'POST';
        const url = this.settings.apiPrefixed(route);

        return this.$http({url, data, method})
            .then(data => data.data)
            .catch(e => {
                console.log('error', e);
            })
    }
}