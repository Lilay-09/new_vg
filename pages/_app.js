import { useEffect, useState } from "react";
import GlobalState from "../store/GlobalState";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Router } from "next/router";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
    });
  }, []);
  return (
    <GlobalState>
      {isLoading && (
        <div className="loader__container">
          <div>Loading</div>
          <div class="loader"></div>
        </div>
      )}
      <Component {...pageProps} />
    </GlobalState>
  );
}

export default MyApp;
