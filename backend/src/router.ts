import Router from 'express';
import UserController from './user/UserController';
import FrontController from './api/FrontController';
import WeatherController from './api/WeatherApi';
import { rateLimit } from 'express-rate-limit';
import express from 'express';

const limiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 15 minutes
	max: 15, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skip: (req) => {
    return typeof req.headers.authorization === 'string';
  }, // Заглушка для авторизации
  message: async () => {
    return 'You can only make 15 requests every hour.'
	}
});

const userController = new UserController();
const weatherController = new WeatherController();
const frontController = new FrontController();

const routerApi = Router();
routerApi.post('/login', userController.login);
routerApi.post('/registration', userController.registration);
routerApi.get('/profile', userController.getUser);

routerApi.post('/weather',  limiter, weatherController.getWeather);

// const frontApi = Router();
// frontApi.get('', )

export {
  routerApi,
  // frontApi,
}