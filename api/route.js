import express from 'express';
import { inputValidation } from './api';

export const apiRouter = express.Router();

apiRouter.post('/post', inputValidation);