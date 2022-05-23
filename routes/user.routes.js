const router = require("express").Router();
const { isLoggedIn, checkRole } = require("../middleware/route-guard");
const User = require('./../models/User.model')

const APIHandler = require('../api-handlers/APIHandlers')
const artsAPI = new APIHandler();


//PROTECCIÓN DE RUTAS
router.get('/profile', (req, res) => {

    const { id } = req.session.currentUser._id

    const viewInfo = {}

    User
        .findById(req.session.currentUser._id)
        .populate('favArts favEvent')
        .then((userInfo) => {
            viewInfo.userInfo = userInfo
            const favArtsRequests = userInfo.favArts.map(artID => artsAPI.findById(artID))
            return Promise.all(favArtsRequests)
        })
        .then(favArts => {
            viewInfo.favArtsInfo = favArts.map(({ data }) => data.artObject)

            res.render('user/profile', viewInfo)
        })
        .catch(err => console.log(err))
})

router.get('/login', isLoggedIn, (req, res) => {
    res.render('login', { user: req.session.currentUser })
})

// //EDITAR USUARIO
// router.get('/:id/edit', (req, res) => {
//     const { id } = req.params

//     console.log("Que hay aquiiii------------->", { id })

//     User
//         .findById(id)
//         .then(editUser => {
//             res.render("user/user-edit", editUser)
//         })
//         .catch(err => console.log(err))
// })

// router.post('/:id/edit', (req, res) => {
//     const { id } = req.params
//     const { name, lastname, username, email, password } = req.body

//     User
//         .findByIdAndUpdate(id, { name, lastname, username, email, password })
//         .then(() => {
//             res.redirect("/user/profile")
//         })
//         .catch(err => console.log(err))
// })

// //ELIMINAR USUARIO
// router.post('/:id/delete', isLoggedIn, checkRole("ADMIN"), (req, res) => {
//     const { id } = req.params
//     const isAdmin = req.session.currentUser.role === 'ADMIN'
//     const isSameID = req.session.currentUser._id === req.params.id

//     Student
//         .findByIdAndDelete(id)
//         .then(() => {
//             res.redirect('/', { isAdmin, isSameID })
//         })
//         .catch(err => console.log(err))
// })

module.exports = router;