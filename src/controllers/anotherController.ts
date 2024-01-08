import { Request, Response } from 'express';

export const anotherr= async ( req: Request, res: Response ): Promise<void> => { 
    try {
        const { param1, param2 } = req.body;
        console.log( "Acá están del body!", param1, param2 );
        
        res.status(200).json( { message: 'En el "Anotherr" endpoint!!', param1: param1, param2: param2 } );

    } catch ( error ) {
        console.error('Error fetching anotherr:', error );
        res.status(500).json( { error: 'Internal Server Error' } );        
    }
  }