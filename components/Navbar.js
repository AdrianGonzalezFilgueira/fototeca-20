import { Divider } from "@mui/material";
import Title from "./Title";

export default function Navbar() {
  return (
    <>
      <div style={{
        background: 'linear-gradient(to right, rgba(255,255,255,0) 5%, rgba(0, 8, 188, 0.35) 33%, rgba(0, 8, 188, 0.35) 66%, rgba(255,255,255,0) 95%)',

      }}>
        <Title />
      </div>
      <Divider
        variant="middle"
      />
    </>
  );
}
