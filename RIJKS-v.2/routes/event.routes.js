const { captureRejections } = require('connect-mongo');
const express = require('express');
const req = require('express/lib/request');
const { redirect } = require('express/lib/response');
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");
const { checkRole } = require('../middleware/route-guard');

const Event = require('../models/Event.model');
const User = require('../models/User.model');

//CREAR EVENTOS
router.get('/created-events', (req, res) => {
    res.render('events/created-events')
})

router.post('/created-events', fileUploader.single('cover'), (req, res) => {
    const { name, date, location, description, } = req.body
    const { path } = req.file

    Event
        .create({ name, date, location, description, cover: path })
        .then(() => {
            res.redirect('/event/list-events')
        })
        .catch(err => console.log(err))
})

//LISTA EVENTOS
router.get('/list-events', (req, res, next) => {

    Event
        .find()
        .then(events => {
            res.render('events/list-events', { events })
        })
        .catch(err => console.log(err))
})

//EDITAR EVENTO
router.get('/:id/edit-events', checkRole("ADMIN"), (req, res) => {
    const { id } = req.params

    Event
        .findById(id)
        .then(event => {
            res.render('events/update-form-events', event)
        })
        .catch(err => console.log(err))
})

router.post('/:id/edit-events', (req, res) => {
    const { id } = req.params
    const { name, date, location, description, cover } = req.body

    Event
        .findByIdAndUpdate(id, { name, date, location, description, cover })
        .then(() => {
            res.redirect('/event/list-events')
        })
        .catch(err => console.log(err))
})

//ELIMINAR EVENTO
router.post('/:id/delete-events', (req, res) => {
    const { id } = req.params

    Event
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/event/list-events')
        })
        .catch(err => console.log(err))
})

//DETALLE EVENTO
router.get('/:id/list-detail-events', (req, res) => {
    const { id } = req.params
    const isAdmin = req.session.currentUser.role === "ADMIN"

    Event
        .findById(id)
        .then(eventId => {
            console.log(eventId)
            res.render('events/detail-events', { eventId, isAdmin })
        })
        .catch(err => console.log(err))
})

// EVENTOS FAVORITOS
router.post('/:id/favs-events', (req, res) => {
    const id = req.params
    const userId = req.session.currentUser._id

    console.log('ESTE ES EL ID DEL EVENTO', id)
    console.log('ESTE ES EL ID DEL USER', userId)

    User
        .findByIdAndUpdate(userId, { $push: { favEvent: id } }, { new: true })
        .then(() => {
            res.redirect('/event/list-events')
        })
        .catch(err => console.log(err))
});

module.exports = router;