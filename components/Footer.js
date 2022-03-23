import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <>
      <Divider
        style={{
          backgroundColor: "white",
          margin: "0 4%",
        }}
        variant="middle"
      />
      <Box
        gap={2.5}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        p={2.5}
        color="white"
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Valtua, Inc.
        </Typography>
        <Typography variant="body2" style={{ cursor: "pointer" }}>
          Términos de uso
        </Typography>
        <Typography variant="body2" style={{ cursor: "pointer" }}>
          Aviso Legal
        </Typography>
        <Typography variant="body2" style={{ cursor: "pointer" }}>
          Política de privacidad y cookies
        </Typography>
      </Box>
    </>
  );
}
