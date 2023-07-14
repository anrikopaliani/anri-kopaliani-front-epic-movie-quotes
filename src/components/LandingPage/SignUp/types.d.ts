export type SignUpModalProps = {
  signUpModal: boolean;
  signUpModalToggle: () => void;
};

export type UserInput = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
