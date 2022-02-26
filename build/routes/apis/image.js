"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../../utilities/index"));
const imageRoute = express_1.default.Router();
//fetch image with provide width and height
imageRoute.get('/image', (req, res) => {
    index_1.default.resizeImage('fjord.jpeg', 300, 200);
    res.send({ status: 200, message: 'success' });
});
exports.default = imageRoute;
