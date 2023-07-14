export type CheckboxProps = {
  label: string;
  name: string;
};

export type LoginModalProps = {
  loginModal: boolean;
  loginModalToggle: () => void;
};

export type UserInput = {
  user: string;
  password: string;
  remember_me: boolean;
};
