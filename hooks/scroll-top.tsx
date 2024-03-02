// Import necessary modules and libraries
import React, { useEffect, useState } from "react";

/**
 * Custom hook to track the scroll position of the window.
 * When the user scrolls down more than the specified threshold, the hook returns `true`.
 * Otherwise, it returns `false`.
 * @param {number} threshold - The number of pixels from the top of the page that triggers the scrolled state. Default is 10.
 */
const useScrollTop = (threshold = 10) => {
  // Initialize state for scrolled condition
  const [scrolled, setScrolled] = useState(false);

  /**
   * Event listener for scrolling.
   * If the user scrolls down more than the threshold, update the scrolled state to true.
   * Otherwise, update the scrolled state to false.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Return cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]); // Include threshold as a dependency to update on threshold change

  // Return scrolled state
  return scrolled;
};

// Export the custom hook
export default useScrollTop;
