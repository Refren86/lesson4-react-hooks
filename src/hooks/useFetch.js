import { useState } from "react";

// callback will be function which makes request to API
export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, isLoading, error];
};
