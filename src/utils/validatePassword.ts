export const validatePassword = (password: string) => {
    //no puede estar vacio.
    if (!password) return "La contraseña es requerida";

    //demasiado corta
    if (password.length < 6) return "La contraseña debe tener más de 6 caracteres.";

    return null;
}