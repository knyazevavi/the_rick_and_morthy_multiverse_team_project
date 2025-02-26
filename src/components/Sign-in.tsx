import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../hooks.ts";
import { FormWrapper } from "./formWrapper.tsx";
import { signInSchema } from "../schema/sign-in.ts";
import { EMAIL, PASSWORD, PATH } from "../shared/constants/constants.ts";
import { LoginFormData } from "../shared/types/types.ts";
import { signin } from "../store/userSlice.ts";

export const LoginForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(signInSchema),
    mode: "onChange",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = (data: LoginFormData) => {
    const { email, password } = data;
    const userData = localStorage.getItem(email);

    if (!userData) {
      setError(EMAIL, {
        type: "manual",
        message: "Invalid email or password",
      });
      return;
    }

    if (JSON.parse(userData).password !== password) {
      setError(PASSWORD, {
        type: "manual",
        message: "Invalid email or password",
      });
      return;
    }

    if (email.trim() && password.trim()) {
      dispatch(signin(JSON.parse(userData).username));
    }
    navigate(PATH.home);
  };
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          margin="dense"
          fullWidth
          name={EMAIL}
          {...register(EMAIL)}
          label="Email Address"
          error={!!errors.email}
          helperText={errors.email?.message || ""}
        />
        <TextField
          margin="dense"
          fullWidth
          name={PASSWORD}
          label={PASSWORD}
          type={PASSWORD}
          {...register(PASSWORD)}
          error={!!errors.password}
          helperText={errors.password?.message || ""}
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 2, background: "#7f9df6" }}
        >
          Sign In
        </Button>
      </form>
    </FormWrapper>
  );
};
