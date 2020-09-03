import express from 'express';
import config from './config';

const startServer = async () => {
    const app = express();

    await require('./loaders').default( { expressApp: app } );

    app.listen( config.PORT, () => {
        console.log( `server started at http://localhost:${config.PORT}` );
        console.log( `smtp.host.host: ${config.SMTP.HOST}` );
        console.log( `smtp.host.port: ${config.SMTP.PORT}` );
    } );
};

startServer();
