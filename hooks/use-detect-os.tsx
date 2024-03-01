import { useEffect, useState } from "react";

const useDetectOS = () => {
  const [isWindows, setIsWindows] = useState<boolean | null>(null);
  const [isMac, setIsMac] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsWindows(userAgent.indexOf("Windows") > -1);
    setIsMac(userAgent.indexOf("Macintosh") > -1);
  }, []);

  return { isWindows, isMac };
};

export default useDetectOS;
