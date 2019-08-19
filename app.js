import 'dotenv/config';
import express from 'express';
import logger from 'morgan';
import { apiRouter } from './api/route'

// import {
//   defaultRouter, userRouter, carRouter, orderRouter
// } from './server/routes';


const app = express();
app.use(logger('dev'));

app.use(express.json());
app.use(apiRouter);



const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Server is live on PORT ${port}`);
});

export default app;