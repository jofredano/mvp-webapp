import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from '../config';
import routes from '../api';

export default ({ app }: { app: express.Application }) => {
    app.use( cors() );
    app.use( bodyParser.json() );
    app.use( config.API.CONTEXT, routes() );
};