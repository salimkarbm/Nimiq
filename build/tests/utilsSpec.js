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
const sharp_1 = __importDefault(require("../utilities/sharp"));
describe('image', () => {
    it('it expects resizedImage() to resize image', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync(sharp_1.default.resizeImage('palmtunnel', 300, 200)).toBeResolved();
    }));
    it('it return error when an image that does not exist is passed', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync(sharp_1.default.resizeImage('image that does not exist', 300, 200)).toBeRejected();
        // .catch((err) => {
        //     console.log(err)
        //     expect(err.Error).toBe('Input file is missing');
        // });
    }));
});
