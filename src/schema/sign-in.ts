import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().email("Incorrect format").required("E-mail is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters"),
});
