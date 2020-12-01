import { Op } from "sequelize";
import { Email } from "../models/mysql";

/**
 * @summary This method allow to get the list of emails
 * @param filter Filter information
 * @returns The Email passed as parameter
 */
export const getEmailsService: any = async ( filter: Record<string, any> ) => {
    const argsWhere: Record<string, any> = await getFilterService( filter );
    return await Email.findAll( { where: argsWhere, raw: true } );
};

/**
 * @summary This method allow to get the list of emails
 * @param idEmails Filter information
 * @returns Confirm if the update was applied
 */
export const updateEmailsSetStatusByLD: any = async ( idEmails: number[] ) => {
    const result = await updateEmailsService( 
        { idEmail: { [Op.in]: idEmails } },
        { status: 'PROCESSED' } );
    const response: string = (result)? 'OK': 'DOES NOT UPDATED';
    return response;
};

/**
 * @summary This method allow to update the list of emails
 * @param filter Filter information
 * @param entity Entity information
 * @returns The Email passed as parameter
 */
export const updateEmailsService: any = async ( filter: Record<string, any>, entity: Record<string, any> ) => {
    const argsWhere: Record<string, any> = await getFilterService( filter );
    const argsSetter: Record<string, any> = await getSetterService( entity );
    const result: any = await Email.update( argsSetter, { where: argsWhere } );
    return result[0] > 0;
};

/**
 * @summary This method allow to get filter to search
 * @param filter Filter information
 * @returns The Email passed as parameter
 */
const getSetterService: any = async ( filter: Record<string, any> ) => {
    const { status, idEmail, LD, to, from, subject, date } = filter;
    const argsSet: Record<string, any> = {};
    if (status) {
        argsSet.status = status;
    }
    if (idEmail) {
        argsSet.idEmail = idEmail;
    }
    if (LD) {
        argsSet.LD = LD;
    }
    if (to) {
        argsSet.to = to;
    }
    if (from) {
        argsSet.from = from;
    }
    if (subject) {
        argsSet.subject = subject;
    }
    if (date) {
        argsSet.date = date;
    }
    return argsSet;
};

/**
 * @summary This method allow to get filter to search
 * @param filter Filter information
 * @returns The Email passed as parameter
 */
const getFilterService: any = async ( filter: Record<string, any> ) => {
    const { status, idEmail, LD, to, from, subject, date } = filter;
    const argsWhere: Record<string, any> = {};
    if (status) {
        argsWhere.status = status;
    }
    if (idEmail) {
        argsWhere.idEmail = idEmail;
    }
    if (LD) {
        argsWhere.LD = LD;
    }
    if (to) {
        argsWhere.to = to;
    }
    if (from) {
        argsWhere.from = from;
    }
    if (subject) {
        argsWhere.subject = subject;
    }
    if (date) {
        argsWhere.date = date;
    }
    return argsWhere;
};