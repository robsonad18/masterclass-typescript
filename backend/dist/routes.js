"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./controllers/UserController"));
var routes = express_1.Router();
routes.get('/users', UserController_1.default.index);
routes.post('/users', UserController_1.default.create);
routes.get('/', function (req, res) {
    return res.send('Hello World');
});
exports.default = routes;
