// Import necessary modules and libraries
import { useEffect, useState } from "react";

/**
 * Custom React hook to detect the operating system of the user.
 * This hook returns two states: `isWindows` and `isMac`, which are
 * set to `true` if the user is on Windows or MacOS, respectively.
 * If the operating system cannot be determined, the states will be set to `null`.
 */
const useDetectOS = () => {
  // Initialize the states for Windows and Mac with a value of `null`.
  const [isWindows, setIsWindows] = useState<boolean | null>(null);
  const [isMac, setIsMac] = useState<boolean | null>(null);

  // Run the effect when the component is mounted.
  useEffect(() => {
    // Get the user agent string from the `navigator` object.
    const userAgent = window.navigator.userAgent;

    // Check if the user agent string contains "Windows" and set `isWindows`
    // accordingly.
    setIsWindows(userAgent.indexOf("Windows") > -1);

    // Check if the user agent string contains "Macintosh" and set `isMac`
    // accordingly.
    setIsMac(userAgent.indexOf("Macintosh") > -1);
  }, []); // Empty dependency array, run the effect only once.

  // Return the states `isWindows` and `isMac` as an object.
  return { isWindows, isMac };
};

// Export the hook as the default export.
export default useDetectOS;
