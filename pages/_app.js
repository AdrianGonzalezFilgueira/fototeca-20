import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Component {...pageProps} />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
}
