const express = require('express');
const app = express();
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const InstagramStrategy = require('passport-instagram').Strategy

const auth = require('./config/key')

app.get('/', (req,res) => {
  res.send({ name: 'aman tiwari'})
});

//
// //GOOGLE OAUTH
// passport.use(new GoogleStrategy({
//   clientID: auth.googleClientID,
//   clientSecret: auth.googleClientSecret,
//   callbackURL: '/auth/google/callback'
// },
//  (accessToken, refreshToken, profile, done) => {
//    console.log(accessToken)
//    console.log(refreshToken)
//    console.log(profile)
//  }
// ))
//
// app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile']}));
//
// app.get('/auth/google/callback', passport.authenticate('google'))
//
//
// //FACEBOOK OAUTH
// passport.use( new FacebookStrategy({
//   clientID: auth.facebookClientID,
//   clientSecret: auth.facebookClientSecret,
//   callbackURL: '/auth/facebook/callback'
// },
//  (accessToken,refreshToken, profile, done) => {
//    console.log(accessToken)
//    console.log(profile)
//  }
// ))
//
// app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email','user_location','user_photos']}));
// app.get('/auth/facebook/callback', passport.authenticate('facebook'));
//
// //INSTAGRAM oauth
//
// passport.use( new InstagramStrategy({
//   clientID: auth.instagramClientID,
//   clientSecret: auth.instagramClientSecret,
//   callbackURL: '/auth/instagram/callback'
// },
// (accessToken, refreshToken, profile, done) => {
//   console.log(accessToken)
// }))
//
// app.get('/auth/instagram', passport.authenticate('instagram', { scope: ['comments', 'relationships']}));
// app.get('auth/instagram/callback', passport.authenticate('instagram'))


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`connected to ${port}`) )
