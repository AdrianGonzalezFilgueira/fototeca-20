import { Container, Button } from "@mui/material";

import ButtonSubmit from "./ButtonSubmit";
import InputText from "./TextInput";
import GoogleIcon from "@mui/icons-material/Google";

export default function CardLogin() {
  return (
    <>
      <InputText title="USUARIO" />
      <InputText title="CONTRASEÑA" />
      <Button variant="contained" endIcon={<GoogleIcon />}>
        Login with
      </Button>
      <ButtonSubmit>Ingresar</ButtonSubmit>
    </>
  );
}
