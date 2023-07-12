import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidation } from "@/schemas";
import { UserInput } from "./types";
import { useAppDispatch } from "@/hooks";
import { toggleSignUpModal } from "@/redux/features";

const useLoginForm = () => {
  const dispatch = useAppDispatch();
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

  const showSignUpModal = () => {
    dispatch(toggleSignUpModal());
  };

  const onSubmit = (data: UserInput) => {
    console.log(data);
  };

  return { form, handleSubmit, errors, onSubmit, showSignUpModal };
};

export default useLoginForm;
