import { FormProvider } from "react-hook-form";
import { GoogleIcon, Input } from "@/components";
import useLoginForm from "./useLoginForm";
import Checkbox from "./Checkbox";

const LoginForm = () => {
  const {
    form,
    errors,
    onSubmit,
    handleSubmit,
    showSignUpModal,
    showForgotPasswordModal,
  } = useLoginForm();
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-360 text-white">
        <Input
          name="user"
          label="Email"
          placeholder="Enter your email"
          error={errors.user?.message}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          error={errors.password?.message}
        />

        <div className="flex justify-between items-center mt-5 mb-4">
          <Checkbox label="Remember me" name="remember_me" />
          <span
            onClick={showForgotPasswordModal}
            className="text-link underline hover:cursor-pointer pl-1"
          >
            Forgot password
          </span>
        </div>

        <button
          type="submit"
          className=" h-9 rounded bg-red w-full  text-center"
        >
          Sign in
        </button>

        <button
          type="button"
          className="w-full  border border-white rounded mt-4 h-9 flex items-center justify-center"
        >
          <GoogleIcon /> <span className="pl-2">Sign up with Google</span>
        </button>
        <p className="w-full text-center mt-8">
          Do not have an account?
          <span
            onClick={showSignUpModal}
            className="text-link underline hover:cursor-pointer pl-1"
          >
            Sign up
          </span>
        </p>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
