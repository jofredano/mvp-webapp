import expressLoader from './express.loader';

export default async ( { expressApp }: any ) => {
    await expressLoader( { app: expressApp } );
    console.log( 'Loading express....' );
};