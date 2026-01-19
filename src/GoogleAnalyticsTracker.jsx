import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-QW0BMQE9C8", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalyticsTracker;
