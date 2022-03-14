import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
