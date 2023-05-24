import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import errorHandler from './middlewares/error-handler.js';
import notFound from './middlewares/not-found.js';
import mongoose from 'mongoose';
import reservationRouter from './routes/reservation.js';
import customerRouter from './routes/customer.js';

const app = express();
app.use(cors());
dotenv.config();

app.get('/', (req, res) => {
  res.send('<h1>Restaurant Api</h1>');
});
app.use('/api/reservation', reservationRouter);
app.use('/api/customer', customerRouter);

app.use(errorHandler);
app.use(notFound);
app.use(express.json());

const port = process.env.PORT || 5002;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on ${port}...`));
    // mongoose.connect();
  } catch (error) {
    console.log(error);
  }
};

start();
