import { Box, Typography } from "@mui/material";

import { getStatusColor } from "../shared/lib/getStatusColor";
import { CharacterInfoProps } from "../shared/types/types";

export const CharacterInfoHistFavor = ({ character }: CharacterInfoProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        component="h1"
        sx={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
      >
        {character.name}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            color: "#303030",
            width: 12,
            height: 12,
            borderRadius: "50%",
            bgcolor: getStatusColor(character.status),
          }}
        />
        <Typography component="h2" fontSize={"1.3rem"}>
          {character.status} - {character.species}
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{
          fontSize: "1.3rem",
          color: "rgb(171, 171, 171)",
          marginTop: "10px",
        }}
      >
        Gender:
      </Typography>

      <Typography component="h2" sx={{ fontSize: "1.4rem", color: "white" }}>
        {character.gender}
      </Typography>

      <Typography
        variant="caption"
        sx={{
          fontSize: "1.3rem",
          color: "rgb(171, 171, 171)",
          marginTop: "10px",
        }}
      >
        Last known location:
      </Typography>

      <Typography component="h2" sx={{ fontSize: "1.4rem", color: "white" }}>
        {character.location.name}
      </Typography>
    </Box>
  );
};
