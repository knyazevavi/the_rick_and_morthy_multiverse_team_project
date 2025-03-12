import { Container, Box } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginationButton } from "../shared/ui/PaginationButton";
import { useGetCharactersQuery } from "../api/characterApi";
import { CharactersList } from "../components/CharactersList";
import { Loader } from "../components/Loader";
import { Search } from "../components/Search";

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
        <>
          <CharactersList setPage={setPage} characters={data?.results || []} />
          <PaginationButton
            setPage={setPage}
            pageNumber={page}
            totalPages={data?.info?.pages || 1}
          />
        </>
      )}
    </Container>
  );
};
