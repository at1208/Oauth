const express = require('express');
const app = express();
const mongoose  = require('mongoose');
require('./models/googleuser')
require('./models/facebookuser')
require('./models/instagramuser')
require('./services/passport')
require('./routes/authentication')(app)


mongoose.connect('mongodb://localhost:port/SignIN', { useNewUrlParser: true })
.then(()=> console.log('connected to mongodb'))
.catch((err) => console.log(err))

app.get('/', (req,res) => {
  res.send({ name: 'aman tiwari'})
});



const port = process.env.PORT || 3000
app.listen(port, () => console.log(`connected to ${port}`) )
