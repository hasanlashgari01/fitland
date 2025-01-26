import { useEffect } from "react";
import { httpService } from "../core/http-service";

const HomePage = () => {
  useEffect(() => {
    const getMe = async () => {
      const result = await httpService("/auth/me");
      console.log("🚀 ~ useEffect ~ result:", result);
    };

    getMe();
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
