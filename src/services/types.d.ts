export type RegisterDataTypes = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type LoginDataTypes = {
  user: string;
  password: string;
  remember_me?: boolean;
};

export type ForgotPasswordType = {
  email: string;
};
