import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <footer>
      <Divider
        style={{
          backgroundColor: "white",
          margin: "0 4%",
        }}
        variant="middle"
      />
      <Box
        gap={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        my={2.5}
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
    </footer>
  );
}
