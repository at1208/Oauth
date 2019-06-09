const express = require('express');
const app = express();
const Authentication = require('./routes/authentication')



app.get('/', (req,res) => {
  res.send({ name: 'aman tiwari'})
});

Authentication(app);



const port = process.env.PORT || 3000
app.listen(port, () => console.log(`connected to ${port}`) )
