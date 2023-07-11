import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  width: string;
  height: string;
};
