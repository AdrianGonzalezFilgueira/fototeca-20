import { InputBase, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import ButtonSubmit from "./ButtonSubmit";

export default function CardSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <InputLabel htmlFor="USUARIO">USUARIO</InputLabel>
      <InputBase type="text" title="USUARIO" />
      <InputLabel htmlFor="E-MAIL">E-MAIL</InputLabel>
      <InputBase type="email" title="E-MAIL" />
      <InputLabel htmlFor="CONTRASEÑA">CONTRASEÑA</InputLabel>
      <InputBase type="password" title="CONTRASEÑA" />
      <InputLabel htmlFor="CONFIRMAR CONTRASEÑA">
        CONFIRMAR CONTRASEÑA
      </InputLabel>
      <InputBase type="password" title="CONFIRMAR CONTRASEÑA" />

      <ButtonSubmit>Registrarse</ButtonSubmit>
    </>
  );
}
