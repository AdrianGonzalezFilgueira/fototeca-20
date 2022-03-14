import { useState } from "react";
import {
  Container,
  Card,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ButtonSubmit from "./ButtonSubmit";
import InputText from "./TextInput";
import PasswordInput from "./PasswordInput";


const LoginButton = styled(ToggleButton)(({theme}) => ({
  "&.Mui-selected": {
  backgroundColor: "white",},
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
  },
}));

export default function CardLogin() {
  const [alignment, setAlignment] = useState("login");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Container maxWidth="sm" >
      <Card variant="outlined" sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        margin: "30px auto",
        background: "rgba(255, 255, 255, 0.25)",
        borderColor: "white",
        boxSizing: "border-box",
        borderRadius: "10px",
        py: 3
    }}>
        <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
          <LoginButton value="login">Login</LoginButton>
          <LoginButton value="signup">Sign up</LoginButton>
        </ToggleButtonGroup>
        <InputText title="USUARIO"  />
        <InputText title="CONTRASEÑA"  />
        <ButtonSubmit>Ingresar</ButtonSubmit>
      </Card>
    </Container>
  );
}
