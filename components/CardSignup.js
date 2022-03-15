import ButtonSubmit from "./ButtonSubmit";
import InputText from "./TextInput";

export default function CardLogin() {
  return (
    <>
      <InputText type="text" title="USUARIO" />
      <InputText type="email" title="E-MAIL" />
      <InputText type="password" title="CONTRASEÑA" />
      <InputText type="password" title="CONFIRMAR CONTRASEÑA" />

      <ButtonSubmit>Registrarse</ButtonSubmit>
    </>
  );
}
