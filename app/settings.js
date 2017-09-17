export default {
    apiRoute: '/api/',

    apiPrefixed: function (url) {
        return `${window.location.origin + this.apiRoute + url}`
    }
};