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
const sharp_1 = __importDefault(require("sharp"));
const filepath_1 = __importDefault(require("./filepath"));
//function to resize image
const resizeImage = (imageName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingImgPath = `${filepath_1.default.existingImgPath}/${imageName}.jpeg`;
        const generatedImgPath = `${filepath_1.default.generatedImgPath}/${imageName}_${width}_${height}.jpeg`;
        //resize image and store image in new directory path
        yield (0, sharp_1.default)(existingImgPath)
            .resize(width, height)
            .toFile(generatedImgPath);
    }
    catch (err) {
        console.error(err);
    }
});
exports.default = { resizeImage };
