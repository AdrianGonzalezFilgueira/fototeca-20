import { useState } from "react";
import styles from "../styles/CardLogin.module.css";
import {
  Container,
  Card,
  ToggleButtonGroup,
} from "@mui/material";
import ButtonSubmit from "./ButtonSubmit";
import CreatedToggleButton from "./ToggleButton";

export default function CardLogin() {
  const [alignment, setAlignment] = useState("login");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Container maxWidth="sm" >
      <Card className={styles.CardLogin} variant="outlined" sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px auto",
        background: "rgba(255, 255, 255, 0.25)",
        borderColor: "white",
        boxSizing: "border-box",
        borderRadius: "10px"}}>
        <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
          <CreatedToggleButton value="login">Login</CreatedToggleButton>
          <CreatedToggleButton value="signup">Sign up</CreatedToggleButton>
        </ToggleButtonGroup>
        <ButtonSubmit>Ingresar</ButtonSubmit>
      </Card>
    </Container>
  );
}
