
/**
 * @owner Jose Freddy Angulo Ortega
 * @summary This method allow to get default value
 * @param value Value to check
 * @param ref Default value when (value parameter) is null or undefined
 */
export const utilNvl = ( value: any, ref: any ) => {
    if (!value || value === null) {
        return ref;
    } else {
        return value;
    }
};

/**
 * @owner Jose Freddy Angulo Ortega
 * @summary This method allow to execute a expression
 * @param expression Expression to execute
 * @param moduleName Module name
 * @param asynchronous This parameter defines if this steps must to run asynchronous
 */
export const applyExecuteUtil = async ( expression: any, moduleName: string, asynchronous: boolean ) => {
    if (checkTypeUtil(expression, 'string')) {
        const module = (!stringIsEmptyUtil( moduleName ))?require( `../${moduleName}`): null;
        const strExpression: string = prepareAsyncExecutionUtil( expression, module, asynchronous );
        const construct = 'constructor';
        const result = construct[ construct ][ construct ]( strExpression )( module );
        return result;
    } else {
        return expression();
    }
};

/**
 * @owner Jose Freddy Angulo Ortega
 * @summary This method allow to prepare a expression with async
 * @param expression Expression to execute
 */
const prepareAsyncExecutionUtil = ( expression: any, module: any, asynchronous: boolean ) => {
    const sentence: string = checkTypeUtil(expression, 'string')? String( expression ): '';
    const awaitExpression: string = (asynchronous)? 'await ': '';
    const cmd: string = (module !== null)? `return ${awaitExpression}moduleJSON.${sentence};` : `return ${awaitExpression}(${sentence});`;
    if (asynchronous) {
        return `return (async ( moduleJSON ) => { ${cmd} })( arguments[0] )`;
    } else {
        return `return (${cmd})( arguments[0] )`;
    }
};

/**
 * @owner Jose Freddy Angulo Ortega
 * @summary This method allow to check the type value
 * @param value Expression to check
 * @param type Type value expected
 */
export const checkTypeUtil = ( value: any, type: string ) => {
    const typeOfValue = (typeof value);
    const typeOfValueNew = (typeOfValue === 'object' && Array.isArray(value))?'array':typeOfValue;
    return (typeOfValueNew === type);
};

/**
 * @owner Jose Freddy Angulo Ortega
 * @summary This method allow to get the type value
 * @param value Expression to check
 */
export const getTypeUtil = ( value: any ) => {
    const typeOfValue = (typeof value);
    if (typeOfValue === 'object' && Array.isArray(value)) {
        return 'array';
    } else if (typeOfValue === 'object') {
        return 'json';
    } else {
        return typeOfValue;
    }
};

/**
 * @owner Jose Freddy Angulo Ortega
 * @summary This method allow to check if string is empty
 * @param text Expression to execute
 */
export const stringIsEmptyUtil = ( text: string ) => {
    return (!text || text.trim().length === 0);
};

/**
 * @owner Jose Freddy Angulo Ortega
 * @summary This method allow to convert any value to string
 * @param value Value to convert
 * @param type Type of data value
 * @param format Format to convert
 */
export const convertAnyToStringUtil = ( value: any, type: string, format: string = '' ) => {
    if (type === 'json' || type === 'array') {
        return JSON.stringify( value );
    } else {
        return String( value );
    }
};