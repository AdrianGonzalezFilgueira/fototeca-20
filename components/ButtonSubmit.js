import { Button } from "@mui/material";

export default function ButtonSubmit({ children, disabled }) {
  return (
    <Button
      type="submit"
      variant="contained"
      component="button"
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
