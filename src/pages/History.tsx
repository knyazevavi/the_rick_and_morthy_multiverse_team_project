import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { CharacterItemDark } from "../components/CharacterItemDark.tsx";
import { useAppSelector } from "../hooks.ts";
import { Character } from "../shared/types/types";

export const History = () => {
  const dataHistory = useAppSelector((state) => state.history.history);

  if (dataHistory.length < 1)
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", fontSize: "1.5rem" }}
      >
        empty
      </Box>
    );

  return (
    <Container sx={{ mt: "50px" }}>
      <Box>
        <Grid container spacing={6}>
          {dataHistory.map((character: Character) => (
            <CharacterItemDark key={character.name} character={character} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
