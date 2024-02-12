

import { useState, useEffect } from 'react';

// Custom hook to manage screen width
function useScreenWidth() {
  const [width, setWidth] = useState(getWidthCategory());

  // Function to determine the width category based on window.innerWidth
  function getWidthCategory() {
    const size = window.innerWidth;
    if (size < 320) {
      return 'mobileS';
    } else if (size < 375) {
      return 'mobileM';
    } else if (size < 425) {
      return 'mobileL';
    } else if (size < 768) {
      return 'tablet';
    } else if (size < 1024) {
      return 'laptop';
    } else {
      return 'pc';
    }
  }

  // Function to handle window resize and update width state
  function handleResize() {
    const newWidthCategory = getWidthCategory();
    if (newWidthCategory !== width) {
      setWidth(newWidthCategory);
    }
  }

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return width;
}

export default useScreenWidth;
