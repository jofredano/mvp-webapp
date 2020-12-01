import express from 'express';
import http from 'http';
import config from './config';

const startServer = async () => {
    const app = express();
    const listener = http.createServer( app );

    await require('./loaders').default( { expressApp: app, httpListener: listener } );

    listener.listen( config.PORT, () => {
        console.log( `server started at http://localhost:${config.PORT}` );
        console.log( `smtp.host.host: ${config.SMTP.HOST}` );
        console.log( `smtp.host.port: ${config.SMTP.PORT}` );
        console.log( `environment: ${config.ENVIRONMENT}` );
    } );
};

startServer();
