const router = require("express").Router();
const Art = require('./../models/Art.model')
const APIHandler = require('../api-handlers/APIHandlers')
const axios = require("axios")

const artsAPI = new APIHandler();

//OBTENER LISTA COMPLETA DE OBRAS
router.get("/collections", (req, res) => {

    artsAPI
        .getFullList()
        .then(({ data }) => {
            let artData = data.artObjects
            res.render("collections/collections", { artData })
        })
        .catch(err => console.log(err))
})

//OBTENER DETALLES DE LA OBRA (POR ID)
// router.get('/colecciones/:id', (req, res) => {
//     const { id } = req.params

//     artsAPI
//         .findById(id)
//         .then(art => res.render('colecciones/colecciones-detalles', art))
//         .catch(err => console.log(err))
// })

//PARA BUSCAR POR PALABRA EN EL BUSCADOR 
// router.get("/", (req, res) => {
//     artsAPI
//         .getByKeyWord(keyWord)
//         .then(() => {
//             res.render("colecciones/:id", artId.data.artObjects.id)
//         })
//         .catch(err => console.log(err))
// })

module.exports = router;