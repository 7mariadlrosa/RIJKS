const router = require("express").Router();
const { isLoggedIn, isLoggedOut, checkRole } = require("../middleware/route-guard");
const User = require('./../models/User.model')

//PROTECCIÓN DE RUTAS
router.get('/profile', isLoggedIn, (req, res) => {
    res.render('user/profile', { user: req.session.currentUser })
})

router.get('/login', isLoggedIn, (req, res) => {
    res.render('login', { user: req.session.currentUser })
})

//ACCEDER AL PERFIL DE USUARIO
router.get("/:id", isLoggedIn, (req, res) => {
    const { id } = req.params
    const isSameID = req.session.currentUser._id === req.params.id

    User
        .findById(id)
        .then(user => {
            res.render("user/profile", { user, isSameID })
        })
        .catch(err => console.log(err))
})

//EDITAR USUARIO
router.get('/:id/edit', (req, res) => {
    const { id } = req.params

    User
        .findById(id)
        .then(editUser => {
            res.render("user/user-edit", editUser)
        })
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {
    const { id } = req.params
    const { name, lastname, username, email, password } = req.body

    User
        .findByIdAndUpdate(id, { name, lastname, username, email, password })
        .then(() => {
            res.redirect("/user/profile")
        })
        .catch(err => console.log(err))
})

//ELIMINAR USUARIO
router.post('/:id/delete', isLoggedIn, checkRole("ADMIN"), (req, res) => {
    const { id } = req.params
    const isAdmin = req.session.currentUser.role === 'ADMIN'
    const isSameID = req.session.currentUser._id === req.params.id

    Student
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/', { isAdmin, isSameID })
        })
        .catch(err => console.log(err))
})

module.exports = router;