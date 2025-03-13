import { Typography, Container, Box } from "@mui/material";
import { useEffect } from "react";

import { Search } from "../components/Search";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addUserHistoryList } from "../store/historySlice";
import { selectUser } from "../store/selectors/userSelectors";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { username } = useAppSelector(selectUser);

  useEffect(() => {
    if (username) dispatch(addUserHistoryList(username));
  }, [username, dispatch]);

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
      <Box sx={{ width: "100%", maxWidth: 600, my: 4, margin: "0 auto" }}>
        <Search />
      </Box>
    </Container>
  );
};
