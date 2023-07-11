import { Input } from "@/components";
import { Google } from "@/components";
import React from "react";

const SignUpForm = () => {
  return (
    <form className="text-white w-360">
      <Input
        label="Name"
        name="name"
        placeholder="At least 3 & max.15 lower case characters"
      />
      <Input label="Email" name="email" placeholder="Enter your email" />
      <Input
        type="password"
        label="Password"
        name="password"
        placeholder="At least 8 & max.15 lower case characters"
      />
      <Input
        type="password"
        label="Confirm password"
        name="confirm password"
        placeholder="Confirm password"
      />
      <button
        type="submit"
        className="mt-4 h-9 rounded bg-red w-full text-center"
      >
        Get Started
      </button>
      <button
        type="button"
        className="w-full border border-white rounded mt-4 h-9 flex items-center justify-center"
      >
        <Google /> <span className="pl-2">Sign up with Google</span>
      </button>
      <p className="w-full mt-8 text-center">Already have an account? Log in</p>
    </form>
  );
};

export default SignUpForm;
