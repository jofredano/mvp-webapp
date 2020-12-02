import { RequestHandler } from 'express';
import { addUserService, getUserService } from '../services';
import { UserModel } from '../models/mysql';
import { getWebsocketServer } from '../utils';

/**
 * @summary This method allow to create a new user
 * @param request  Request instance
 * @param response  Response instance
 * @param next  Next method (middleware)
 */
export const addUserController: RequestHandler = async ( request, response, next ) => {
    try {
        const userData: any = request.body;
        const result: any = await addUserService( new UserModel( {
            fullName: userData.basic.name,
            birthDate: userData.basic.birthday,
            username: userData.user.name,
            password: userData.user.password,
            email: userData.user.email
        } ) );
        if (result.userId) {
            userData.user.id = result.userId;
            getWebsocketServer().emit( 'new_user', userData );
        }
        response.status( 200 ).json( userData );
    } catch (e) {
        response.status( 500 ).json( { message: e.message } );
    }
};

/**
 * @summary This method allow to get a list of users
 * @param request  Request instance
 * @param response  Response instance
 * @param next  Next method (middleware)
 */
export const getUserController: RequestHandler = async ( request, response, next) => {
    try {
        const filter: any = request.body;
        const result: any = await getUserService( filter );
        response.status( 200 ).json( result );
    } catch (e) {
        response.status( 500 ).json( { message: e.message } );
    }
};