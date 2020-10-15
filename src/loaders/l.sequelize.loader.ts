import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { UserModel } from '../models/mysql';
import config from '../config';

/**
 * @summary This a method allow to load sequelize in the backend project
 *          default?
 */
export default async (): Promise<Sequelize> => {
    const configuration: SequelizeOptions = {
        dialect: 'mysql',
        host: config.DATABASE.HOST,
        username: config.DATABASE.USERNAME,
        password: config.DATABASE.PASSWORD,
        database: config.DATABASE.NAME,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    };

    const sequelizeConnection: Sequelize = new Sequelize( configuration );
    sequelizeConnection.addModels([
        UserModel
    ]);
    // sequelizeConnection.sync( { force: true } ); 
    return sequelizeConnection.sync( { force: true } ) ;
};
