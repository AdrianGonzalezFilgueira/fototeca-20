import { Button, InputBase } from "@mui/material";
import ButtonSubmit from "./ButtonSubmit";
import GoogleIcon from "@mui/icons-material/Google";

export default function CardLogin() {
  return (
    <>
      <InputBase type="text" title="USUARIO" />
      <InputBase type="password" title="CONTRASEÑA" />
      <Button variant="contained" endIcon={<GoogleIcon />}>
        Login with
      </Button>
      <ButtonSubmit>Ingresar</ButtonSubmit>
    </>
  );
}
