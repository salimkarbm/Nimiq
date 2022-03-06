"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
//import image routes
const index_1 = __importDefault(require("./routes/index"));
//Get current woking directory
const appdir = process.cwd();
//initialised express
const app = (0, express_1.default)();
//middlewares
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(appdir, '/views'));
app.use(express_1.default.static(`assets`));
//image route middleware
app.use('/api/v1', index_1.default);
//create port
const PORT = 3000;
//lisyen for server connection on port
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
exports.default = app;
