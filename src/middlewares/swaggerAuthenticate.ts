import { Request, Response, NextFunction } from 'express';

const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const apiKey = req.header('x-api-key');
  const secretKey = process.env.X_API_KEY;

  if ( !apiKey || apiKey !== secretKey ) {
    console.log( "No parceeero, incorrecto!" );
    res.status(401).json( { message: 'Unauthorized' } );
  } else {
    next();
  }
};

export default authenticate;
