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
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./router");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
// constant
const PORT = 5000;
const uri = 'mongodb+srv://ivshavrin:uy5caME3Lta7oHS4@testvue.66gxr5q.mongodb.net/?retryWrites=true&w=majority';
// client init
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.raw());
app.use('/api', router_1.routerApi);
app.use(express_1.default.static(path_1.default.resolve(__dirname, 'public')));
app.get('*', (req, res) => res.sendFile(path_1.default.resolve(__dirname, 'public', 'index.html')));
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(uri);
            app.listen(PORT, () => {
                console.log('SERVER START');
            });
        }
        catch (_a) {
            yield mongoose_1.default.disconnect();
        }
    });
}
startApp();
