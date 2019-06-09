const passport = require('passport')
 require('../services/passport')


module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile']}));
  app.get('/auth/google/callback', passport.authenticate('google'))


  app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email','user_location','user_photos']}));
  app.get('/auth/facebook/callback', passport.authenticate('facebook'));


  app.get('/auth/instagram', passport.authenticate('instagram', { scope: ['comments', 'relationships']}));
  app.get('auth/instagram/callback', passport.authenticate('instagram'))

}
