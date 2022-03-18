import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";


export default function FeedbackMessage({showFeedback}) {

    const [open, setOpen] = useState(showFeedback);
    console.log(open);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const action = (
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      );

    return(
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Imagen Subida Correctamente
            </Alert>
        </Snackbar>
    )
}