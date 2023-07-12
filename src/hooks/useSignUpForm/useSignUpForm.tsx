import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidation } from "@/schemas";
import { UserInput } from "./types";

const useSignUpForm = () => {
  const form = useForm<UserInput>({
    mode: "all",
    resolver: yupResolver(signUpFormValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: UserInput) => {
    console.log(data);
  };

  return { form, handleSubmit, errors, onSubmit };
};

export default useSignUpForm;
