const express = require ('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-8b444.mongodb.net:27017,cluster0-shard-00-01-8b444.mongodb.net:27017,cluster0-shard-00-02-8b444.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});
app.use(express.json());
app.use(routes); 

app.listen(3333);