import { TextField, Button, Typography } from "@mui/material";
import { signin } from "../store/userSlice.ts";
import { useAppDispatch } from "../hooks.ts";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { LoginFormData } from "../shared/types/types.ts";
import { PATH } from "../shared/constants/constants.ts";
import FormWrapper from "./formWrapper.tsx";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email("Incorrect format").required("E-mail is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters"),
});

const LoginForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = (data: LoginFormData) => {
    const { email, password } = data;
    const userData = localStorage.getItem(email);

    if (!userData) {
      setError("email", {
        type: "manual",
        message: "Invalid email or password",
      });
      return;
    }

    if (JSON.parse(userData).password !== password) {
      setError("password", {
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
          name="email"
          {...register("email")}
          label="Email Address"
          error={!!errors.email}
          helperText={errors.email?.message || ""}
        />
        <TextField
          margin="dense"
          fullWidth
          name="password"
          label="Password"
          type="password"
          {...register("password")}
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

export default LoginForm;
