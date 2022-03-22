import { ImageList, Container, Box, Fab, useMediaQuery } from "@mui/material";
import CardPicture from "../components/CardPicture";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import useSWR from "swr";
import { useTheme } from "@mui/system";
import LoadingSpinner from "../components/LoadingSpinner";

export default function PicturesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLaptop = useMediaQuery(theme.breakpoints.down("lg"));

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR("/api/pictures", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <LoadingSpinner />;

  return (
    <Container maxWidth={false} sx={{ width: "85%", paddingTop: "20px" }}>
      <ImageList gap={12} cols={isMobile ? 1 : isLaptop ? 3 : 5}>
        {data.map((picture, i) => (
          <CardPicture key={i} picture={picture} />
        ))}
      </ImageList>
      <Box sx={{ position: "fixed", right: 35, bottom: 70 }}>
        <Link href="/upload">
          <Fab
            sx={{
              padding: "70px",
              borderRadius: "10px",
              border: "1px solid white",
              backgroundColor: "rgba(255, 255, 255, 20%)",
            }}
            color="primary"
            aria-label="add"
          >
            <AddIcon sx={{ fontSize: "120px" }} />
          </Fab>
        </Link>
      </Box>
    </Container>
  );
}
