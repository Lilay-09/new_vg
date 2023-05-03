import Link from "next/link";
import { withRouter } from "next/router";
import React, { Children, use } from "react";

const ActiveLink = ({ router, href, children, black, id, hasChild, noBd }) => {
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
          padding: `1rem 0`,
          fontSize: isCurrentPath ? "18px" : "15px",
          fontWeight: isCurrentPath ? "700" : "200",
          color:
            (isCurrentPath && black) || router.asPath !== "/"
              ? "black"
              : isCurrentPath
              ? "white"
              : `${black ? "black" : "white"}`,

          opacity: isCurrentPath ? 1 : 0.8,
        }}
      >
        {children}
      </Link>
    </div>
  );
};

export default withRouter(ActiveLink);
