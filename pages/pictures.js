import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PictureCard from "../components/PicturesCard";

const picturesData = [
  {
    title: "First picture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores excepturi fuga quidem accusantium voluptates quis. Placeat, provident cupiditate velit accusamus quae eius sed fugit error excepturi animi pariatur iusto!",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Second picture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores excepturi fuga quidem accusantium voluptates quis. Placeat, provident cupiditate velit accusamus quae eius sed fugit error excepturi animi pariatur iusto!",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Another picture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores excepturi fuga quidem accusantium voluptates quis. Placeat, provident cupiditate velit accusamus quae eius sed fugit error excepturi animi pariatur iusto!",
    image: "https://via.placeholder.com/650x500",
  },
  {
    title: "Another picture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores excepturi fuga quidem accusantium voluptates quis. Placeat, provident cupiditate velit accusamus quae eius sed fugit error excepturi animi pariatur iusto!",
    image: "https://via.placeholder.com/200x400",
  },
  {
    title: "Last picture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores excepturi fuga quidem accusantium voluptates quis. Placeat, provident cupiditate velit accusamus quae eius sed fugit error excepturi animi pariatur iusto!",
    image: "https://via.placeholder.com/1000",
  },
];

export default function PicturesPage() {
  return (
    <div className="mainDiv">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="space-evenly">
            {picturesData.map((picture, i) => (
                <PictureCard key={i} title={picture.title} description={picture.description} image={picture.image} />
            ))}
        </Grid>
      </Box>
    </div>
  );
}
