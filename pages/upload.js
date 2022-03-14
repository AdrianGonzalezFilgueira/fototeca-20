import ButtonUpload from "../components/ButtonUpload";
import TextField from "@mui/material/TextField";
import CalendarPicker from "@mui/lab/CalendarPicker";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonSubmit from "../components/ButtonSubmit";

export default function UploadPage() {
  const [date, setDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const onSubmit = (data) => {
    console.log(data.title);
    console.log(data.description);
    console.log(data.uploader);
    console.log(date); // MUI Calendar
    console.log(data);
      const postPicture = async () => {
      await fetch(
        "api/pictures", {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json'
          //'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({title: data.title, description: data.description})
      }
      )
    }
    postPicture() 
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
            <Grid item xs={5}>
              <Grid item>
                <TextField
                  {...register("title", {minLength: 1, maxLength: 100})}
                  id="outlined-basic"
                  label="Título"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  {...register("description", {minLength: 1, maxLength: 250})}
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
