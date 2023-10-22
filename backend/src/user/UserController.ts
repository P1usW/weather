import UserModel from '../model/User';

export default class UserController {
  // @ts-ignore
  async registration(req, res) {
    try {
      const {email, password} = req.body;
      const user = await UserModel.create({email, password});
      return res.json({
        accessToken: email
      })
    } catch {
      return res.status(500).json({message: 'Error'});
    }
  }

  // @ts-ignore
  async login(req, res) {
    try {
      const {email, password} = req.body;
      const user = await UserModel.findOne({email, password});
      return res.json({
        accessToken: user?.get('email')
      })
    } catch {
      return res.status(500).json({message: 'Error'});
    }
  }

  // @ts-ignore
  async getUser(req, res) {
    try {
      const auth = req.headers.authorization;
      const user = await UserModel.findOne({email: auth});
      return res.json({
        email: user?.email,
        weatherHistory: user?.weatherHistory,
      })
    } catch(e) {
      return res.status(500).json({message: 'Error'});
    }
  }
}