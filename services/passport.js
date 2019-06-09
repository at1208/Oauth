
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const InstagramStrategy = require('passport-instagram').Strategy
const passport = require('passport')
const auth = require('../config/key')

//GOOGLE OAUTH
passport.use(new GoogleStrategy({
  clientID: auth.googleClientID,
  clientSecret: auth.googleClientSecret,
  callbackURL: '/auth/google/callback'
},
 (accessToken, refreshToken, profile, done) => {
   console.log(accessToken)
   console.log(refreshToken)
   console.log(profile)
 }
))


//FACEBOOK OAUTH
passport.use( new FacebookStrategy({
  clientID: auth.facebookClientID,
  clientSecret: auth.facebookClientSecret,
  callbackURL: '/auth/facebook/callback'
},
 (accessToken,refreshToken, profile, done) => {
   console.log(accessToken)
   console.log(profile)
 }
))

//INSTAGRAM oauth

passport.use( new InstagramStrategy({
  clientID: auth.instagramClientID,
  clientSecret: auth.instagramClientSecret,
  callbackURL: '/auth/instagram/callback'
},
(accessToken, refreshToken, profile, done) => {
  console.log(accessToken)
}))
