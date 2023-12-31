import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
  const location = useLocation();
  // Scroll to top if path changes
  useEffect(() => {
    if(location.pathname === "/" && location.hash !== "") {
      //need to scroll since on homepage we have scrollable hash links
      return;
    }
    setTimeout(() => window.scrollTo(0, 0), 5);
  }, [location.pathname]);

  return <>
    {children}
  </>;
}

export default ScrollToTop;