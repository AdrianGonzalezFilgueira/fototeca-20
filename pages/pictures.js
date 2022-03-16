import { useState, useEffect } from "react";
import { ImageList, Container, Box, Fab } from "@mui/material";
import axios from "axios";
import CardPicture from "../components/CardPicture";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

export default function PicturesPage() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    const fetchPictures = async () => {
      const result = await axios
        .get("api/pictures")
        .then((res) => res.data)
        .catch((error) => console.log(error));
      setPictures(result);
    };

    fetchPictures();
  }, []);

  return (
    <Container maxWidth={false} sx={{ width: "85%" }}>
      <ImageList gap={12} cols={5}>
        {pictures.map((picture, i) => (
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
