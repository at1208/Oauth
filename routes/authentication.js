const passport = require('passport')
 require('../services/passport')


module.exports = (app) => {

  app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile']}));
  app.get('/auth/google/callback', passport.authenticate('google'))
  app.get('/api/current_user', (req,res) => {
    res.send(req.user)
  })


  app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email','user_location','user_photos']}));
  app.get('/auth/facebook/callback', passport.authenticate('facebook'));



}
