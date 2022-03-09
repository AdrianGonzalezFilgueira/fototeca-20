import { useState } from "react";
import styles from "../styles/CardLogin.module.css";
import {
  Container,
  Card,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

function FrameLogin() {
  const [alignment, setAlignment] = useState("login");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Container maxWidth="sm">
      <Card className={styles.CardLogin} variant="outlined">
        <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
          <ToggleButton className={styles.CardLogin_Button} value="login">
            Login
          </ToggleButton>
          <ToggleButton className={styles.CardLogin_Button} value="signup">
            Sign Up
          </ToggleButton>
        </ToggleButtonGroup>
      </Card>
    </Container>
  );
}

export default FrameLogin;
