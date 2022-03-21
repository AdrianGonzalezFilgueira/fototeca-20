import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Box style={{ flex: "0 0 auto" }}>
        <Navbar />
      </Box>
      <Box style={{ flex: "1 0 auto" }}>
        <Component {...pageProps} />
      </Box>
      <Box style={{ flex: "0 0 auto" }}>
        <Footer />
      </Box>
    </>
  );
}
