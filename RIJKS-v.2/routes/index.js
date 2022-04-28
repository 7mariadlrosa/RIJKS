module.exports = app => {

    // Get home page 
    const indexRoutes = require('./index.routes')
    app.use('/', indexRoutes)

    // Auth routes
    const authRoutes = require('./auth.routes')
    app.use('/auth', authRoutes)

    // User routes
    const userRoutes = require('./user.routes')
    app.use('/user', userRoutes)

    // Art routes
    const artRoutes = require('./art.routes')
    app.use('/collections', artRoutes)

    // Event routes
    const eventRoutes = require('./event.routes')
    app.use('/event', eventRoutes)

    // Comments routes
    const commentsRoutes = require('./comment.routes')
    app.use('/comments', commentsRoutes)

    // const artistRoutes = require('./artist.routes')
    // app.user('/artist', artistRoutes)
}