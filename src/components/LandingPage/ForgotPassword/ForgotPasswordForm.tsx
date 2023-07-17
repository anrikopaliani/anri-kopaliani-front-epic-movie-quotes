import { FormProvider } from "react-hook-form";
import useForgotPasswordForm from "./useForgotPasswordForm";
import { Input, ArrowBackIcon } from "@/components";

const ForgotPasswordForm = () => {
  const { form, handleSubmit, errors, onSubmit, showLoginModal } =
    useForgotPasswordForm();
  return (
    <FormProvider {...form}>
      <form className="text-white w-360" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          label="Email"
          placeholder="Enter your email"
          error={errors.email?.message}
        />
        <button
          type="submit"
          className=" h-9 mt-8 rounded bg-red w-full  text-center"
        >
          Send instructions
        </button>
        <div className="w-full flex justify-center">
          <button
            onClick={showLoginModal}
            type="button"
            className="text-white flex items-center mt-8 space-x-2"
          >
            <ArrowBackIcon />
            <p className="text-subtitle">Back to log in</p>
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ForgotPasswordForm;
