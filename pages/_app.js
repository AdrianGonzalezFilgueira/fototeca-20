import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
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
