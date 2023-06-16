import Link from "next/link";
import { withRouter } from "next/router";
import React, { Children, use, useContext } from "react";
import { DataContext } from "../store/GlobalState";

const ActiveLink = ({
  router,
  href,
  children,
  black,
  id,
  hasChild,
  noBd,
  color,
  locale,
}) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  const isCurrentPath = router.pathname === href || router.asPath === href;
  const { state, dispatch } = useContext(DataContext);
  let lang = state.lang.d_lang;
  return (
    <Link
      href={href}
      id={id}
      onClick={handleClick}
      locale={locale}
      style={{
        textDecoration: "none",
        padding: `1rem 0`,
        fontSize: isCurrentPath ? "18px" : "15px",
        fontWeight: isCurrentPath ? "700" : "200",
        color:
          (isCurrentPath && black) ||
          (router.asPath !== "/" &&
            router.asPath !== `/${lang}` &&
            router.asPath === `/${lang}?item=1` &&
            router.asPath === `/${lang}?item=2`)
            ? "black"
            : isCurrentPath
            ? "white"
            : `${black ? "black" : color ? `${color}` : "white"}`,

        opacity: isCurrentPath ? 1 : 0.8,
      }}
    >
      {children}
    </Link>
  );
};

export default withRouter(ActiveLink);
