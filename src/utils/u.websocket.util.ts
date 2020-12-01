import io from 'socket.io';

let ioServer: SocketIO.Server;

/**
 * @summary This method allow to init websocket server instance
 * @param httpListener 
 */
export const initWebsocketServer = ( httpListener: any ) => {
    ioServer = io.listen( httpListener );
    return ioServer;
};

/**
 * @summary This method allow to get websocket server instance
 */
export const getWebsocketServer = (): SocketIO.Server => {
    if (!ioServer) throw new Error( 'Socket not initialized' );
    return ioServer;
};