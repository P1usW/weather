import express from 'express';
import mongoose from "mongoose";
import {routerApi} from "./router";
import path from 'path';
import cors from 'cors';

// constant
const PORT = 5000;
const uri = 'mongodb+srv://ivshavrin:uy5caME3Lta7oHS4@testvue.66gxr5q.mongodb.net/?retryWrites=true&w=majority';

// client init
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use('/api', routerApi);
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

async function startApp() {
  try {
    await mongoose.connect(uri)
    app.listen(PORT, () => {
      console.log('SERVER START');
    });
  } catch {
    await mongoose.disconnect();
  }
}

startApp();


