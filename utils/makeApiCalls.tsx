"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface ApiCallResult<T> {
  data: any | null;
  error: Error | null;
  isLoading: boolean;
}

const useApiCall = <T,>(apiUrl: string): ApiCallResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(apiUrl);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useApiCall;
