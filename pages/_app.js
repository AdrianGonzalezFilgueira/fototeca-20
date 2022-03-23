import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: [
      // "Red Hat Display",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: "rgba(255, 255, 255, 20%)",
          border: "1px solid #ced4da",
          color: "white",
          fontSize: 16,
          padding: "10px 12px",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          paddingLeft: "20px",
          borderRadius: "10px",
          background: "none",
          boxShadow: "none",
        },
      },
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Momentum</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;600&display=swap"
          rel="stylesheet"
        /> */}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box style={{ flex: "0 0 auto" }}>
          <Navbar />
        </Box>
        <Box style={{ flex: "1 0 auto" }}>
          <Component {...pageProps} />
        </Box>
        <Box style={{ flex: "0 0 auto" }}>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}
