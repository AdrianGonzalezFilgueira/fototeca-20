import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function ErrorPages(props) {
  const router = useRouter();

  return (
    <Box textAlign="center" color="#fff">
      <img width="500" height="400" src={`/images/${props.image}`} />
      <Typography variant="h3">{props.children}</Typography>
      <Button
        variant="contained"
        color="error"
        sx={{ mt: "20px" }}
        onClick={() => router.back()}
      >
        Go Back
      </Button>
    </Box>
  );
}
