import dotenv from 'dotenv'
import UserModel from '../model/User';

dotenv.config();

/**
 * type Coordinates
 * name: string // Название города
 * local_names: obj // Локальное название
 * lat: number // широта
 * lon: number // долгота
 * country: string // Название страны 
 * state: string // область
 */
type Coordinates = {
  name: string;
  local_names: {
    [key: string]: string;
  },
  lat: number;
  lon: number;
  country: string;
  state: string;
}



export default class WeatherController {
  // @ts-ignore
  async getWeather(req, res) {
    try {
      const auth = req.headers.authorization;
      const getСoordinates: Coordinates[] = await WeatherController.getApiCity(req.body.city).then((result) => result.json());
      const responseApi = await WeatherController.getApiWeather(getСoordinates[0].lat, getСoordinates[0].lon).then((result) => result.json());
      const response = {
        city: req.body.city,
        temp: responseApi?.main?.temp,
        wind: responseApi?.wind?.speed,
        rainfall: responseApi?.clouds?.all,
      } 
      
      const user = await UserModel.findOne({email: auth});
      user?.weatherHistory.push(response);
      await user?.save();
      return res.json(response);
    } catch {
      return res.status(500).json({message: 'Error'});
    }
  }

  static async getApiWeather(lat: number, lon: number) {
    return await fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${lat}&lon=${lon}&appid=${process.env.API_WEATHER_KEY}&lang=ru`);
  }

  static async getApiCity(city: string, limit=1) {
    return await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${process.env.API_WEATHER_KEY}`);
  }
}
