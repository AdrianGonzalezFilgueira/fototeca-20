import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardPicture({ user }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={user.image}
            alt={user.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
