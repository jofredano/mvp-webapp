import { initWebsocketServer } from '../utils';

/**
 * @summary This method allow to init websocket
 */
export default async ( { httpListener }: any ) => {
    const ioServer: SocketIO.Server = initWebsocketServer( httpListener );
    ioServer.on('connection', async (websocketClient) => {
        console.log( websocketClient.id );
        console.log( websocketClient.handshake.query );
        websocketClient.on('disconnect', () => {
            console.info(`Client gone [id=${websocketClient.id}]`);
        } );
    } );
};