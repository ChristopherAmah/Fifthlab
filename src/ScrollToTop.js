// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object, which contains the pathname
  const { pathname } = useLocation();

  // useEffect hook runs every time the pathname changes
  useEffect(() => {
    // Scroll the window to the top-left corner (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: Re-run effect when pathname changes

  // This component doesn't render anything visually
  return null;
};

export default ScrollToTop;