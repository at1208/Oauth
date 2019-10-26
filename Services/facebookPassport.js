const passport = require('passport')
const auth = require('../Config/key')

const FacebookUser = mongoose.model('FacebookUser')

const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: auth.facebookClientID,
    clientSecret: auth.facebookClientSecret,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    FacebookUser.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));
