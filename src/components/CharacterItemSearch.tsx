import { Box, Typography, Paper } from "@mui/material";
import { getStatusColor } from "../shared/lib/getStatusColor";
import { CardProps } from "../shared/types/types";

export const CharacterItemSearch = ({ character }: CardProps) => {
  const { name, gender, image, species, type, status } = character;

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

        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, margin: "10px" }}
        >
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

        <Typography variant="body2" color="text.secondary">
          Gender: {gender}
        </Typography>

        {type && (
          <Typography variant="body2" color="text.secondary">
            Type: {type}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};
