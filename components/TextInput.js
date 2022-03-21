import { InputBase, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextInput = styled(InputBase)({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 20%)",
    border: "1px solid #ced4da",
    color: "white",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
  },
});

export default function InputText(props) {
  return (
    <div>
      <InputLabel
        shrink
        htmlFor={props.title}
        style={{ color: "white", margin: 0 }}
      >
        {props.title}
      </InputLabel>
      <TextInput
        type={props.type}
        id={props.title}
        //{...(props.multiline && multiline)}
        row={props.row}
      />
    </div>
  );
}
