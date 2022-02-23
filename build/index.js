"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import image routes
const index_1 = __importDefault(require("./routes/index"));
//initialised express
const app = (0, express_1.default)();
app.use('/api/v1/', index_1.default);
//create port
const PORT = 3000;
//lisyen for server connection on port
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
exports.default = app;
