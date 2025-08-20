const express = require('express');
const app = express();
const fs = require('fs');
const session = require('express-session');
app.use(session({
  secret: 'Hashim',
  name: 'Hashim',
  saveUninitialized: false,
  resave: true
  
}));

require('dotenv').config()

app.get('/',(req, res)=>{
  req.session.user = 'Asnl'
  res.send('Hey Friends')
  })
app.get('/home',(req, res)=>{
  res.send('Welcome Friends')
})


app.listen(`${process.env.PORT} `);