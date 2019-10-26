
const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const config = require('./Config/key');


//DB URI CONNECTION
mongoose.connect(config.mongoURI, { useNewUrlParser: true } )
.then(()=> console.log('Connected to Database...'))
.catch( err => console.log(err))



const passport = require('passport')
const cookieSession = require('cookie-session')


require('./models/googleuser')

//COOKIE BASED SESSION
app.use(
  cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[config.cookieKey]
  })
)

//INITIATE THE PASSPORTJS
app.use(passport.initialize());
app.use(passport.session());



require('./Routes/authentication')(app)

const Port = process.env.PORT || 5000
app.listen(Port, () => console.log(`Listening to ${Port}...`) )
