import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Grid, Fab, TextField, InputBase } from "@mui/material";
import Link from "next/link";
import ButtonUpload from "../components/ButtonUpload";
import ButtonSubmit from "../components/ButtonSubmit";
import TextInput from "../components/TextInput";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import ErrorMessage from "../components/ErrorMessage";
import { useRouter } from "next/router";
import FeedbackMessage from "../components/Feedback";
import Textarea from "../components/Textarea";
import { styled } from "@mui/system";

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

  const handleOnChange = () => {};

  const StyledTextInput = styled(InputBase)({
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: "rgba(255, 255, 255, 20%)",
      border: "1px solid #ced4da",
      color: "white",
      fontSize: 16,
      padding: "10px 12px",
    },
  });

  return (
    <div className="mainDiv" style={{margin: "20px", marginTop: "65px"}}>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="space-evenly">
            <Link href="/pictures">
              <Fab
                sx={{paddingLeft: "20px", borderRadius: "10px", background: "none", boxShadow: "none",}}
                color="primary"
                aria-label="add"
              >
                <ArrowBackIosIcon sx={{ fontSize: 50, color: "white", paddingRight: "25"}} />
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
            </Grid>
            <Grid item xs={5} container spacing={2} direction="column" py={2}>
              <Grid item>
                <TextInput
                  register={register}
                  fullWidth={true}
                  title="TÍTULO"
                  minLength={3}
                  maxLength={100}
                  fieldName="title"
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
                <Textarea
                  register={register}
                  title="DECRIPCIÓN"
                  multiline={true}
                  fullWidth={true}
                  rows={5}
                  minLength={3}
                  maxLength={100}
                  fieldName="description"
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
              <Grid item>
                <StyledTextInput multiline fullWidth rows={5} />
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
