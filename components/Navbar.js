import styles from "../styles/Navbar.module.css";
import { Divider } from "@mui/material";
import Title from "./Title";

export default function Navbar() {
  return (
    <>
      <Title />
      <Divider className={styles.horizontalDivider} variant="middle" />
    </>
  );
}
