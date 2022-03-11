import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PictureCard from "../components/CardPicture";

export default function PicturesPage() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setUsers(data);
  }, []);

  return (
    <div className="mainDiv">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="space-evenly">
          {users.map((user, i) => (
            <PictureCard key={i} user={user} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}
