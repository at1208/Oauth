
 const GoogleStrategy = require('passport-google-oauth20').Strategy
// const FacebookStrategy = require('passport-facebook').Strategy

const passport = require('passport')
const mongoose = require('mongoose')
const auth = require('../Config/key')

const GoogleUser = mongoose.model('GoogleUser')
// const FacebookUser = mongoose.model('FacebookUser')



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
      googleId: profile.id, name: profile._json.name, image: profile._json.picture, email: profile._json.email })
       const result = await CreateGoogleUser.save()

          done(null, result)
      }}
      ))

      passport.serializeUser((result, done) => {
        done(null, result.id)
      })

      passport.deserializeUser((id, done) => {
        GoogleUser.findById(id)
        .then(user => {
          done(null,user)
        })
      })

// passport.use( new FacebookStrategy({
//   clientID: auth.facebookClientID,
//   clientSecret: auth.facebookClientSecret,
//   callbackURL: '/auth/facebook/callback',
//   enableProof: true
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
//   const res = await CreateFacebookUser.save()
//    console.log(res )
//
// }}
// ))
//
// passport.serializeUser((result, done) => {
//   done(null, result.id)
// })
//
// passport.deserializeUser((id, done) => {
//   FacebookUser.findById(id)
//   .then(user => {
//     done(null,user)
//   })
// })
