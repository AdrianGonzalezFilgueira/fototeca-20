import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const Input = styled("input")({
  display: "none",
});

export default function ButtonUpload({ register, fileImage, onChange }) {
  const styles = {
    maxHeight: "500px",
    maxWidth: "500px",
    minHeight: "100px",
    minWidth: "100px",
  };

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
          padding: 0,
        }}
      >
        {fileImage ? (
          <img style={styles} src={fileImage} />
        ) : (
          <AddIcon sx={{ fontSize: "25vw" }} />
        )}
      </Button>
    </label>
  );
}
