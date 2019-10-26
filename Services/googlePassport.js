
 const GoogleStrategy = require('passport-google-oauth20').Strategy


const passport = require('passport')
const mongoose = require('mongoose')
const auth = require('../Config/key')

const GoogleUser = mongoose.model('GoogleUser')

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

      passport.serializeUser((result, done) => { done(null, result.id)} )

      passport.deserializeUser((id, done) => { GoogleUser.findById(id).then(user => {done(null,user)}) })
