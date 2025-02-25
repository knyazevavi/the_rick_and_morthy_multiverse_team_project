import { FormWrapperProps } from "../shared/types/types.ts";

const FormWrapper = ({ children }: FormWrapperProps) => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "#474f63",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
import { Box, Container } from "@mui/material";

export default FormWrapper;
