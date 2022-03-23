import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Grid,
  Fab,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ButtonUpload from "../components/ButtonUpload";
import ButtonSubmit from "../components/ButtonSubmit";
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
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

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

  const handleOnChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);

    console.log(e.target);
  };

  return (
    <div className="mainDiv" style={{ margin: "20px", marginTop: "65px" }}>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="space-evenly">
            <Link href="/pictures">
              <Fab color="primary" aria-label="add">
                <ArrowBackIosIcon
                  sx={{ fontSize: 50, color: "white", paddingRight: "25" }}
                />
              </Fab>
            </Link>

            <Grid
              container
              item
              xs={5}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                width="500px"
                height="500px"
                display="flex"
                justifyContent="center"
                border="1px solid #fff"
                borderRadius={1}
              >
                <ButtonUpload
                  register={register}
                  onChange={(e) => handleOnChange(e)}
                />
                <img src={preview} />
              </Box>
            </Grid>
            <Grid item xs={5} container spacing={2} direction="column" py={2}>
              <Grid item>
                <InputLabel
                  shrink
                  htmlFor="title"
                  style={{ color: "white", margin: 0 }}
                >
                  TÍTULO
                </InputLabel>
                <InputBase
                  id="title"
                  fullWidth
                  {...register("title", {
                    minLength: 3,
                    maxLength: 100,
                    required: true,
                  })}
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
                <InputLabel
                  shrink
                  htmlFor="description"
                  style={{ color: "white", margin: 0 }}
                >
                  DESCRIPCIÓN
                </InputLabel>
                <InputBase
                  id="description"
                  {...register("description", {
                    minLength: 3,
                    maxLength: 250,
                    required: true,
                  })}
                  rows={5}
                  multiline
                  fullWidth
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
