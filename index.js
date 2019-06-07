const express = require('express');
const app = express();
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const auth = require('./config/key')

app.get('/', (req,res) => {
  res.send({ name: 'aman tiwari'})
});

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

app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile']}));

app.get('/auth/google/callback', passport.authenticate('google'))


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`connected to ${port}`) )




//
// https:accounts.google.com/o/oauth2/v2/auth?
// response_type=code&
// scope=email%20name&
// client_id=493869120518-jubc0q1kese38nk4b59m7utuqvj1h4n9.apps.googleusercontent.com
