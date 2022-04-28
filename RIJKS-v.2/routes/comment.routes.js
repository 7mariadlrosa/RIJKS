const { captureRejections } = require('connect-mongo');
const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const User = require('../models/User.model');
const Comment = require('../models/Comment.model');

//CREAR COMENTARIOS
router.post('/created-comments', (req, res) => {
    const { username, content } = req.body

    Comment
        .create({ username, content })
        .then(() => {
            res.redirect('/:id/list-detail-events')
        })
        .catch(err => console.log(err))
})

//LISTA DE COMENTARIOS
router.post('/list-comments', (req, res) => {

    Comment
        .find()
        .then(comments => {
            res.render('/:id/list-detail-events', { comments })
        })
        .catch(err => console.log(err))
})

//ELIMINAR COMENTARIOS
router.post('/:id/delete-comments', (req, res) => {
    const { id } = req.params

    Comment
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/event/list-events')
        })
        .catch(err => console.log(err))
})

module.exports = router;