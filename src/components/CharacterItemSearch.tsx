import { Paper } from "@mui/material";

import { CharacterImage } from "./CharacterImage";
import { CharacterInfo } from "./CharacterInfo";
import { CardProps } from "../shared/types/types";

export const CharacterItemSearch = ({ character }: CardProps) => {
  const { name, image } = character;

  return (
    <Paper
      elevation={6}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 2fr" },
        gap: 3,
        p: 3,
        borderRadius: 3,
        boxShadow: 4,
        bgcolor: "background.paper",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
        cursor: "pointer",
      }}
    >
      <CharacterImage image={image} name={name} />
      <CharacterInfo character={character} />
    </Paper>
  );
};
