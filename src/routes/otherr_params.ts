import express from 'express';
import { otherr } from '../controllers/otherController';

const routeOtherr = express.Router();

routeOtherr.get( '/:param1', otherr );

export default routeOtherr;