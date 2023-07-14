import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidation } from "@/schemas";
import { UserInput } from "./types";
import { useAppDispatch } from "@/hooks";
import { toggleSignUpModal } from "@/redux/features";
import { useMutation } from "react-query";
import { loginUser } from "@/services";

const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const { mutate: loginUserMutate } = useMutation(loginUser, {
    onSuccess: () => console.log("hello wolrd"),
  });
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
    loginUserMutate(data);
  };

  return { form, handleSubmit, errors, onSubmit, showSignUpModal };
};

export default useLoginForm;
