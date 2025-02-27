import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import CharacterDetails from "../components/CharacterDetails";
import { useGetCharacterByIdQuery } from "../api/characterApi";
import { Loader } from "../components/Loader";

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: character,
    isLoading,
    error,
  } = useGetCharacterByIdQuery(id ?? "");

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Typography variant="h6" color="error">
        Error: {error.toString()}
      </Typography>
    );
  }

  if (!character) {
    return (
      <Typography variant="h3" sx={{ color: "white" }}>
        Character not found
      </Typography>
    );
  }

  return <CharacterDetails character={character} />;
};
