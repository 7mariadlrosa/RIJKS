const axios = require("axios")

class APIHandler {
    constructor() {

        this.axiosApp = axios.create({
            baseURL: "https://www.rijksmuseum.nl/api/nl/collection/"
        })
    }

    getFullList() {
        return this.axiosApp.get(`?key=snCsaOEW`)
    }

    findById(objectNumber) {
        console.log('-------', objectNumber)
        const sanitized = objectNumber.replace('nl-', '')
        return this.axiosApp.get(`${sanitized}?key=snCsaOEW`)
    }

    getByKeyWord(keyWord) {
        return this.axiosApp.get(`?key=snCsaOEW&${keyWord}`)
    }

}
module.exports = APIHandler