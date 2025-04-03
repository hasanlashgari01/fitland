import { HiBold } from "react-icons/hi2";
import FeatureBox from "./feature-box";

const FeaturesSection = () => {
  return (
    <section className="bg-sky-100 -mb-32 py-8 md:py-16">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:justify-center items-center">
          <div className="xs:gap-6 flex justify-center gap-2.5">
            <FeatureBox text="ارسال سریع" icon={<HiBold />} />
            <FeatureBox text="ارسال سریع" icon={<HiBold />} />
            <FeatureBox text="ارسال سریع" icon={<HiBold />} />
          </div>
          <p className="text-center sm:max-w-80 text-sm sm:text-base md:text-right md:w-56 leading-relaxed">با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
