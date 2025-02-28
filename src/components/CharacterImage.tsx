import { Box } from "@mui/material";

import { CharacterImageProps } from "../shared/types/types";

export const CharacterImage = ({ image, name }: CharacterImageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: 150,
          height: 200,
          objectFit: "cover",
          borderRadius: 2,
          border: "2px solid",
          borderColor: "grey.300",
        }}
      />
    </Box>
  );
};
