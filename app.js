const express = require('express');
const { default: mongoose } = require('mongoose');
const route=require('./Routes/user');
const router = require('./Routes/Guryoroute');


const app=express();


app.use(express.json())
app.use('/',route)
app.use('/home',router)

const password = 'hayat123';
// Construct the connection string
const uri = `mongodb+srv://hayat:${password}@cluster0.yo08vqy.mongodb.net/test?retryWrites=true&w=majority`;
// Connect to the MongoDB Atlas cluster
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch(error => console.error('Error connecting to MongoDB Atlas:', error));

app.listen(2000)