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
      <img width="500" height="300" src="images/404.svg" />
      <h2>Lo sentimos. Esta página no existe.</h2>
    </Box>
  );
}
