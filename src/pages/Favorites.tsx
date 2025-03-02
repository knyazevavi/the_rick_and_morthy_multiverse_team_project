import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState, useMemo } from "react";
import { Character } from "../shared/types/types";
import { CharacterItemFavorites } from "../components/CharacterItemFavorites";
import { Loader } from "../components/Loader";
import { useSliceDataFavorites } from "../hooks/useSliceDataFavorites";
import { useInView } from 'react-intersection-observer';

export const Favorites = () => {
  const countCharacters = 9;
  const [page, setPage] = useState<number>(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  const { data, error, isLoading, totalCharacters } =
    useSliceDataFavorites(page, countCharacters);

  console.log(page, { data, error, isLoading, totalCharacters });
  const totalCount = useMemo<boolean>(() => +totalCharacters > characters.length, [totalCharacters, characters]);

  useEffect(() => {
    if (data) {
      setCharacters((prev) => [...prev, ...data]);
    }
  }, [data]);

  useEffect(() => {
    if( characters && inView ){
      setPage((prev) => prev + countCharacters);
    }
  }, [inView]);

  if ( !isLoading && !data )
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", fontSize: "1.5rem" }}
      >
        empty
      </Box>
    );
  if ( isLoading && !data ) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container sx={{ mt: "50px" }}>
      <Box>
        <Grid container spacing={6}>
          {characters.map((character: Character) => (
            <CharacterItemFavorites character={character} />
          ))}
        </Grid>
        {isLoading && totalCount && <div style={{height: "20px", fontSize: "1.5rem" }}>Loader...</div>}
        {!isLoading && totalCount && <div ref={ref} style={{ height: "20px"}} />}
      </Box>
    </Container>
  );
};
