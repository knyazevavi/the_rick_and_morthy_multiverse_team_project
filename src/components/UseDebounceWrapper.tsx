import { Container, Typography, Input } from "@mui/material";
import { useState } from "react";

import { useDebounce } from "../hooks/useDebounce";

export const UseDebounceWrapper = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <Typography>Debounced Value: {debouncedValue}</Typography>
    </Container>
  );
};
