import { Divider } from "@mui/material";
import Title from "./Title";

export default function Navbar() {
  return (
    <>
      <Title />
      <Divider style={{
        backgroundColor: "white",
        margin: "0 4%"
        }} variant="middle" />
    </>
  );
}
