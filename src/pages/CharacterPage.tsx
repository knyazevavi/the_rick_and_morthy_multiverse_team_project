import { Container, Typography } from "@mui/material";
import { useParams, Navigate } from "react-router-dom";
import { CharacterDetails } from "../components/CharacterDetails";
import { useGetCharacterByIdQuery } from "../api/characterApi";
import { Loader } from "../components/Loader";

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: character,
    isLoading,
    error,
  } = useGetCharacterByIdQuery(id ?? "");

  const errorHandler = () => {
    const apiError = error as { status?: number };

    if (apiError?.status === 404) {
      return <Navigate to="/404" replace />;
    }
    return <Typography variant="h6"> Something went wrong.</Typography>;
  };

  return (
    <Container>
      {isLoading && <Loader />}
      {error && errorHandler()}
      {!isLoading && !error && character && (
        <CharacterDetails character={character} />
      )}
    </Container>
  );
};
