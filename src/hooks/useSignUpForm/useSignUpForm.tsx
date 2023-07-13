import axios from "@/services/axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidation } from "@/schemas";
import { UserInput } from "./types";
import { useAppDispatch } from "@/hooks";
import {
  toggleLoginModal,
  toggleConfirmationSentModal,
} from "@/redux/features";
import { useMutation } from "react-query";
import { registerUser } from "@/services";

const useSignUpForm = () => {
  const dispatch = useAppDispatch();
  const { mutate: registerUserMutate } = useMutation(registerUser, {
    onSuccess: () => {
      dispatch(toggleConfirmationSentModal());
    },
  });

  const form = useForm<UserInput>({
    mode: "all",
    resolver: yupResolver(signUpFormValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const showLoginModal = () => {
    dispatch(toggleLoginModal());
  };

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = async (data: UserInput) => {
    registerUserMutate(data);
  };

  return { form, handleSubmit, errors, onSubmit, showLoginModal };
};

export default useSignUpForm;
