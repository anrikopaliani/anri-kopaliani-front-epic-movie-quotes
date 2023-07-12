import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({
  label,
  placeholder,
  name,
  type = "text",
  error,
}) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor={name}>
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        name={name}
        id={name}
        className="mt-2 h-9 pl-2 bg-input rounded text-black"
      />
      <p>{error}</p>
    </div>
  );
};

export default Input;
