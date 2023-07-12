import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidation } from "@/schemas";
import { submitDataTypes } from "./types";

const useLoginForm = () => {
  const form = useForm({
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

  const onSubmit = (data: submitDataTypes) => {
    console.log(data);
  };

  return { form, handleSubmit, errors, onSubmit };
};

export default useLoginForm;
