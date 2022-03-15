import ButtonUpload from "../components/ButtonUpload";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonSubmit from "../components/ButtonSubmit";
import axios from "axios";

export default function UploadPage() {
  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("picture", data.picture[0]);

    await axios
      .post("api/pictures", formData)
      .then((res) => {
        /**
         * En caso de que todo haya ido bien, informar al usuario.
         * El mensaje de feedback está en: res.data.message
         */
        console.log(res.data.message);
      })
      .catch((error) => {
        /**
         * En caso de que se trate de subir un archivo incorrecto,
         * demasiado grande u otro error, informar al usuario.
         * El mensaje de feedback está en: error.response.data.message
         */
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="mainDiv">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="space-evenly">
            <Grid
              item
              xs={5}
              container
              justifyContent="center"
              alignItems="center"
            >
              <ButtonUpload register={register} />
            </Grid>
            <Grid item xs={5} container spacing={2} direction="column" py={2}>
              <Grid item>
                <TextField
                  {...register("title", { minLength: 1, maxLength: 100 })}
                  id="outlined-basic"
                  label="Título"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  {...register("description", { minLength: 1, maxLength: 250 })}
                  id="outlined-multiline-static"
                  label="Descripción"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                />
              </Grid>
              <Grid container justifyContent="flex-end" item pb={2}>
                <ButtonSubmit>Enviar</ButtonSubmit>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}
