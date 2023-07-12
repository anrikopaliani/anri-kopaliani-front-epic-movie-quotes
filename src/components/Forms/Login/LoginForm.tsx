import { FormProvider } from "react-hook-form";
import { GoogleIcon, Input } from "@/components";
import { useLoginForm } from "@/hooks";

const LoginForm = () => {
  const { form, errors, onSubmit, handleSubmit } = useLoginForm();
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
        <button
          type="submit"
          className="mt-9 h-9 rounded bg-red w-full  text-center"
        >
          Sign in
        </button>
        <button
          type="button"
          className="w-full  border border-white rounded mt-4 h-9 flex items-center justify-center"
        >
          <GoogleIcon /> <span className="pl-2">Sign up with Google</span>
        </button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
