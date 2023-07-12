import { FormProvider } from "react-hook-form";
import { Input, GoogleIcon } from "@/components";
import { useSignUpForm } from "@/hooks";

const SignUpForm = () => {
  const { form, handleSubmit, onSubmit, errors } = useSignUpForm();
  return (
    <FormProvider {...form}>
      <form className="text-white w-360" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          name="name"
          placeholder="At least 3 & max.15 lower case characters"
          error={errors.name?.message}
        />
        <Input
          label="Email"
          name="email"
          placeholder="Enter your email"
          error={errors.email?.message}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="At least 8 & max.15 lower case characters"
          error={errors.password?.message}
        />
        <Input
          type="password"
          label="Confirm password"
          name="confirm_password"
          placeholder="Confirm password"
          error={errors.confirm_password?.message}
        />
        <button
          type="submit"
          className="mt-4 h-9 rounded bg-red w-full text-center"
        >
          Get Started
        </button>
        <button
          type="button"
          className="w-full  border border-white rounded mt-4 h-9 flex items-center justify-center"
        >
          <GoogleIcon /> <span className="pl-2">Sign up with Google</span>
        </button>
        <p className="w-full mt-8 text-center">
          Already have an account? Log in
        </p>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
