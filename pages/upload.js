import { useRef } from "react";
import { useForm } from "react-hook-form";
import { TextField, Box, Grid, Fab } from "@mui/material";
import Link from "next/link";
import ButtonUpload from "../components/ButtonUpload";
import ButtonSubmit from "../components/ButtonSubmit";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";

export default function UploadPage() {
  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const onSubmit = async () => {
    const formData = new FormData(formRef.current);
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
            <Link href="/pictures">
              <Fab
                sx={{ padding: "100px", borderRadius: "10px" }}
                color="primary"
                aria-label="add"
              >
                <ArrowBackIosIcon sx={{ fontSize: 50, color: "white" }} />
              </Fab>
            </Link>

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
