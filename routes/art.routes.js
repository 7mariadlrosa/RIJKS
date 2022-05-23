const router = require("express").Router();
const APIHandler = require('../api-handlers/APIHandlers')
const { checkRole, isLoggedIn } = require("../middleware/route-guard");

const artsAPI = new APIHandler();
const User = require('../models/User.model');
const Art = require('./../models/Art.model')

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

// OBTENER DETALLES DE LA OBRA (POR ID)
router.get('/:id', isLoggedIn, checkRole("USER"), (req, res) => {

    const { id } = req.params

    console.log('------- EL ID -------', id)

    const userId = req.session.currentUser._id
    const isUser = req.session.currentUser.role === "USER"

    artsAPI
        .findById(id)
        .then(({ data }) => {
            res.render('collections/collections-details', { art: data, isUser, userId })
        })
        .catch(err => console.log(err))
})

//PARA BUSCAR POR PALABRA EN EL BUSCADOR 
// router.get("/buscar/resultados", (req, res) => {
//     const { searchQuery } = req.query;

//     let queryLower = searchQuery.toLowerCase()

//     artsAPI
//         .getByKeyWord(queryLower)
//         .then(({ data }) => {
//             const artData = data.facets
//             artData.forEach(element => console.log('---------- la movida', element.facets))
//             // console.log('---------------------', artData)  
//             // 
//             res.render("search/search-result", { artData });
//         });
// });

//OBRAS FAVORITAS
router.post('/:id/favs-arts', (req, res) => {

    const { id } = req.params
    const userId = req.session.currentUser._id

    User
        .findByIdAndUpdate(userId, { $push: { favArts: id } }, { new: true })
        .then(() => {
            res.redirect('/user/profile')
        })
        .catch(err => console.log(err))
});

module.exports = router;