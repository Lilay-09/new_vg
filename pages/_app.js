import GlobalState from "../store/GlobalState";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
  );
}

export default MyApp;
