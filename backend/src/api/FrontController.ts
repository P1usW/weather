import path from 'path';

export default class ProductController {
  // @ts-ignore
  async getProduct(req, res) {
    try {
      return res.sendFile(path.join(__dirname, 'public', 'index.html'));
    } catch {
      return res.status(500).json({message: 'Error'});
    }
  }
}
