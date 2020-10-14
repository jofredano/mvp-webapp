import expressLoader from './l.express.loader';
import sequelizeLoader from './l.sequelize.loader';

export default async ( { expressApp }: any ) => {
    await expressLoader( { app: expressApp } );
    console.log( 'Loading express....' );

    await sequelizeLoader();
    console.log( 'Loading sequelize mysql....' );
};