import { TextField, Button, Typography } from "@mui/material";
import { signup } from "../store/userSlice.ts";
import { useAppDispatch } from "../hooks.ts";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationFormData } from "../shared/types/types.ts";
import { PATH } from "../shared/constants/constants.ts";
import FormWrapper from "./formWrapper.tsx";
const schema = yup.object().shape({
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

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegistration = (data: RegistrationFormData) => {
    dispatch(signup(data));
    navigate(PATH.home);
  };
  return (
    <FormWrapper>
      <Typography variant="h5" gutterBottom>
        Registration
      </Typography>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <TextField
          margin="dense"
          fullWidth
          name="email"
          label="Email Address"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          margin="dense"
          fullWidth
          label="username"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message || ""}
        />
        <TextField
          margin="dense"
          fullWidth
          name="password"
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, background: "#7f9df6" }}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </FormWrapper>
  );
};

export default RegistrationForm;
