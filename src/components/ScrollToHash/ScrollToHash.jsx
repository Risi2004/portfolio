import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element with the ID matching the hash
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay scroll slightly to ensure page components are mounted/rendered
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // Scroll to top of the page when navigating to a path without a hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
