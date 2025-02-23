import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { signup } from "../store/userSlice.ts";
import { useAppDispatch } from "../hooks.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const navigate = useNavigate();

  const handleRegistration = () => {
    if (email.trim() && password.trim()) {
      dispatch(signup({ email, password, username }));
    }

    navigate("/");
  };
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "#474f63",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Registration
        </Typography>
        <TextField
          margin="dense"
          fullWidth
          label="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          fullWidth
          label="username"
          onChange={(e) => setusername(e.target.value)}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, background: "#7f9df6" }}
          onClick={handleRegistration}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
