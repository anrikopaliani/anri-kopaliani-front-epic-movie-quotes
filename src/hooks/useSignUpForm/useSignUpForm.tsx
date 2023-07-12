import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidation } from "@/schemas";
import { SubmitDataTypes } from "./types";

const useSignUpForm = () => {
  const form = useForm({
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

  const onSubmit = (data: SubmitDataTypes) => {
    console.log(data);
  };

  return { form, handleSubmit, errors, onSubmit };
};

export default useSignUpForm;
