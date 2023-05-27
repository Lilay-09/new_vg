import React, { createContext, useEffect, useReducer } from "react";
import { reducers } from "./reducers";
import { useRouter } from "next/router";
import tranEn from "../utils/Translations/en.json";
export const DataContext = createContext();
const GlobalState = ({ children }) => {
  const router = useRouter();

  const initialState = {
    lang: { d_lang: "en" },
    trans: tranEn,
  };
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    const __get_languague__ = localStorage.getItem("__lang_");
    const url = window.location.origin;
    var currentURL = window.location.href;
    const asPath = router.asPath.slice(1, 3);
    let translations;

    dispatch({
      type: "LANG",
      payload: {
        d_lang: `${
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
