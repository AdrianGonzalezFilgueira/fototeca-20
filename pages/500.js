import { Box } from "@mui/material";

export default function Custom404() {
  return (
    <Box
      sx={{
        textAlign: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <img width="500" height="300" src="images/500.svg" />
      <h2>Lo sentimos. Existe un error en el servidor.</h2>
    </Box>
  );
}
