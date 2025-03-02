import { TextField, Autocomplete, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLazyGetCharactersQuery } from "../api/characterApi";
import { useDebounce } from "../hooks/useDebounce";
import { useAppSelector } from "../hooks.ts";
import { PATH } from "../shared/constants/constants";
import { Character } from "../shared/types/types";
import { selectUser } from "../store/selectors/userSelectors.ts";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [fetch, { data, isLoading }] = useLazyGetCharactersQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch({ filter: debouncedSearchTerm, page: 1 });
    }
  }, [debouncedSearchTerm, fetch]);

  const handleInputChange = (_: React.SyntheticEvent, value: string) => {
    setSearchTerm(value);
  };

  const { isAuthenticated } = useAppSelector(selectUser);

  const handleChange = (
    _: React.SyntheticEvent | null,
    newValue: Character | null,
  ) => {
    if (newValue) {
      navigate(`${PATH.character}/${newValue.id}`);
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
        disabled={!isAuthenticated}
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
