import { Box, Container } from "@mui/material";

export default function Custom404() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={4}
    >
      <img width="500" height="300" src="images/page404.svg" />
      <h1>Lo sentimos :-( Esta página no existe</h1>
    </Box>
  );
}
