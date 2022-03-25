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
      <InputText
        register={register}
        type="text"
        title="USUARIO"
        fieldName="username"
        minLength={3}
        maxLength={100}
      />
      <InputText
        register={register}
        type="email"
        title="E-MAIL"
        fieldName="email"
        minLength={3}
        maxLength={100}
      />
      <InputText
        register={register}
        type="password"
        title="CONTRASEÑA"
        fieldName="password"
        minLength={6}
        maxLength={100}
      />
      <InputText
        register={register}
        type="password"
        title="CONFIRMAR CONTRASEÑA"
        fieldName="password_repeat"
        minLength={6}
        maxLength={100}
      />

      <ButtonSubmit>Registrarse</ButtonSubmit>
    </>
  );
}
