import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Grid, Fab } from "@mui/material";
import Link from "next/link";
import ButtonUpload from "../components/ButtonUpload";
import ButtonSubmit from "../components/ButtonSubmit";
import InputText from "../components/TextInput";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import ErrorMessage from "../components/ErrorMessage";
import { useRouter } from "next/router";
import FeedbackMessage from "../components/Feedback";

export default function UploadPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();
  const [showPreview, setShowPreview] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();

  console.log(formRef.current);

  const onSubmit = async () => {
    const formData = new FormData(formRef.current);
    await axios
      .post("api/pictures", formData)
      .then((res) => {
        setShowFeedback(true);
        setIsDisabled(true);
        setTimeout(() => {
          router.push("/pictures");
        }, 3000);

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

  const handleShowPreview = () => {
    setShowPreview(!showPreview);
  };

  const handleOnChange = (e) => {
    console.log(e.target.files[0]);
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
              {showPreview ? (
                <div>True</div>
              ) : (
                <ButtonUpload register={register} onChange={handleOnChange} />
              )}
              <button onClick={handleShowPreview}>Show Preview</button>
            </Grid>
            <Grid item xs={5} container spacing={2} direction="column" py={2}>
              <Grid item>
                <InputText
                  {...register("title", {
                    minLength: 3,
                    maxLength: 100,
                    required: true,
                  })}
                  title="Título"
                  type="text"
                />
                {errors.title?.type === "required" && (
                  <ErrorMessage>Por favor completa este campo</ErrorMessage>
                )}
                {errors.title?.type === "minLength" && (
                  <ErrorMessage>Por favor no seas tan bobo</ErrorMessage>
                )}
                {errors.title?.type === "maxLength" && (
                  <ErrorMessage>Por favor no seas tan exagerado</ErrorMessage>
                )}
              </Grid>
              <Grid item>
                <InputText
                  {...register("description", {
                    minLength: 3,
                    maxLength: 250,
                    required: true,
                  })}
                  //multiline={true}
                  rows={5}
                  title="Descripción"
                />
                {errors.description?.type === "required" && (
                  <ErrorMessage>Por favor completa este campo</ErrorMessage>
                )}
                {errors.description?.type === "minLength" && (
                  <ErrorMessage>Por favor no seas tan bobo</ErrorMessage>
                )}
                {errors.description?.type === "maxLength" && (
                  <ErrorMessage>Por favor no seas tan exagerado</ErrorMessage>
                )}
              </Grid>
              <Grid container justifyContent="flex-end" item pb={2}>
                <ButtonSubmit disabled={isDisabled}>Enviar</ButtonSubmit>
              </Grid>
            </Grid>
            {showFeedback && <FeedbackMessage />}
          </Grid>
        </Box>
      </form>
    </div>
  );
}
