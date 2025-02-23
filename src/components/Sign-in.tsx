import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { signin } from "../store/userSlice.ts";
import { useState } from "react";
import { useAppDispatch } from "../hooks.ts";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    const userData = localStorage.getItem(email);

    if (!userData) {
      setError("Неверный email или пароль");
      return;
    }

    if (JSON.parse(userData).password !== password) {
      setError("Неверный email или пароль");
      return;
    }

    if (email.trim() && password.trim()) {
      dispatch(signin(email));
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
          Login
        </Typography>
        <TextField
          margin="dense"
          fullWidth
          label="Email Address"
          onChange={(e) => setUsername(e.target.value)}
          error={!!error}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          error={!!error}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, background: "#7f9df6" }}
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
