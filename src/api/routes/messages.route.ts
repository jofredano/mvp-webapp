import { Router } from "express";

const route = Router();
export default ( app: Router ) => {
    app.use('/messages', route);
    route.get('/list', ( req, res ) => { 
        res.status( 200 ).send( { status: 200, message: 'Un servicio diferente' } );
    } ); 
    route.post('/add', ( req, res ) => { 
        res.status( 200 ).send( { status: 200, message: 'Un servicio que agrega' } );
    } );
};