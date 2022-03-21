import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const Input = styled("input")({
  display: "none",
});

export default function ButtonUpload({ register, onChange }) {
  return (
    <label htmlFor="contained-button-file">
      <Input
        {...register("picture", { required: true })}
        name="picture"
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={onChange}
      />
      <Button
        variant="contained"
        component="span"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 20%)",
          border: "1px solid white",
        }}
      >
        <AddIcon sx={{ fontSize: 200 }} />
      </Button>
    </label>
  );
}
