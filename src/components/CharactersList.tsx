import { Box } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { CharacterItemSearch } from "./CharacterItemSearch";
import { PATH } from "../shared/constants/constants";
import { CharactersListProps } from "../shared/types/types";

export const CharactersList = ({ characters }: CharactersListProps) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`${PATH.character}/${id}`);
  };
  return (
    <Box>
      <Grid2 container spacing={3} justifyContent="center">
        {characters.map((character) => (
          <Box
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
          </Box>
        ))}
      </Grid2>
    </Box>
  );
};
