import { useAppDispatch } from "@/hooks";
import { toggleLoginModal } from "@/redux/features";
import { forgotPasswordFormValidation } from "@/schemas";
import { forgotPassword } from "@/services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const useForgotPasswordForm = () => {
  const dispatch = useAppDispatch();
  const { mutate: forgotPasswordMutate } = useMutation(forgotPassword, {
    onSuccess: () => console.log("hello"),
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

  const onSubmit = (data: any) => {
    forgotPasswordMutate(data);
  };

  const showLoginModal = () => {
    dispatch(toggleLoginModal());
  };

  return { form, handleSubmit, errors, onSubmit, showLoginModal };
};

export default useForgotPasswordForm;
