import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidation } from "@/schemas";
import { UserInput } from "./types";

const useLoginForm = () => {
  const form = useForm<UserInput>({
    mode: "all",
    resolver: yupResolver(loginFormValidation),
    defaultValues: {
      user: "",
      password: "",
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

export default useLoginForm;
