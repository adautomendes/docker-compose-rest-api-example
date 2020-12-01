const Router = require('restify-router').Router;
const ResourceControllerV1 = require('./controllers/ResourceControllerV1');

const routerInstance = new Router();

routerInstance.get('/resource', ResourceControllerV1.search);

module.exports = routerInstance;