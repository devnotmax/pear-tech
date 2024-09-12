export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginError {
  email?: string;
  password?: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface IRegisterError {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
}
