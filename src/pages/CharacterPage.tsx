import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

import { useGetCharacterByIdQuery } from "../api/characterApi";
import { CharacterDetails } from "../components/CharacterDetails";
import { ErrorHandler } from "../components/ErrorHandler";
import { Loader } from "../components/Loader";

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: character,
    isLoading,
    error,
  } = useGetCharacterByIdQuery(id ?? "");

  const content =
    (isLoading && <Loader />) ||
    (error && <ErrorHandler error={error} />) ||
    (character && <CharacterDetails character={character} />);

  return <Container>{content}</Container>;
};
