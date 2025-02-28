import { Box, Typography } from "@mui/material";

import { CharacterStatus } from "./CharacterStatus";
import { CharacterInfoProps } from "../shared/types/types";

export const CharacterInfo = ({ character }: CharacterInfoProps) => {
  const { name, gender, species, type, status } = character;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        {name}
      </Typography>

      <CharacterStatus status={status} species={species} />

      <Typography variant="body2" color="text.secondary">
        Gender: {gender}
      </Typography>

      {type && (
        <Typography variant="body2" color="text.secondary">
          Type: {type}
        </Typography>
      )}
    </Box>
  );
};
