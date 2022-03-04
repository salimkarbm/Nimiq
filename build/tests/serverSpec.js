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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe('Test image endpoint', () => {
    it('it expects server to be running and return a status code of 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = (0, supertest_1.default)(server_1.default);
        const response = yield request.get('/api/v1/');
        expect(response.status).toEqual(200);
        expect(response.ok).toEqual(true);
    }));
    it('it expects to return error when url parameters are not specified', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = (0, supertest_1.default)(server_1.default);
        const response = yield request.get('/api/v1/image');
        expect(response.body.status).toEqual(404);
        expect(response.body).toBeInstanceOf(Object);
    }));
    it('it expects to return status code 200 when url parameters are define', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = (0, supertest_1.default)(server_1.default);
        const response = yield request.get('/api/v1/image?width=200&height=300&name=fjord');
        expect(response.body.status).toEqual(200);
        expect(response.body.message).toEqual('success');
        expect(response.body).toBeInstanceOf(Object);
    }));
    it('it return error when width or height is not specified', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = (0, supertest_1.default)(server_1.default);
        const response = yield request.get('/api/v1/image?width=200&height=&name=fjord');
        expect(response.body.status).toEqual(404);
        expect(response.body).toBeInstanceOf(Object);
    }));
    it('it return error when width or height parameters is not a number', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = (0, supertest_1.default)(server_1.default);
        const response = yield request.get('/api/v1/image?width=image&height=300&name=fjord');
        expect(response.body.status).toEqual(404);
        expect(response.body).toBeInstanceOf(Object);
    }));
});
