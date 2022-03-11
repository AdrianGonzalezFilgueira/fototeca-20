import { Button } from "@mui/material";

export default function ButtonSubmit({ children }) {
  return (
    <Button type="submit" variant="contained" component="button">
      {children}
    </Button>
  );
}
