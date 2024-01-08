import { Request, Response } from 'express';

class ExampleController {
  getExample( req: Request, res: Response ): void {
    console.log( "Authorized Mijo!" );
    res.status(200).json( { message: 'Example route accessed successfully' } );
  }
}

export const examplee= async ( req: Request, res: Response ): Promise<void> => {
    try {                       
        console.log( "Authorized Mijo!" );
        res.status(200).json( { message: 'Example route accessed successfully' } );
    } catch ( error ) {
        console.error('Error fetching examplee:', error );
        res.status(500).json( { error: 'Internal Server Error' } );        
    }
  }


// export const examplee: any= new ExampleController();
