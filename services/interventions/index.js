const express = require('express');
const api = express();
const controller = require('../../controllers/interventionsController');
const mongoose = require('mongoose');
const cors= require('cors');
// const jwt = require('express-jwt')

api.use(express.json());
api.use(cors());


// api.use(jwt({secret: 'secret_key', algorithms: ['HS256']}));

// api.use(jwt({
//     secret: 'secret_key',
//     algorithms: ['HS256']
// }).unless({ path: '/api/v1/users' }));

const domain = '/service-heating/api/v1'
//da se stavi vo config

api.get(`${domain}/active-interventions`, controller.fetchAll)
api.post(`${domain}/request`, controller.post)
api.get(`${domain}/active-interventions/:orderId`, controller.fetchOne)
api.delete(`${domain}/active-interventions/:orderId/delete`, controller.delete)

const CONNECTION_URL = 'mongodb+srv://KaterinaH:KaterinaH123@cluster0.yyofs.mongodb.net/service?retryWrites=true&w=majority';   
const PORT = process.env.PORT || 7002
    
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then (() => console.log('Connected to database!'))
    .then(() => api.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error)=> console.log('Could not connect to DB :( ', error.message))
    
mongoose.set('useFindAndModify', false);


