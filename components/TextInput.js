import { InputBase, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextInput = styled(InputBase)({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 20%)",
    border: "1px solid #ced4da",
    color: "white",
    fontSize: 16,
    padding: "10px 12px",
  },
});

export default function TextInput({ register, ...props }) {
  return (
    <div>
      <InputLabel
        shrink
        htmlFor={props.title}
      >
        {props.title}
      </InputLabel>
      <StyledTextInput
        {...register(props.fieldName, {
          minLength: props.minLength,
          maxLength: props.maxLength,
          required: true,
        })}
        type={props.type}
        fullWidth={props.fullWidth}
      />
    </div>
  );
}
