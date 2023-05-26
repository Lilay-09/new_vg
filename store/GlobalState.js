import React, { createContext, useEffect, useReducer } from "react";
import { reducers } from "./reducers";
import { useRouter } from "next/router";

export const DataContext = createContext();
const GlobalState = ({ children }) => {
  const initialState = {
    lang: { d_lang: "en" },
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const router = useRouter();
  useEffect(() => {
    const __get_languague__ = localStorage.getItem("__lang_");
    const url = window.location.origin;
    var currentURL = window.location.href;
    const asPath = router.asPath.slice(1, 3);
    console.log("url", currentURL, "path", asPath);
    dispatch({
      type: "LANG",
      payload: {
        d_lang:
          typeof __get_languague__ === "undefined"
            ? __get_languague__
            : `${
                asPath.length <= 0
                  ? "en"
                  : asPath === "kh"
                  ? "kh"
                  : asPath === "ch"
                  ? "ch"
                  : "en"
              }`,
      },
    });
  }, [router]);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default GlobalState;
