import { TextField, Button, Container, Typography, Box } from "@mui/material";

const LoginForm = () => {
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
        <TextField margin="dense" fullWidth label="Email Address" />
        <TextField margin="dense" fullWidth label="Password" type="password" />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, background: "#7f9df6" }}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
