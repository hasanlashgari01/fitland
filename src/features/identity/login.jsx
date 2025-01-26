import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Otp from "./components/otp";
import { useState } from "react";
import { httpService } from "../../core/http-service";
import { setCookie } from "../../shared/cookie";

const Login = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mobile: "" });

  const onSubmit = async (data) => {
    if (step === 1) {
      const result = await httpService.post("/auth/login", data);
      result.status === 200 && setStep((prev) => prev + 1);
    } else if (step === 2) {
      const result = await httpService.post("/auth/check-otp", {
        mobile: data.mobile,
        code: otp,
      });
      setCookie("accessToken", result.data.accessToken, 30);
    }
  };

  const renderForms = () => {
    switch (step) {
      case 1: {
        return (
          <>
            <h2 className="text-lg font-semibold">ورود</h2>
            <div className="mt-8 grid gap-y-8">
              <div>
                <label className="text-sm">شماره تلفن همراه *</label>
                <input
                  type="text"
                  className={`form-input ${errors.mobile && "border-red-500"}`}
                  dir="ltr"
                  {...register("mobile", {
                    required: "موبایل الزامی است",
                    minLength: 11,
                    maxLength: 11,
                  })}
                />
              </div>
            </div>
            <button className="bg-primary mt-8 w-full cursor-pointer rounded-lg py-3 text-white">تایید</button>
            <p className="mt-8 text-xs">
              هنوز ثبت نام نکردی؟ <Link to="/register">ثبت نام</Link>
            </p>
          </>
        );
      }
      case 2: {
        return <Otp otp={otp} setOtp={setOtp} setStep={setStep} />;
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-[358px] rounded-lg border border-neutral-200 px-6 py-8 md:w-[456px]"
      >
        {renderForms()}
      </form>
    </>
  );
};

export default Login;
