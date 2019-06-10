
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const InstagramStrategy = require('passport-instagram').Strategy
const passport = require('passport')
const mongoose = require('mongoose')
const auth = require('../config/key')

const GoogleUser = mongoose.model('GoogleUser')
const FacebookUser = mongoose.model('FacebookUser')
// const InstagramUser = mongoose.model('InstagramUser')



passport.use(new GoogleStrategy({
  clientID: auth.googleClientID,
  clientSecret: auth.googleClientSecret,
  callbackURL: '/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) =>  {
const FindUser = await GoogleUser.find({ googleId: profile.id })

if(FindUser.length){
  console.log('User is Already existed')
}else{
  const CreateGoogleUser = new GoogleUser({
        googleId: profile.id,

        })
   const result = await CreateGoogleUser.save()
   console.log(result)

}}
))

passport.use( new FacebookStrategy({
  clientID: auth.facebookClientID,
  clientSecret: auth.facebookClientSecret,
  callbackURL: '/auth/facebook/callback'
},
async (accessToken,refreshToken, profile, done) => {

const FindFbUser = await FacebookUser.find({ facebookId: profile.id })

if(FindFbUser.length){
  console.log('fb user already existed ')
} else {
  const CreateFacebookUser = new FacebookUser({
    facebookId: profile.id,
    name: profile.displayName,
  })
  const result = await CreateFacebookUser.save()
   console.log(result )
}}
))
 
