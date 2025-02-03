import { useEffect, useState } from "react";
import { OtpInput } from "reactjs-otp-input";

const Otp = ({ otp, setOtp, setStep, time = 5 }) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      if (timer === 0) {
        clearInterval(timerInterval);
      }
    };
  }, []);

  const handleChange = (otp) => setOtp(otp);

  return (
    <div>
      <h2 className="text-lg font-semibold">کد تایید را وارد کنید</h2>
      <div dir="ltr" className="mt-8">
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={5}
          isInputNum={true}
          containerStyle="flex justify-between gap-4"
          inputStyle="min-w-12 h-12 rounded-sm border border-neutral-200"
          focusStyle="bg-amber-100"
        />
      </div>
      <div className="mt-8 flex items-center justify-between text-sm">
        <span>ارسال دوباره</span>
        <span>{timer}</span>
      </div>
      <button className="identity-btn">ثبت</button>
      <div className="mt-8 text-sm">
        <span className="cursor-pointer" onClick={() => setStep((prev) => prev - 1)}>
          صفحه قبلی
        </span>
      </div>
    </div>
  );
};
export default Otp;
