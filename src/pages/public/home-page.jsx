import BannerSection from "../../features/public/components/banner-section";
import FeaturesSection from "../../features/public/components/features-section";
import HeroSection from "../../features/public/components/hero-section";
import NewProductsOfBrandSection from "../../features/public/components/new-products-of-brand-section";
import SliderSection from "../../features/public/components/slider-section";
import { useLatestShoes, useSpecialOffer } from "../../hooks/useProduct";
import useTitle from "../../hooks/useTitle";

const HomePage = () => {
  useTitle("صفحه اصلی");
  const { data: specialOfferData, isLoading: isLoadingSpecialOffer } = useSpecialOffer();
  const { data: latestData, isLoading: isLoadingLatest } = useLatestShoes();

  return (
    <main>
      <HeroSection />
      <NewProductsOfBrandSection title="جدیدترین" />
      <BannerSection image={1} text="برای حال خوب لوازم ایروبیک و تناسب اندام بگیر" />
      <div className="mb-15.5">
        <SliderSection products={specialOfferData} isLoading={isLoadingSpecialOffer} text="تخفیفات ویژه" />
        <SliderSection
          products={latestData}
          isLoading={isLoadingLatest}
          className="bg-white"
          text="تیم مورد علاقه"
        />
      </div>
      <BannerSection image={2} text="برای حال خوب لوازم ایروبیک و تناسب اندام بگیر" />
      <div className="mb-15.5">
        <SliderSection products={[1, 2, 3, 4]} text="تخفیفات ویژه" />
        <NewProductsOfBrandSection title="محبوب‌ترین" />
      </div>
      <BannerSection image={3} />
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
