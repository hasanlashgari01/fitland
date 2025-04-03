import { useState } from "react";
import Input from "../../features/my-account/components/input";
import { useMe } from "../../hooks/useUser";
import useTitle from "../../hooks/useTitle";

const MyDashboardPage = () => {
  useTitle("پنل ادمین - حساب کاربری");
  const { data } = useMe();
  const [user, setUser] = useState({
    fullName: data.fullName ?? "",
    nationalCode: data.nationalCode ?? "",
    mobile: data.mobile ?? "",
    email: data.email ?? "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (value) {
      setUser({ ...user, [name]: value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <div className="px-6">
      <form className="flex flex-col gap-6" onSubmit={submitHandler}>
        <div className="flex flex-wrap gap-6 *:flex-1">
          <Input id="fullName" label="نام و نام خانوادگی" value={user.fullName} onChange={changeHandler} />
          <Input id="nationalCode" label="کد ملی" value={user.nationalCode} onChange={changeHandler} />
          <Input id="mobile" label="موبایل" value={user.mobile} onChange={changeHandler} />
          <Input id="email" label="ایمیل" value={user.email} onChange={changeHandler} />
        </div>
        <input
          type="submit"
          value="ثبت"
          className="bg-primary h-12 w-full rounded-lg text-white md:w-40 lg:cursor-pointer"
        />
      </form>
    </div>
  );
};

export default MyDashboardPage;
