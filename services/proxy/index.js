const express = require('express');
const proxy = require('express-http-proxy');
// const config = require ('../../config/index');

const app = express();

// 1 USERS:
app.use('/service-heating/api/v1', proxy(
    `http://localhost:7001/service-heating/api/v1`,
    { proxyReqPathResolver: (req) => {
        return `http://localhost:7001/service-heating/api/v1${req.url}`
    }}
));

//2 INTERVENTIONS:
app.use('/service-heating/api/v1', proxy(
    `http://localhost:7002/service-heating/api/v1`,
    { proxyReqPathResolver: (req) => {
        return `http://localhost:7002/service-heating/api/v1${req.url}`
    }}
));

// const PORT = process.env.PORT || config.get('ports').proxy;
const PORT = process.env.PORT || 7000;

app.listen(PORT, error => {
    if(error){
        return console.log(`Could not start proxy: ${err} :(`)
    }
    console.log(`Proxy service successfully started :) at: ${PORT}`);
})