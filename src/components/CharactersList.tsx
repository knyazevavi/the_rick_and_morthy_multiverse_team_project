import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { v4 as uuidv4 } from "uuid";

import { CharacterItemSearch } from "./CharacterItemSearch";
import { useCharacterNavigation } from "../hooks/useCharacterNavigation";
import { CharactersListProps } from "../shared/types/types";

export const CharactersList = ({ characters }: CharactersListProps) => {
  const navigate = useCharacterNavigation();
  const handleClick = (id: number) => {
    navigate(id);
  };
  return (
    <Box>
      <Grid container spacing={3} justifyContent="center">
        {characters.map((character) => (
          <Grid
            sx={{
              width: { xs: "100%", sm: "60%", md: "40%" },
              padding: 1,
              mt: "20px",
            }}
            key={uuidv4()}
            component="div"
            onClick={() => handleClick(character.id)}
          >
            <CharacterItemSearch character={character} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
