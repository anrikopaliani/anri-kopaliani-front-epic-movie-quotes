import * as Yup from "yup";

export const signUpFormValidation = Yup.object({
  name: Yup.string()
    .required("name is required")
    .min(3, "name should be at least 3 characters long")
    .max(15, "name shouldn't be more than 15 characters long"),
  email: Yup.string()
    .required("email is required")
    .email("email format is required"),
  password: Yup.string()
    .required("password is required")
    .min(8, "password should be at least 8 characters long")
    .max(15, "password shouldn't be more than 15 characters long"),
  confirm_password: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});
