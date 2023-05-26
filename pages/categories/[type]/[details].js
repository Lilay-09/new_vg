import { useRouter } from "next/router";
import React from "react";

const FindeLocaiton = () => {
  const router = useRouter();
  const q = router.pathname;
  return <div>FindeLocaiton</div>;
};

export default FindeLocaiton;
