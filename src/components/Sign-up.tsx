import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../hooks.ts";
import { FormWrapper } from "./formWrapper.tsx";
import { signUpSchema } from "../schema/sign-up.ts";
import { PATH, USER_ENTITIES } from "../shared/constants/constants.ts";
import { RegistrationFormData } from "../shared/types/types.ts";
import { signup } from "../store/userSlice.ts";

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
    <FormWrapper
      name={"Registration"}
      handler={handleSubmit(handleRegistration)}
    >
      <TextField
        margin="dense"
        fullWidth
        name={USER_ENTITIES.email}
        label="Email Address"
        {...register(USER_ENTITIES.email)}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        margin="dense"
        fullWidth
        label={USER_ENTITIES.username}
        {...register(USER_ENTITIES.username)}
        error={!!errors.username}
        helperText={errors.username?.message || ""}
      />
      <TextField
        margin="dense"
        fullWidth
        name={USER_ENTITIES.password}
        label={USER_ENTITIES.password}
        type={USER_ENTITIES.password}
        {...register(USER_ENTITIES.password)}
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
    </FormWrapper>
  );
};
