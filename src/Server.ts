import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import express, { Request, Response, NextFunction } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import BaseRouter from './routes'
import logger from '@common/helpers/Logger/Logger'

// Initialise express
const app = express();



/************************************
 *      Express basic settings
 ************************************/

app.use(express.json()); // recognize incoming request Object as JSON Object.
app.use(express.urlencoded()); // Recognize incoming Request Object as strings or arrays.
app.use(cookieParser());
app.use('/api', BaseRouter);
if (process.env.NODE_ENV === 'development') app.use(morgan('dev')); // Loging routes [DEV]

if (process.env.NODE_ENV === 'production') app.use(helmet()); // Security [PRODUCTION]

// Add APIs


// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
      error: err.message,
  });
});


export default app




