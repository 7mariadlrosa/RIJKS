const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const saltRounds = 10

const { isLoggedOut, isLoggedIn, checkRole } = require("../middleware/route-guard");

const User = require('../models/User.model')

//SIGNUP USUARIO
router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

router.post('/signup', (req, res) => {
    const { name, lastname, username, email, password } = req.body

    User
        .create({ name, lastname, username, email, password })
        .then(() => {
            res.redirect('/auth/login')
        })
        .catch(err => console.log(err))
})

//LOGIN USUARIO
router.get('/login', isLoggedOut, (req, res) => {
    res.render('auth/login')
})

router.post('/login', isLoggedOut, (req, res) => {
    const { email, password } = req.body

    User
        .create({ email, password })
        .then(() => {
            res.redirect('user/profile')
        })
        .catch(err => console.log(err))
})


//COMPROBAR SI PUEDE REGISTRARSE
router.get('/signup', isLoggedOut, (req, res) => {
    res.render('auth/signup')
})

router.post('/signup', isLoggedOut, (req, res, next) => {

    const { name, lastname, username, email, userPwd } = req.body

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(userPwd, salt))
        .then(hashedPassword => User.create({ name, lastname, username, email, password: hashedPassword }))
        .then(() => res.redirect('/login'))
        .catch(error => next(error));
})

//COMPROBAR SI PUEDE INICIAR SESIÓN
router.get('/login', isLoggedOut, (req, res) => {
    res.render('auth/login')
})

router.post('/login', isLoggedOut, (req, res, next) => {

    const { email, userPwd } = req.body

    if (email.length === 0 || userPwd.length === 0) {
        res.render('auth/login', { errorMessage: 'Rellena todos los campos' })
        return
    }

    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login', { errorMessage: 'Usuario no reconocido' })
                return
            }

            if (!bcryptjs.compareSync(userPwd, user.password)) {
                res.render('auth/login', { errorMessage: 'Contraseña no válida' })
                return
            }

            req.session.currentUser = user
            req.app.locals.currentUser = user

            res.redirect(`/user/${user._id}`)
        })
        .catch(error => next(error));
})

//ELIMINAR LA SESIÓN AL HACER SIGNOUT
router.post('/signout', (req, res) => {
    req.session.destroy(() => res.redirect('/'))
})

module.exports = router