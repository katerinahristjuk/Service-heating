const express = require('express');
const api = express();
const controller = require('../../controllers/interventionsController');
const mongoose = require('mongoose');
const cors= require('cors');
const config = require ('../../config/index');

api.use(express.json());
api.use(cors());

const domain = '/service-heating/api/v1/interventions'

api.get(`${domain}/`, controller.fetchAll)
api.post(`${domain}/request`, controller.post)
api.get(`${domain}/:orderId`, controller.fetchOne)
api.delete(`${domain}/:orderId/delete`, controller.delete)

const CONNECTION_URL = `mongodb+srv://${config.get('db').username}:${config.get('db').password}@cluster0.yyofs.mongodb.net/${config.get('db').collection}?retryWrites=true&w=majority`;   
const PORT = process.env.PORT || config.get('ports').interventions
    
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then (() => console.log('Connected to database!'))
    .then(() => api.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error)=> console.log('Could not connect to DB :( ', error.message))
    
mongoose.set('useFindAndModify', false);


