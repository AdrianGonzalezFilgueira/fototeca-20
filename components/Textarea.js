import { InputBase, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextarea = styled(InputBase)({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 20%)",
    border: "1px solid #ced4da",
    color: "white",
    fontSize: 16,
    padding: "10px 12px",
  },
});

export default function Textarea({ register, ...props }) {
  return (
    <div>
      <InputLabel
        shrink
        htmlFor={props.title}
        style={{ color: "white", margin: 0 }}
      >
        {props.title}
      </InputLabel>
      <StyledTextarea
        {...register("description", {
          minLength: 3,
          maxLength: 250,
          required: true,
        })}
        fullWidth={props.fullWidth}
        multiline={props.multiline}
        rows={props.rows}
      />
    </div>
  );
}
