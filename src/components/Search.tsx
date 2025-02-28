import { TextField, Autocomplete, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";

import { useLazyGetCharactersQuery } from "../api/characterApi";
import { useCharacterNavigation } from "../hooks/useCharacterNavigation";
import { useDebounce } from "../hooks/useDebounce";
import { Character } from "../shared/types/types";

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

  const handleInputChange = (_: React.SyntheticEvent, value: string) => {
    setSearchTerm(value);
  };

  const handleChange = (
    _: React.SyntheticEvent | null,
    newValue: Character | null,
  ) => {
    if (newValue) {
      navigate(newValue.id);
    }
  };

  return (
    <>
      <Autocomplete
        id="character-search"
        options={data?.results || []}
        getOptionLabel={(option) => option.name}
        loading={isLoading}
        onInputChange={handleInputChange}
        onChange={handleChange}
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
