import express from 'express';
import { Request, Response } from 'express';
import { examplee } from '../controllers/exampleController';
import routeOtherr from './otherr_params';
import routeAnotherr from './anotherr_body';
import swaggerAuthenticate from '../middlewares/swaggerAuthenticate';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swaggerDocument';

const router = express.Router();

// Swagger setup
router.use( '/api-docs', swaggerUi.serve, swaggerUi.setup( swaggerDocument ) );

// This is the protected route, that's why it's neccessary to call the 'authenticate' function
router.get( '/example', swaggerAuthenticate, examplee );

// This is NOT a protected route, but it has params in the request
router.use( '/other', routeOtherr );

// This is NOT a protected route, but it has body in the request
router.use( '/another', routeAnotherr );

export default router;
