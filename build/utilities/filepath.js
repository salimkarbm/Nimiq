"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
//Get current working directory
const appdir = process.cwd();
const availableImages = [
    'fjord',
    'encenadaport',
    'palmtunnel',
    'santamonica',
    'icelandwaterfall'
];
//Get the path to the image file
const existingImgPath = path_1.default.join(appdir, `/assets/images`);
//get the path to where the new image will be stored
const generatedImgPath = path_1.default.join(appdir, `/assets/images/thumbnails`);
exports.default = {
    availableImages,
    existingImgPath,
    generatedImgPath
};
