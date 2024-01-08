import { Request, Response } from 'express';

export const otherr= async ( req: Request, res: Response ): Promise<void> => { 
    try {
        const param1 = req.params.param1 as string;
        const param2 = req.query.param2 as string || "default";
        console.log( "Acá están!", param1, param2 );

        res.status(200).json( { message: 'En el "otherr" endpoint!!', param1: param1, param2: param2 } );

    } catch ( error ) {
        console.error('Error fetching otherr:', error );
        res.status(500).json( { error: 'Internal Server Error' } );        
    }
  }