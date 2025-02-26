import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().email("Incorrect format").required("E-mail is required"),
  username: yup
    .string()
    .required("username is required")
    .min(1, "username must be at least 1 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters"),
});
