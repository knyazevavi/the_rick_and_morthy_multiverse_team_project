import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { useGetCharacterByIdQuery } from "../api/characterApi";
import { CharacterItemDark } from "../components/CharacterItemDark";
import { ErrorHandler } from "../components/ErrorHandler";
import { Loader } from "../components/Loader";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Character } from "../shared/types/types";
import { selectUploadFavorites } from "../store/selectors/favoritesSelectors";
import { selectFavorites } from "../store/selectors/userSelectors";
import {
  addUploadFavorites,
  changeStartItem,
} from "../store/uploadFavoritesSlice";
import { sliceArray } from "../utils/getSliceFavorites";

export const Favorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const { characters, item } = useAppSelector(selectUploadFavorites);

  let dataCharacters: Array<Character> | null;
  const { slicedFavoritesID, totalCharacters } = sliceArray(favorites, item);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { data, error, isLoading } = useGetCharacterByIdQuery(
    `${slicedFavoritesID}`,
  );

  if (!data || slicedFavoritesID.length < 1) dataCharacters = null;
  else dataCharacters = Array.isArray(data) ? data : [data];

  const isNotTotalCount = useMemo<boolean>(
    () => totalCharacters > characters.length,
    [totalCharacters, characters],
  );

  useEffect(() => {
    if (dataCharacters) {
      dispatch(addUploadFavorites(dataCharacters));
    }
  }, [dataCharacters, dispatch]);

  useEffect(() => {
    if (characters && inView) {
      let startItem = item + (dataCharacters ? dataCharacters.length : 0);
      dispatch(changeStartItem(startItem));
    }
  }, [inView, dispatch]);

  if (!isLoading && !dataCharacters && favorites.length < 1)
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", fontSize: "1.5rem" }}
      >
        empty
      </Box>
    );
  if (isLoading && !dataCharacters) return <Loader />;
  if (error) return <ErrorHandler error={error} />;

  return (
    <Container sx={{ mt: "50px" }}>
      <Box>
        <Grid container spacing={6}>
          {characters.map((character: Character) => (
            <CharacterItemDark key={character.name} character={character} />
          ))}
        </Grid>
        {isLoading && isNotTotalCount && (
          <div style={{ fontSize: "1.5rem" }}>Loading...</div>
        )}
        {!isLoading && isNotTotalCount && (
          <div ref={ref} style={{ height: "20px" }} />
        )}
      </Box>
    </Container>
  );
};
