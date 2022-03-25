import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <>
      <Divider variant="middle" />
      <Box
        gap={2.5}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        p={2.5}
        color="white"
        sx={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0) 5%, rgba(0, 8, 188, 0.35) 33%, rgba(0, 8, 188, 0.35) 66%, rgba(255,255,255,0) 95%)",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Valtua, Inc.
        </Typography>
        <Typography
          variant="body2"
          style={{
            cursor: "pointer",
            textShadow: "0 2px 2px rgba(0, 0, 0, 0.4)",
          }}
        >
          Términos de uso
        </Typography>
        <Typography
          variant="body2"
          style={{
            cursor: "pointer",
            textShadow: "0 2px 2px rgba(0, 0, 0, 0.4)",
          }}
        >
          Aviso Legal
        </Typography>
        <Typography
          variant="body2"
          style={{
            cursor: "pointer",
            textShadow: "0 2px 2px rgba(0, 0, 0, 0.4)",
          }}
        >
          Política de privacidad y cookies
        </Typography>
      </Box>
    </>
  );
}
