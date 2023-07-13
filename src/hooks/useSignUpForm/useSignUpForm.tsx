import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidation } from "@/schemas";
import { UserInput } from "./types";
import { useAppDispatch } from "@/hooks";
import { toggleLoginModal } from "@/redux/features";

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

  const onSubmit = (data: UserInput) => {
    console.log(data);
  };

  return { form, handleSubmit, errors, onSubmit, showLoginModal };
};

export default useSignUpForm;
