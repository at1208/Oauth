const passport = require('passport')
require('../services/googlePassport')


module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile']}));
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req,res) => {
        res.redirect('/currentUser')
    })

    app.get('/currentUser', (req,res) => {
    res.send(req.user)
    })

    app.get('/logout', (req,res) => {
    req.logout();

    res.send(req.user)
    })


}
