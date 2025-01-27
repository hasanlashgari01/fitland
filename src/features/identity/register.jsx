import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { httpService } from "../../core/http-service";
import Otp from "./components/otp";
import toast from "react-hot-toast";

const Register = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    fullName: "",
    mobile: "",
    email: "",
  });

  const onSubmit = async (data) => {
    if (step === 1) {
      await httpService
        .post("/auth/register", data)
        .then((response) => {
          console.log(response.data.otp);
          toast.success(response.data.message);
          setStep((prev) => prev + 1);
        })
        .catch((error) => toast.error(error.response.data.message));
    }
    if (step === 2) {
      if (otp.length === 5) {
        await httpService
          .post("/auth/check-otp", { mobile: data.mobile, code: otp })
          .then((response) => {
            toast.success(response.data.message);
            navigate("/login");
          })
          .catch((error) => toast.error(error.response.data.message));
      } else toast.error("کد باید ۵ رقمی باشد");
    }
  };

  const renderForms = () => {
    switch (step) {
      case 1: {
        return (
          <>
            <h2 className="text-lg font-semibold">ثبت نام</h2>
            <div className="mt-8 grid gap-y-8">
              <div>
                <label className="text-sm">نام و نام خانوادگی*</label>
                <input
                  type="text"
                  className={`form-input ${errors?.fullName && "border-red-500"}`}
                  {...register("fullName", { required: "نام الزامی است", minLength: 2 })}
                />
              </div>
              <div>
                <label className="text-sm">شماره تلفن همراه *</label>
                <input
                  type="text"
                  className={`form-input ${errors?.mobile && "border-red-500"}`}
                  dir="ltr"
                  {...register("mobile", { required: "موبایل الزامی است", minLength: 11, maxLength: 11 })}
                />
              </div>
              <div>
                <label className="text-sm">ایمیل</label>
                <input
                  type="email"
                  className={`form-input ${errors?.email && "border-red-500"}`}
                  dir="ltr"
                  {...register("email")}
                />
              </div>
            </div>
            <button className="bg-primary mt-8 w-full cursor-pointer rounded-lg py-3 text-white">تایید</button>
            <div className="mt-8">
              <p className="text-xs">
                ورود شما به معنای پذیرش شرایط <span className="text-secondary-300">فیت لند</span> و{" "}
                <span className="text-secondary-300">قوانین حریم خصوصی</span> ماست
              </p>
              <p className="mt-8 text-xs">
                ثبت نام کردی؟ <Link to="/login">ورود</Link>
              </p>
            </div>
          </>
        );
      }
      case 2: {
        return <Otp otp={otp} setOtp={setOtp} setStep={setStep} />;
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-[358px] rounded-lg border border-neutral-200 px-6 py-8 md:w-[456px]"
    >
      {renderForms()}
    </form>
  );
};

export default Register;
