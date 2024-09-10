export interface ILoginForm {
    email: string;
    password: string;
}

export interface IOrder {
    id: number;
    status: string;
    date: string;
}
export interface IRegisterForm extends ILoginForm {
    name: string;
    phone: string;
    address: string;
    userId?: number;
    orders?: IOrder[];
}

export interface IuserSession {
    login: boolean;
    user: IRegisterForm;
    token: string;
}