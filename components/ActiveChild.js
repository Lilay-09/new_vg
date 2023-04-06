import Link from "next/link";
import { withRouter } from "next/router";
import React, { Children, use } from "react";

const ActiveChild = ({ router, href, children, color, id }) => {
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
    <div style={{ width: "100%" }}>
      <Link
        href={href}
        id={id}
        onClick={handleClick}
        style={{
          textDecoration: "none",
          fontSize: isCurrentPath ? "16px" : "13px",
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

export default withRouter(ActiveChild);
