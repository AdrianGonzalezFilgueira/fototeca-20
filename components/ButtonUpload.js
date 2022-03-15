import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const Input = styled("input")({
  display: "none",
});

export default function ButtonUpload({ register }) {
  return (
    <label htmlFor="contained-button-file">
      <Input
        {...register("picture", { required: true })}
        name="picture"
        accept="image/*"
        id="contained-button-file"
        type="file"
      />
      <Button variant="contained" component="span">
        <AddIcon sx={{ fontSize: 100 }} />
      </Button>
    </label>
  );
}
