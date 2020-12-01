import { Router } from "express";
import { getWebsocketServer } from '../../utils';

const route = Router();
export default ( app: Router ) => {
    app.use('/users', route);
    route.post('/add', (req, res) => {
        const userInfo = req.body;
        getWebsocketServer().emit( 'new-user', userInfo );
        res.status( 200 ).send( { status: 200, message: 'Usuario creado con exito' } );
    } );
    route.get('/list', ( req, res ) => { 
        res.status( 200 ).send( { status: 200, message: 'Un servicio diferente de usuarios' } );
    } );
};