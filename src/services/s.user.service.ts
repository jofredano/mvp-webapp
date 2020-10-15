import { UserModel } from '../models/mysql';

/**
 * @owner Jose Freddy Angulo Ortega
 * @summary This method allow to creare an user in the database
 * @param userModel User information
 */
export const addUserService: any = async ( userModel: UserModel ) => {
    // metodo (escribe en tres tablas diferentes)
    // proyecto
    // (1) impacto ambiental (tabla)
    // (*) impactos (favorables o no favorables) (fallo)
    // (*) medidas de mitigacion
    return await UserModel.create( userModel.get( { plain: true } ) );
};

/**
 * @owner Jose Freddy Angulo Ortega
 * @summary This method allow to get a list of users in the database
 * @param filter Filter information
 */
export const getUserService: any = async ( filter: Record<string, any> ) => {
    const argsWhere: any = getFilterUser( filter );
    const items: Array<any> = await UserModel.findAll( { where: argsWhere } );
    return items.map( item => {
        return {
            'username': item.username,
            'userId': item.userId,
            'fullName': item.fullName,
            'birthDate': item.birthDate
        };
    } );
};

const getFilterUser = ( filter: Record<string, any> ) => {
    const { username, fullName, birthDate, userId } = filter;

    const argsWhere: any = {};
    if (userId) {
        argsWhere.userId = userId;
    }
    if (username) {
        argsWhere.username = username;
    }
    if (fullName) {
        argsWhere.fullName = fullName;
    }
    if (birthDate) {
        argsWhere.birthDate = birthDate;
    }

    return argsWhere;
};