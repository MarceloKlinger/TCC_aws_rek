require('dotenv').config();
import express from 'express';
import next from 'next';
import router from './router'
import { initialise } from './faceRekognition'

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, xPoweredBy: false });
const handle = nextApp.getRequestHandler();

const port = 3000;

nextApp.prepare().then(async () => {
  const app = express();
  router(app);
  app.get('*', (req, res) => {
    res.removeHeader('X-Powered-By');
    return handle(req, res);
  });
  await initialise();
  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port}`);
  });
});
