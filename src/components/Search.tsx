import { useState, useEffect } from "react";
import { TextField, Autocomplete, CircularProgress } from "@mui/material";
import { useLazyGetCharactersQuery } from "../api/characterApi";
import { useDebounce } from "../hooks/useDebounce";
import { useCharacterNavigation } from "../hooks/useCharacterNavigation";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [fetch, { data, isLoading }] = useLazyGetCharactersQuery();
  const navigate = useCharacterNavigation();

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch({ filter: debouncedSearchTerm, page: 1 });
    }
  }, [debouncedSearchTerm, fetch]);

  return (
    <>
      <Autocomplete
        id="character-search"
        options={data?.results || []}
        getOptionLabel={(option) => option.name}
        loading={isLoading}
        onInputChange={(_, value) => setSearchTerm(value)}
        onChange={(_, newValue) => {
          if (newValue) {
            navigate(newValue.id);
          }
        }}
        sx={{
          mt: 20,
          "& .MuiOutlinedInput-root": {
            backgroundColor: "rgb(193, 197, 201)",
            borderRadius: 2,
            "&.Mui-focused": {
              backgroundColor: "white",
              borderColor: "rgb(193, 197, 201)",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "transparent",
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Characters"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </>
  );
};
