import { useState } from "react";
import {
  Container,
  Card,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import CardLogin from "./CardLogin";
import CardSignup from "./CardSignup";
import { styled } from "@mui/material/styles";

const LoginButton = styled(ToggleButton)({
  "&.Mui-selected": {
    backgroundColor: "white",
  },
  color: "white",
  borderColor: "white",
  padding: "10px 70px",
  fontSize: "24px",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 20%)",
    color: "white",
  },
  ":focus": {
    backgroundColor: "white",
    color: "black",
  },
});

export default function CardAuth() {
  const [alignment, setAlignment] = useState("login");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Container maxWidth="sm">
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          my: 10,
          py: 3,
          background: "rgba(255, 255, 255, 0.25)",
          borderColor: "white",
          boxSizing: "border-box",
          borderRadius: "10px",
        }}
      >
        <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
          <LoginButton value="login">Login</LoginButton>
          <LoginButton value="signup">Sign up</LoginButton>
        </ToggleButtonGroup>
        {alignment === "login" ? <CardLogin /> : <CardSignup />}
      </Card>
    </Container>
  );
}
