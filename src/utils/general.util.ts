
/**
 * @owner Jose Freddy Angulo Ortega
 * @summary Este metodo sirve para poner valores por defecto...
 * @param value Valor de la variable
 * @param ref Valor por defecto a poner
 */
export const utilNvl = ( value: any, ref: any ) => {
    if (!value || value === null) {
        return ref;
    } else {
        return value;
    }
};