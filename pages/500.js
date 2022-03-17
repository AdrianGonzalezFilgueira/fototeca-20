import { Box } from "@mui/material";

export default function Custom500() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={4}
    >
      <img width="500" height="300" src="images/error500.svg" />
      <h1>
        Lo sentimos :-( Hemos encontrado un error de servidor. Do not panic...We
        are fixing it
      </h1>
    </Box>
  );
}
