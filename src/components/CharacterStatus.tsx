import { Box, Typography } from "@mui/material";

import { getStatusColor } from "../shared/lib/getStatusColor";
import { CharacterStatusProps } from "../shared/types/types";

export const CharacterStatus = ({ status, species }: CharacterStatusProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, margin: "10px" }}>
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          bgcolor: getStatusColor(status),
        }}
      />
      <Typography variant="body1">
        {status} - {species}
      </Typography>
    </Box>
  );
};
