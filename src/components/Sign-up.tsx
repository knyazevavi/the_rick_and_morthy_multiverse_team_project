import { TextField, Button, Typography } from "@mui/material";
import { signup } from "../store/userSlice.ts";
import { useAppDispatch } from "../hooks.ts";

import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { RegistrationFormData } from "../shared/types/types.ts";
import {
  EMAIL,
  PASSWORD,
  PATH,
  USERNAME,
} from "../shared/constants/constants.ts";

import { FormWrapper } from "./formWrapper.tsx";
import { signUpSchema } from "../schema/sign-up.ts";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(signUpSchema),
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
          name={EMAIL}
          label="Email Address"
          {...register(EMAIL)}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          margin="dense"
          fullWidth
          label={USERNAME}
          {...register(USERNAME)}
          error={!!errors.username}
          helperText={errors.username?.message || ""}
        />
        <TextField
          margin="dense"
          fullWidth
          name={PASSWORD}
          label={PASSWORD}
          type={PASSWORD}
          {...register(PASSWORD)}
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
