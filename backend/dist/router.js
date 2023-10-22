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
exports.routerApi = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("./user/UserController"));
const FrontController_1 = __importDefault(require("./api/FrontController"));
const WeatherApi_1 = __importDefault(require("./api/WeatherApi"));
const express_rate_limit_1 = require("express-rate-limit");
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 60 * 60 * 1000,
    max: 15,
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
        return typeof req.headers.authorization === 'string';
    },
    message: () => __awaiter(void 0, void 0, void 0, function* () {
        return 'You can only make 15 requests every hour.';
    })
});
const userController = new UserController_1.default();
const weatherController = new WeatherApi_1.default();
const frontController = new FrontController_1.default();
const routerApi = (0, express_1.default)();
exports.routerApi = routerApi;
routerApi.post('/login', userController.login);
routerApi.post('/registration', userController.registration);
routerApi.get('/profile', userController.getUser);
routerApi.post('/weather', limiter, weatherController.getWeather);
