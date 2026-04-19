"use client";

import { useEffect } from "react";

export default function PrelineScript() {
  useEffect(() => {
    // Dynamically import Preline
    import("preline").then(() => {
      if (typeof window !== "undefined" && window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });
  }, []);

  useEffect(() => {
    // Reinitialize Preline on route changes
    const handleRouteChange = () => {
      if (typeof window !== "undefined" && window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    };

    window.addEventListener("load", handleRouteChange);
    return () => {
      window.removeEventListener("load", handleRouteChange);
    };
  }, []);

  return null;
}
