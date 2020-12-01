const restify = require('restify');
const resourceRouterV1 = require('./routerV1');
const server = restify.createServer();
const Logger = require('./logger')('SERVICE2');
require('dotenv').config();

resourceRouterV1.applyRoutes(server, '/service2/v1');

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.use(Logger.printRequest);

server.listen(process.env.PORT, function () {
    console.log("Service 2 running...");
});