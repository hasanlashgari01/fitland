import { HiOutlineHandThumbUp } from "react-icons/hi2";
import Button from "./button";
import HeroBox from "./hero-box";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="container">
        <div className="flex justify-between gap-8 pt-8 max-md:flex-col-reverse">
          <div className="flex w-64 flex-col space-y-4 sm:w-80 md:w-92 md:justify-center lg:h-80">
            <h4 className="text-xs text-neutral-600">راحت و مطمئن خرید کنید</h4>
            <h3 className="text-secondary-900 text-lg font-semibold">همراه تو در مسیر سلامتی</h3>
            <h2 className="text-primary text-lg font-semibold">سهم بزرگ خودتان را امروز بگیرید!</h2>
            <p className="text-xs/5 text-neutral-600 md:text-sm/7">
              بزرگترین حراج فصل فیت لند همین حالا شروع کن و محصولات با یه تخفیف شگفت انگیز بخر!
            </p>
            <Button href="/" />
          </div>
          <div className="flex h-64 justify-center max-lg:relative sm:h-80 lg:h-118">
            <img src="/public/images/hero-desktop.png" alt="" className="z-10 h-full object-cover" />
            <img
              src="/public/hero-shape.svg"
              alt=""
              className="absolute inset-x-0 bottom-0 -z-0 h-16 w-full object-cover lg:h-26"
            />
          </div>
          <div className="space-y-6 max-xl:hidden">
            <HeroBox icon={<HiOutlineHandThumbUp />} number={300} text="محصولات متنوع" />
            <HeroBox icon={<HiOutlineHandThumbUp />} number={95} text="رضایت مشتری" />
            <HeroBox icon={<HiOutlineHandThumbUp />} number={4} text="از خرید تا دریافت" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
