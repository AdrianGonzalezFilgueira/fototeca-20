import { Button } from "@mui/material";

export default function ButtonSubmit({children}) {
  return (
    <Button variant="contained" component="span">
        {children}
    </Button>
  );
}
