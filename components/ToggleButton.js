import {
  ToggleButton
} from "@mui/material";

export default function CreatedToggleButton ({value, children}) {
  return (
      <ToggleButton
        sx={{
          /*"&.Mui-selected": {
            backgroundColor: "white",}*/
            color: "white",
            borderColor: "white",
            padding: "10px 70px",
            fontSize: "24px",
            ":hover": {
              backgroundColor: "rgba(255, 255, 255, 20%)",
              color: "white"
            },
            ":focus": {
              backgroundColor: "white",
              color: "black"
            }
        }}
        value={value}
      >
        {children}
      </ToggleButton>
  )
}