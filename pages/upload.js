import ButtonUpload from "../components/ButtonUpload";
import TextField from "@mui/material/TextField";
import CalendarPicker from "@mui/lab/CalendarPicker";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonSubmit from "../components/ButtonSubmit";

export default function UploadPage() {
  const [date, setDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => alert(JSON.stringify(d));
  const formRef = useRef();
  const fileRef = useRef();
  //console.log(fileRef.current);
  //Devuelve el formulario
  //   console.log(formRef.current);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formRef.current);
  // };

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
              <ButtonUpload fileRef={fileRef} name={register("file")} />
            </Grid>
            <Grid item xs={5}>
              <Grid item>
                <TextField
                  {...register("title")}
                  id="outlined-basic"
                  label="Título"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  {...register("description")}
                  id="outlined-multiline-static"
                  label="Descripción"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <CalendarPicker
                    date={date}
                    onChange={(newDate) => setDate(newDate)}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" item xs={11}>
              <ButtonSubmit>Enviar</ButtonSubmit>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}
