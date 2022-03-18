import {
  ImageList,
  Container,
  Box,
  Fab,
  CircularProgress,
} from "@mui/material";
import CardPicture from "../components/CardPicture";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import useSWR from "swr";

export default function PicturesPage() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR("/api/pictures", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <CircularProgress />
      </div>
    ); //HAY QUE EXTRAER EN COMPONENTE

  return (
    <Container maxWidth={false} sx={{ width: "85%" }}>
      <ImageList gap={12} cols={5}>
        {data.map((picture, i) => (
          <CardPicture key={i} picture={picture} />
        ))}
      </ImageList>
      <Box sx={{ position: "fixed", right: 35, bottom: 35 }}>
        <Link href="/upload">
          <Fab
            sx={{ padding: "100px", borderRadius: "10px" }}
            color="primary"
            aria-label="add"
          >
            <AddIcon sx={{ fontSize: "225px" }} />
          </Fab>
        </Link>
      </Box>
    </Container>
  );
}
