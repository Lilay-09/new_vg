import Link from "next/link";
import { withRouter } from "next/router";
import React, { Children, use } from "react";
import ActiveChild from "./ActiveChild";

const ActiveLink = ({ router, href, children, color, id, hasChild }) => {
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
  return (
    <div>
      <Link
        href={href}
        id={id}
        onClick={handleClick}
        style={{
          textDecoration: "none",
          // padding: noBd ? "none" : "normal",
          padding: `1.3vw 0`,
          borderBottom: isCurrentPath ? "3px solid #1A1347" : "none",
          fontSize: isCurrentPath ? "18px" : "15px",
          fontWeight: isCurrentPath ? "700" : "normal",
          color: isCurrentPath ? "black" : `#6D6D75`,
          opacity: isCurrentPath ? 1 : 0.8,
        }}
      >
        {children}
      </Link>
    </div>
  );
};

export default withRouter(ActiveLink);
