import styles from "../styles/Navbar.module.css";
import { Divider } from "@mui/material";
import Title from "./Title";
import { GlobalStyles } from "@mui/styled-engine";

function Navbar() {
  return (
    <>
      <Title />
      <Divider className={styles.horizontalDivider} variant="middle" />
    </>
  );
}

export default Navbar;
