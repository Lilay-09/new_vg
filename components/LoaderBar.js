import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LoadingBar = () => {
  //   const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoadingProgress(25);
    };

    const handleComplete = () => {
      setLoadingProgress(100); // Set the loading progress to 100 when the route change is complete
      setTimeout(() => {
        setLoadingProgress(0); // Reset the loading progress after a brief delay
      }, 500);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className="loading-bar" style={{ width: `${loadingProgress}%` }} />
  );
};

export default LoadingBar;
