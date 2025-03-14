import { Container, Button } from "@mui/material";
import { useParams } from "react-router-dom";

import { useGetCharacterByIdQuery } from "../api/characterApi";
import { CharacterDetails } from "../components/CharacterDetails";
import { ErrorHandler } from "../components/ErrorHandler";
import { Loader } from "../components/Loader";
import { useAppDispatch, useAppSelector } from "../hooks.ts";
import { toggleFavorite } from "../store/favoriteSlice.ts";
import {
  selectFavorites,
  selectUser,
} from "../store/selectors/userSelectors.ts";
import { clearListUpload } from "../store/uploadFavoritesSlice.ts";

export const CharacterPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const { username } = useAppSelector(selectUser);
  const favorites = useAppSelector(selectFavorites);

  const {
    data: character,
    isLoading,
    error,
  } = useGetCharacterByIdQuery(id ?? "");

  const isFavorite = character ? favorites.includes(character?.id) : false;

  const handleFavoriteButton = () => {
    if (character) {
      dispatch(clearListUpload());
      const id: number = character.id;
      dispatch(toggleFavorite({ id, username }));
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
