import { Sequelize } from 'sequelize-typescript';
import { Email } from '../models/mysql';
import config from '../config';

export default async (): Promise<Sequelize> => {
    const databaseHost: string = config.DATABASE.HOST ? config.DATABASE.HOST : 'localhost';
    const databaseName: string = config.DATABASE.NAME ? config.DATABASE.NAME : 'test';
    const databaseUser: string = config.DATABASE.USERNAME ? config.DATABASE.USERNAME : 'admin';
    const databasePassword: string = config.DATABASE.PASSWORD ? config.DATABASE.PASSWORD : '123456';

    const configuration: any = {
        dialect: 'mysql',
        database: databaseName,
        host: databaseHost,
        username: databaseUser,
        password: databasePassword,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    };
    const sequelize: Sequelize = new Sequelize( configuration );
    sequelize.addModels( [ 
        Email
     ] );

    return sequelize;
};