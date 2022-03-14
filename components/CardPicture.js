import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardPicture({ picture }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={picture.image}
            alt={picture.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {picture.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {picture.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
