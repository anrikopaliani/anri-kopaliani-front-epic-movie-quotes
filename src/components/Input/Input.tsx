import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { InputProps } from "./types";
import { InvalidIcon } from "@/components";

const Input: FC<InputProps> = ({
  label,
  placeholder,
  name,
  type = "text",
  error,
}) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col mt-5">
      <label htmlFor={name}>
        {label} <span className="text-red-500">*</span>
      </label>
      <div>
        <div className="relative">
          <input
            type={type}
            {...register(name)}
            placeholder={placeholder}
            name={name}
            id={name}
            className={`mt-2 h-9 w-full pl-2  bg-input rounded ${
              error ? "border-error border" : ""
            } text-black`}
          />
          {error && <InvalidIcon />}
        </div>
        {error && <p className=" absolute text-error text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
