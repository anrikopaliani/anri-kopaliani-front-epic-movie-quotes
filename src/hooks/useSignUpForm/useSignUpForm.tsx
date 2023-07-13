import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidation } from "@/schemas";
import { UserInput } from "./types";
import { useAppDispatch } from "@/hooks";
import {
  toggleLoginModal,
  toggleConfirmationSentModal,
} from "@/redux/features";
import axios, { csrfToken } from "@/services/axios";

const useSignUpForm = () => {
  const dispatch = useAppDispatch();

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
    console.log(data);
    await csrfToken();
    const response = await axios.post("/register", data);
    if (response.status === 200) {
      dispatch(toggleConfirmationSentModal());
    }
  };

  return { form, handleSubmit, errors, onSubmit, showLoginModal };
};

export default useSignUpForm;
