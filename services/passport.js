
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const InstagramStrategy = require('passport-instagram').Strategy
const passport = require('passport')
const mongoose = require('mongoose')
const auth = require('../config/key')

const GoogleUser = mongoose.model('GoogleUser')
const FacebookUser = mongoose.model('FacebookUser')
// const InstagramUser = mongoose.model('InstagramUser')


//GOOGLE OAUTH
passport.use(new GoogleStrategy({
  clientID: auth.googleClientID,
  clientSecret: auth.googleClientSecret,
  callbackURL: '/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) =>  {
const FindUser = await GoogleUser.find({ googleId: profile.id })
console.log(FindUser)
if(FindUser){
  console.log('User is Already existed')
}else{
  const CreateGoogleUser = new GoogleUser({
        googleId: profile.id })
   const result = await CreateGoogleUser.save()
   console.log(result)

}



}
))


//FACEBOOK OAUTH
passport.use( new FacebookStrategy({
  clientID: auth.facebookClientID,
  clientSecret: auth.facebookClientSecret,
  callbackURL: '/auth/facebook/callback'
},
async (accessToken,refreshToken, profile, done) => {
const CreateFacebookUser = new FacebookUser({
  facebookId: profile.id
})
const result = await CreateFacebookUser.save()
 console.log(result )
 }
))

//INSTAGRAM oauth
//
// passport.use( new InstagramStrategy({
//   clientID: auth.instagramClientID,
//   clientSecret: auth.instagramClientSecret,
//   callbackURL: '/auth/instagram/callback'
// },
// (accessToken, refreshToken, profile, done) => {
//    new InstagramUser({
//      instagramId: profile.id
//    }).save().then(user => console.log(user)).catch(err => console.log(err))
// }))
