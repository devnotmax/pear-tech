export const validateEmail = (email: string) => {
  //no puede estar vacio.
  if (!email) return "El email es requerido";

  //email invalido.
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    return "El email tiene un formato inválido";

  //Luego haremos otras para validar si el correo ya existe en la BD

  return null;
};
