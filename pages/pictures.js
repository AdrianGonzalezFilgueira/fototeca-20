import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PictureCard from "../components/CardPicture";

export default function PicturesPage() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    const fetchPictures = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setPictures(data);
    };
    fetchPictures();
  }, []);

  return (
    <div className="mainDiv">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="space-evenly">
          {pictures.map((picture, i) => (
            <PictureCard key={i} picture={picture} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}
