import { Box, Container, Typography } from "@mui/material";

import { FormWrapperProps } from "../shared/types/types.ts";

export const FormWrapper = ({ children, name, handler }: FormWrapperProps) => {
  return (
    <>
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
          <form onSubmit={handler}>
            <Typography variant="h5" gutterBottom>
              {name}
            </Typography>
            {children}
          </form>
        </Box>
      </Container>
    </>
  );
};
