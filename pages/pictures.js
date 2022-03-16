import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import DisplayPictures from "../components/DisplayPictures";
import axios from "axios";
import CardPicture from "../components/CardPicture";

export default function PicturesPage() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    const fetchPictures = async () => {
      const result = await axios
        .get("api/pictures")
        .then((res) => res.data)
        .catch((error) => console.log(error));
        console.log(result)
      setPictures(result);
    };

    fetchPictures();
  }, []);

  return (
    <div className="mainDiv">
      <DisplayPictures></DisplayPictures>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="space-evenly">
          {pictures.map((picture, i) => (
            <CardPicture key={i} picture={picture} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}
