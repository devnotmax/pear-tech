import { IRegister, IRegisterError } from "@/interfaces/Iauth";

export const validateRegisterForm = (values: IRegister): IRegisterError => {
  let errors: IRegisterError = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!values.address) {
    errors.address = "Address is required";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (!/^\d+$/.test(values.phone)) {
    errors.phone = "Phone must be a valid number";
  }

  return errors;
};
