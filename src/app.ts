import express from 'express';

const app = express();
const port = 8081;

//Definir todas las rutas que se requieran establecer...
app.get( "/", ( req, res ) => { 
    res.status( 200 ).send( { status: 500, message: 'Esto es otra prueba mas para esta vuelta' } );
} );

app.get( "/message", ( req, res ) => { 
    res.status( 200 ).send( { status: 200, message: 'Un servicio diferente' } );
} );


//Definir el puerto por el cual la aplicacion atiende las peticiones...
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
