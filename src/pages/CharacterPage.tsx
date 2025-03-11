import { Container, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useGetCharacterByIdQuery } from "../api/characterApi";
import { CharacterDetails } from "../components/CharacterDetails";
import { ErrorHandler } from "../components/ErrorHandler";
import { Loader } from "../components/Loader";
import { toggleFavorite } from "../store/favoriteSlice.ts";
import { RootState } from "../store/store.ts";

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );

  const {
    data: character,
    isLoading,
    error,
  } = useGetCharacterByIdQuery(id ?? "");

  const isFavorite = character ? favorites.includes(character?.id) : false;

  const handleFavoriteButton = () => {
    if (character) {
      dispatch(toggleFavorite(character.id));
    }
  };

  const content =
    (isLoading && <Loader />) ||
    (error && <ErrorHandler error={error} />) ||
    (character && (
      <>
        <CharacterDetails character={character} />
        <Button onClick={handleFavoriteButton}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </>
    ));

  return <Container>{content}</Container>;
};
