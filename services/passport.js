
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const passport = require('passport')
const mongoose = require('mongoose')
const auth = require('../config/key')

const GoogleUser = mongoose.model('GoogleUser')
const FacebookUser = mongoose.model('FacebookUser')

passport.serializeUser((result, done) => {
  done(null, result.id)
})

passport.deserializeUser((id, done) => {
  GoogleUser.findById(id)
  .then(user => {
    done(null,user)
  })
})

passport.use(new GoogleStrategy({
  clientID: auth.googleClientID,
  clientSecret: auth.googleClientSecret,
  callbackURL: '/auth/google/callback'
},

async (accessToken, refreshToken, profile, done) =>  {
const FindUser = await GoogleUser.findOne({ googleId: profile.id })


if(FindUser){
  console.log('User is Already existed')
  done(null,FindUser)
}else{
  const CreateGoogleUser = new GoogleUser({
googleId: profile.id })
   const result = await CreateGoogleUser.save()
   console.log(result.id)
   done(null, result)


}}

))

// passport.use( new FacebookStrategy({
//   clientID: auth.facebookClientID,
//   clientSecret: auth.facebookClientSecret,
//   callbackURL: '/auth/facebook/callback'
// },
// async (accessToken,refreshToken, profile, done) => {
//
// const FindFbUser = await FacebookUser.findOne({ facebookId: profile.id })
//
// if(FindFbUser){
//   console.log('fb user already existed ')
// } else {
//   const CreateFacebookUser = new FacebookUser({
//     facebookId: profile.id,
//     name: profile.displayName,
//   })
//   const result = await CreateFacebookUser.save()
//    console.log(result )
//
// }}
// ))
