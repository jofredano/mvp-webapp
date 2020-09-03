import { Router } from "express";

const route = Router();
export default ( app: Router ) => {
    app.use('/users', route);
    route.get('/list', ( req, res ) => { 
        res.status( 200 ).send( { status: 200, message: 'Un servicio diferente de usuarios' } );
    } );
};