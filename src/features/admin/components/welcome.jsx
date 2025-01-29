import { useEffect, useState } from "react";

const Welcome = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const hour = new Date().getHours(); // دریافت ساعت فعلی

    if (hour >= 5 && hour < 12) {
      setMessage("صبح بخیر ☀️");
    } else if (hour >= 12 && hour < 17) {
      setMessage("ظهر بخیر ☀️");
    } else if (hour >= 17 && hour < 20) {
      setMessage("عصر بخیر 🌅");
    } else {
      setMessage("شب بخیر 🌙");
    }
  }, []);

  return <span className="text-2xl lg:text-4xl font-semibold">{message}</span>;
};
export default Welcome;
