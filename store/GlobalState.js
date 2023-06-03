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
    search: {},
    view: {},
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { view } = state;

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

  useEffect(() => {
    const __local__str__Views = JSON.parse(localStorage.getItem("views"));
    if (__local__str__Views) {
      dispatch({ type: "VIEW", payload: { home: __local__str__Views.home } });
    } else {
      dispatch({ type: "VIEW", payload: { home: 1, team: 1 } });
    }
  }, []);
  // useEffect(() => {
  //   const __local__str__Views = JSON.parse(localStorage.getItem("views"));
  //   if (__local__str__Views) {
  //     dispatch({ type: "VIEW", payload: { home: __local__str__Views.home } });
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem("views", JSON.stringify(view));
  // }, [view]);
  // useEffect(() => {
  //   const _views_ = JSON.parse(localStorage.getItem("views"));
  //   if (_views_) dispatch({ type: "ADD_CART", payload: { home: _views_ } });
  // }, []);
  // useEffect(() => {
  //   let a = JSON.parse(localStorage.getItem("views"));
  //   console.log(a);
  //   console.log(a.home);
  // }, []);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default GlobalState;
