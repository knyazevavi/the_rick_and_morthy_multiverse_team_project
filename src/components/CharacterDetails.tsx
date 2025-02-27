import { Box, Button, Typography } from "@mui/material";

import { Character } from "../shared/types/types";

interface CharacterProps {
  character: Character;
}

const backHandler = () => {
  history.back();
};

const CharacterDetails = ({ character }: CharacterProps) => {
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

export default CharacterDetails;
