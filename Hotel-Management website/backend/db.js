const mongoose = require('mongoose');

var mongoURL = 'mongodb://localhost/local'
mongoose.connect(mongoURL , {useUnifiedTopology : true, useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongodb connection failed')
})

connection.on('connected',()=>{
    console.log('Mongodb connection successful')
})

module.exports = mongoose
