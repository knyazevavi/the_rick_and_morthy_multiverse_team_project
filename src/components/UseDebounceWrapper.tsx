import { Container, Typography, Input } from "@mui/material";
import { useState } from "react";

import { useDebounce } from "../hooks/useDebounce";

export const UseDebounceWrapper = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={valueHandler}
        placeholder="Type something..."
      />
      <Typography>Debounced Value: {debouncedValue}</Typography>
    </Container>
  );
};
