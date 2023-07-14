import { useAppDispatch } from "@/hooks";
import { toggleLoginModal } from "@/redux/features";
import { forgotPasswordFormValidation } from "@/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const useForgotPasswordForm = () => {
  const dispatch = useAppDispatch();
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
    console.log(data);
  };

  const showLoginModal = () => {
    dispatch(toggleLoginModal());
  };

  return { form, handleSubmit, errors, onSubmit, showLoginModal };
};

export default useForgotPasswordForm;
