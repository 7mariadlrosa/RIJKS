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

    getByObjectNum(objectNumber) {
        console.log('-----------', objectNumber)
        return this.axiosApp.get(`${objectNumber}?key=snCsaOEW`)
    }

    getByKeyWord(keyWord) {
        return this.axiosApp.get(`?key=snCsaOEW&involvedMaker=${keyWord}`)
    }

}
module.exports = APIHandler