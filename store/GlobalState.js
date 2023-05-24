import React, { createContext, useEffect, useReducer } from "react";
import { reducers } from "./reducers";

export const DataContext = createContext();
const GlobalState = ({ children }) => {
  const initialState = {
    lang: { d_lang: "en", flag: "uk1.png" },
  };
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    const __get_languague__ = localStorage.getItem("__lang_");
    const __get_lang_flag_ = localStorage.getItem("__lang_flag_");
    dispatch({
      type: "LANG",
      payload: { d_lang: __get_languague__, flag: __get_lang_flag_ },
    });
  }, []);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default GlobalState;
