export const validateName = (name: string) => {
  //nombre requerido.
  if (!name) return "El nombre es requerido";

  //El nombre debe tener mas de dos caracteres.
  if (name.length < 2) return "El nombre debe tener más de dos caracteres.";

  //El nombre solo debe contener letras y espacios.
  if (!/^[a-zA-Z\s]+$/.test(name))
    return "El nombre sólo debe contener letras y espacios.";

  //El nombre no puede tener 2 espacios consecutivos. "  "
  if (/\s{2,}/.test(name))
    return "El nombre no debe contener múltiples espacios consecutivos.";

  return null;
};
