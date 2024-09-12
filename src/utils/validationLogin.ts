import { ILogin, ILoginError } from "@/interfaces/Iauth";

export const validateLoginForm = (values: ILogin): ILoginError => {
    let errors: ILoginError = {}
    
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required";
    }

    return errors;
}