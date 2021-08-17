const express = require('express');
const api = express();
const controller = require('../../controllers/usersController');
const mongoose = require('mongoose');
const cors= require('cors');
const config = require ('../../config/index');

api.use(express.json());
api.use(cors());

const domain = '/service-heating/api/v1'

api.get(`${domain}/users`, controller.fetchAll)
api.post(`${domain}/register`, controller.register)
api.post(`${domain}/login`, controller.login)
api.get(`${domain}/:id`, controller.fetchOne)
// api.patch(`${domain}/:id`, controller.update)
api.delete(`${domain}/:id`, controller.delete)

const CONNECTION_URL = `mongodb+srv://${config.get('db').username}:${config.get('db').password}@cluster0.yyofs.mongodb.net/${config.get('db').collection}?retryWrites=true&w=majority`;   
const PORT = process.env.PORT || config.get('ports').users;
    
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then (() => console.log('Connected to database!'))
    .then(() => api.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error)=> console.log('Could not connect to DB :( ', error.message))
    
mongoose.set('useFindAndModify', false);


