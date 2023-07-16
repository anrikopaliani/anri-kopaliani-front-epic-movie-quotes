import { useAppDispatch } from "@/hooks";
import {
  toggleLoginModal,
  toggleResetPasswordEmailSent,
} from "@/redux/features";
import { forgotPasswordFormValidation } from "@/schemas";
import { forgotPassword } from "@/services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const useForgotPasswordForm = () => {
  const dispatch = useAppDispatch();
  const { mutate: forgotPasswordMutate } = useMutation(forgotPassword, {
    onSuccess: () => {
      dispatch(toggleResetPasswordEmailSent());
    },
  });

  const form = useForm({
    mode: "all",
    resolver: yupResolver(forgotPasswordFormValidation),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: { email: string }) => {
    forgotPasswordMutate(data);
  };

  const showLoginModal = () => {
    dispatch(toggleLoginModal());
  };

  return { form, handleSubmit, errors, onSubmit, showLoginModal };
};

export default useForgotPasswordForm;
