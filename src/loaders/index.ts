import expressLoader from './l.express.loader';
import sequelizeLoader from './l.sequelize.loader';
import websocketLoader from './l.websocket.loader';

export default async ( { expressApp, httpListener }: any ) => {
    await expressLoader( { app: expressApp } );
    console.log( 'Loaded express....' );

    await sequelizeLoader();
    console.log( 'Loaded mysql sequelize....' );

    await websocketLoader( { httpListener } );
    console.log( 'Loaded websocket....' );
};