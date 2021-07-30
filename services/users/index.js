const express = require('express');
const api = express();
const controller = require('../../controllers/usersController');
const mongoose = require('mongoose');
// const jwt = require('express-jwt')

api.use(express.json());


// api.use(jwt({secret: 'secret_key', algorithms: ['HS256']}));

// api.use(jwt({
//     secret: 'secret_key',
//     algorithms: ['HS256']
// }).unless({ path: '/api/v1/users' }));

const domain = '/service-heating/api/v1'
//da se stavi vo config

api.get(`${domain}/`, controller.fetchAll)
api.post(`${domain}/`, controller.register)
api.get(`${domain}/:id`, controller.fetchOne)
api.patch(`${domain}/:id`, controller.update)
api.delete(`${domain}/:id`, controller.delete)

const CONNECTION_URL = 'mongodb+srv://KaterinaH:KaterinaH123@cluster0.yyofs.mongodb.net/service?retryWrites=true&w=majority';   
const PORT = process.env.PORT || 7001
    
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then (() => console.log('Connected to database!'))
    .then(() => api.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error)=> console.log('Could not connect to DB :( ', error.message))
    
mongoose.set('useFindAndModify', false);


