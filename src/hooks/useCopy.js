import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";

export const useCopy = (resetInterval = null) => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = (target) => {
    if (
      typeof target === "string" ||
      typeof target === "number" ||
      Array.isArray(target)
    ) {
      copy(target.toString());
      setCopied(true);
    } else if (
      typeof target === "object" &&
      Object.keys(target).length > 0 &&
      target !== null
    ) {
      // turn object into readable text and copy
      const recursivelyFlattenObjectIntoArray = (obj) => {
        const result = [];
        for (let key in obj) {
          if (typeof obj[key] === "object") {
            const children = recursivelyFlattenObjectIntoArray(obj[key]);
            result.push(`${key}: ${children}`);
          } else {
            result.push(`${key}: ${obj[key]}`);
          }
        }
        return result;
      };

      copy(recursivelyFlattenObjectIntoArray(target).toString());
      setCopied(true);
    } else {
      setCopied(false);
      throw new Error(`Cannot copy to clipboard.`);
    }
  };

  useEffect(() => {
    let timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
};
