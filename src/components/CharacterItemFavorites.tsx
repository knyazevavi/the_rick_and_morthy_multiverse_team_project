import { Box, Card, CardMedia, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import { CharacterInfoFavorites } from "../components/CharacterInfoFavorites";
import { CharacterInfoProps } from "../shared/types/types";
import { PATH } from "../shared/constants/constants";

export const CharacterItemFavorites = ({ character }: CharacterInfoProps) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`${PATH.character}/${id}`);
  };

  return (
    <Grid size={{ xs: 12, lg: 6 }} width={"100%"}>
      <Box
        sx={{
          minWidth: { xs: "100%", sm: "550px" },
          maxWidth: { sm: "650px" },
          margin: "auto",
        }}
        onClick={() => handleClick(character.id)}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            background: "#474f63",
            color: "inherit",
            borderRadius: 2,
          }}
        >
          <CardMedia
            sx={{
              width: { xs: "100%", sm: "229.2px" },
              minHeight: { xs: "350px" },
              objectFit: "cover",
            }}
            component="img"
            image={`${character.image}`}
            alt={`${character.name}`}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <CharacterInfoFavorites character={character} />
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};
