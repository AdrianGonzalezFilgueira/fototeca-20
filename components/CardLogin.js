import { Button, InputBase, InputLabel } from "@mui/material";
import ButtonSubmit from "./ButtonSubmit";
import GoogleIcon from "@mui/icons-material/Google";

export default function CardLogin() {
  return (
    <>
      <InputLabel htmlFor="USUARIO">USUARIO</InputLabel>
      <InputBase type="text" />
      <InputLabel htmlFor="CONTRASEÑA">CONTRASEÑA</InputLabel>
      <InputBase type="password" title="CONTRASEÑA" />
      <Button variant="contained" endIcon={<GoogleIcon />}>
        Login with
      </Button>
      <ButtonSubmit>Ingresar</ButtonSubmit>
    </>
  );
}
