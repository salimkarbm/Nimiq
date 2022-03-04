"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import caching from caching
const caching_1 = __importDefault(require("../../utilities/caching"));
//import path from 'path';
const filepath_1 = __importDefault(require("../../utilities/filepath"));
const imageRoute = express_1.default.Router();
//fetch image with provide width and height
imageRoute.get('/image', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Get values from the request object
        const imageName = req.query.name;
        const width = parseInt(req.query.width, 10);
        const height = parseInt(req.query.height, 10);
        //check for available images
        if (filepath_1.default.availableImages.indexOf(imageName) === -1) {
            return res.send({
                status: 404,
                message: 'ops! sorry not included in the offered pictures please choose from [ fjord,encenadaport,palmtunnel,santamonica,icelandwaterfall]'
            });
        }
        //check if image detail are provided on the query parameters
        if (imageName === undefined ||
            width === undefined ||
            height === undefined) {
            return res.send({
                status: 404,
                message: 'query parameters cannot be empty'
            });
        }
        //check if width and height are specified
        if (Number.isNaN(width) || Number.isNaN(height)) {
            return res.send({
                status: 404,
                message: 'image width or height must be specified'
            });
        }
        //pass values to the resize function and resize the image
        const imagePath = yield caching_1.default.cachedImage(imageName, width, height);
        //send response
        return res.send({ status: 200, message: 'success', imagePath });
    }
    catch (err) {
        console.log(err);
    }
}));
exports.default = imageRoute;
