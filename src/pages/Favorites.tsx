import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState, useMemo } from "react";
import { Character } from "../shared/types/types";
import { CharacterItemFavorites } from "../components/CharacterItemFavorites";
import { Loader } from "../components/Loader";
import { useGetCharacterByIdQuery } from "../api/characterApi";
import { useInView } from "react-intersection-observer";
import { favoriteInitialState } from "../shared/constants/constants";

export const Favorites = () => {
  const countCharacters = 10;
  const [startItem, setStartItem] = useState<number>(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const totalFavoritesID: Array<number> = favoriteInitialState.favorites;
  // const totalFavoritesID: Array<number> = [...Array(30)].map((_, i) => i + 1);
  const totalCharacters: number = totalFavoritesID.length;
  const slicedFavoritesID = totalFavoritesID.slice(
    startItem,
    startItem + countCharacters,
  );
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { data, error, isLoading } =
    slicedFavoritesID.length > 0
      ? useGetCharacterByIdQuery(slicedFavoritesID)
      : { data: null, error: null, isLoading: false };

  const isNotTotalCount = useMemo<boolean>(
    () => totalCharacters > characters.length,
    [totalCharacters, characters],
  );

  useEffect(() => {
    if (data) {
      setCharacters((prev) => {
        const resData = Array.isArray(data) ? data : [data];
        if (prev.length > 0 && prev[0].id == resData[0].id) return resData;
        return [...prev, ...resData];
      });
    }
  }, [data]);

  useEffect(() => {
    if (characters && inView) {
      setStartItem((prev) => prev + countCharacters);
    }
  }, [inView]);

  if (!isLoading && !data)
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", fontSize: "1.5rem" }}
      >
        empty
      </Box>
    );
  if (isLoading && !data) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container sx={{ mt: "50px" }}>
      <Box>
        <Grid container spacing={6}>
          {characters.map((character: Character) => (
            <CharacterItemFavorites
              key={character.name}
              character={character}
            />
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
