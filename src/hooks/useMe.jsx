import { useEffect, useState } from "react";
import { httpService } from "../core/http-service";

const useMe = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMe = async () => {
      setIsLoading(true);
      const result = await httpService("/auth/me").then((res) => res.data);
      setIsLoading(false);
      setData(result);
    };

    getMe();
  }, []);

  return [data, isLoading];
};

export default useMe;
