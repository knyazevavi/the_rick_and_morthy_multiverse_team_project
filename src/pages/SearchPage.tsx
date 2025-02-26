import { Container, Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Search } from "../components/Search";
import { CharactersList } from "../components/CharactersList";
import { useGetCharactersQuery } from "../api/characterApi";
import { Loader } from "../components/Loader";
import { useState } from "react";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const name = searchParams.get("name") || "";
  const { data, isLoading } = useGetCharactersQuery({ filter: name, page });

  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: 1000, margin: "10px auto" }}>
        <Search />
      </Box>
      {isLoading ? (
        <Loader />
      ) : (
        <CharactersList setPage={setPage} characters={data?.results || []} />
      )}
    </Container>
  );
};
