const express = require('express');
const app = express();
const Authentication = require('./routes/authentication')
const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/startup')
.then(()=> console.log('connected to mongodb'))
.catch((err) => console.log(err))

app.get('/', (req,res) => {
  res.send({ name: 'aman tiwari'})
});

Authentication(app);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`connected to ${port}`) )
