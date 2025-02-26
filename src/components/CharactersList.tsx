import { Box } from "@mui/material";
import { CharacterItemSearch } from "./CharacterItemSearch";
import Grid from "@mui/material/Grid2";
import { v4 as uuidv4 } from "uuid";
import { CharactersListProps } from "../shared/types/types";
import { useCharacterNavigation } from "../hooks/useCharacterNavigation";

export const CharactersList = ({ characters }: CharactersListProps) => {
  const navigate = useCharacterNavigation();
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
            onClick={() => navigate(character.id)}
          >
            <CharacterItemSearch character={character} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
