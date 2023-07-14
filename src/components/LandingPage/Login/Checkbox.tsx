import { FC, memo } from "react";
import { CheckboxProps } from "./types";
import { useFormContext } from "react-hook-form";

const Checkbox: FC<CheckboxProps> = ({ label, name }) => {
  const { register } = useFormContext();
  return (
    <div className="flex items-center space-x-1">
      <input {...register(name)} type="checkbox" name={name} id={name} />
      <label htmlFor="remember_me">{label}</label>
    </div>
  );
};

export default memo(Checkbox);
