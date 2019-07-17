const express = require('express');
const app = express();
const passport = require('passport')
const Config = require('./config/key');
const mongoose  = require('mongoose');
const CookieSession = require('cookie-session')
require('./models/googleuser')
require('./models/facebookuser')
require('./services/passport')
require('./routes/authentication')(app)


mongoose.connect(Config.mongoURI)
.then(()=> console.log('connected to mongodb'))
.catch((err) => console.log(err))

app.use(
  CookieSession({
    maxAge:30*24*60*60*1000,
    keys:[Config.cookieKey]
  })

)
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res) => {
  res.send({ name: 'aman tiwari'})
});



const port = process.env.PORT || 3000
app.listen(port, () => console.log(`connected to ${port}`) )
