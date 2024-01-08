import express from 'express';
import { anotherr } from '../controllers/anotherController';

const routeAnotherr = express.Router();

routeAnotherr.post( '/', anotherr );

export default routeAnotherr;