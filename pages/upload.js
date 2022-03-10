import UploadButton from "../components/UploadButton";
import TextField from "@mui/material/TextField";
import CalendarPicker from "@mui/lab/CalendarPicker";
import { useState } from "react";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonSubmit from "../components/ButtonSubmit";

export default function UploadPage() {
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {};

  return (
    <div className="mainDiv">
      <form onSubmit={handleSubmit}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="space-evenly">
            <Grid item xs={5} container justifyContent="center" alignItems="center">
              <UploadButton />
            </Grid>
            <Grid item xs={5}>
              <Grid item>
                <TextField
                  name="title"
                  id="outlined-basic"
                  label="Título"
                  variant="outlined"
                  fullWidth
                  />
              </Grid>
              <Grid item>
                <TextField
                  name="description"
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
