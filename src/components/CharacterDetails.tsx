import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { CardProps } from "../shared/types/types";

export const CharacterDetails = ({ character }: CardProps) => {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <Box>
      <Button variant="text" sx={{ color: "white" }} onClick={backHandler}>
        Back
      </Button>
      <Typography variant="h3" sx={{ color: "white" }}>
        {character.name}
      </Typography>
      <img src={character.image} alt={character.name} />
      <Typography variant="body1">Status: {character.status}</Typography>
      <Typography variant="body1">Species: {character.species}</Typography>
      <Typography variant="body1">Gender: {character.gender}</Typography>
      <Typography variant="body1">From: {character.origin.name}</Typography>
      <Typography variant="body1">
        Location: {character.location.name}
      </Typography>
    </Box>
  );
};
