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
const User_1 = __importDefault(require("../model/User"));
class UserController {
    // @ts-ignore
    registration(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield User_1.default.create({ email, password });
                return res.json({
                    accessToken: email
                });
            }
            catch (_a) {
                return res.status(500).json({ message: 'Error' });
            }
        });
    }
    // @ts-ignore
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield User_1.default.findOne({ email, password });
                return res.json({
                    accessToken: user === null || user === void 0 ? void 0 : user.get('email')
                });
            }
            catch (_a) {
                return res.status(500).json({ message: 'Error' });
            }
        });
    }
    // @ts-ignore
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const auth = req.headers.authorization;
                const user = yield User_1.default.findOne({ email: auth });
                return res.json({
                    email: user === null || user === void 0 ? void 0 : user.email,
                    weatherHistory: user === null || user === void 0 ? void 0 : user.weatherHistory,
                });
            }
            catch (e) {
                return res.status(500).json({ message: 'Error' });
            }
        });
    }
}
exports.default = UserController;
