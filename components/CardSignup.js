import { Container } from "@mui/material";
import ButtonSubmit from "./ButtonSubmit";
import InputText from "./TextInput";

export default function CardLogin() {
  return (
    <>
      <InputText title="USUARIO" />
      <InputText title="CONTRASEÑA" />

      <ButtonSubmit>Registrarse</ButtonSubmit>
    </>
  );
}
