import { Typography, Container, Button } from "@mui/material";
export const Home = () => {
  return (
    <Container sx={{ width: "100%" }}>
      <Typography variant="h3" sx={{ textAlign: "center", my: 4 }}>
        Welcome to the Multiverse of Rick and Morty!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          maxWidth: 800,
          mx: "auto",
          fontSize: "20px",
        }}
      >
        Dive into the infinite dimensions of madness and adventure! Explore
        detailed information about your favorite characters, bizarre creatures,
        aliens, and intergalactic troublemakers!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          paddingTop: "25px",
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        Start your interdimensional journey now!
      </Typography>
    </Container>
  );
};
