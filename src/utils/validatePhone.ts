export const validatePhone = (phone: string) => {
    //no puede estar vacio.
    if (!phone) return "El telefono es requerido";

    if(phone.length < 8) return "El telefono debe tener más de 8 digitos.";

    //Luego haremos otras para validar si el telefono ya existe en la BD

    return null;
}