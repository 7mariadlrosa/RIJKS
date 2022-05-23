const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const saltRounds = 10

const { isLoggedOut, isLoggedIn, checkRole } = require("../middleware/route-guard");

const User = require('../models/User.model')

//SIGNUP USUARIO
router.get('/signup', isLoggedOut, (req, res) => {
    res.render('auth/signup')
})

router.post('/signup', isLoggedOut, (req, res, next) => {
    const { name, lastname, username, email, userPwd } = req.body

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(userPwd, salt))
        .then(hashedPassword => User.create({ name, lastname, username, email, password: hashedPassword }))
        .then(newUser => res.redirect('/login'))
        .catch(error => next(error));
})

//LOGIN USUARIO
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
                res.render('auth/login', { errorMessage: 'Email no reconocido' })
                return
            }

            if (!bcryptjs.compareSync(userPwd, user.password)) {
                res.render('auth/login', { errorMessage: 'Contraseña no válida' })
                return
            }

            req.session.currentUser = user
            req.app.locals.isLogged = user

            res.redirect(`/user/profile`)
        })
        .catch(error => next(error));
})

//ELIMINAR LA SESIÓN AL HACER SIGNOUT

router.post('/logout', isLoggedIn, (req, res) => {
    req.session.destroy(() => res.redirect('/'))

})


module.exports = router