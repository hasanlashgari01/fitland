import BannerSection from "../../features/public/components/banner-section";
import FeaturesSection from "../../features/public/components/features-section";
import HeroSection from "../../features/public/components/hero-section";
import NewProductsOfBrandSection from "../../features/public/components/new-products-of-brand-section";
import SliderSection from "../../features/public/components/slider-section";
import { useLatestSets, useLatestShoes, useSpecialOffer } from "../../hooks/useProduct";
import useTitle from "../../hooks/useTitle";

const HomePage = () => {
  useTitle("صفحه اصلی");
  const { data: specialOfferData, isLoading: isLoadingSpecialOffer } = useSpecialOffer();
  const { data: latestShoesData, isLoading: isLoadingLatestShoes } = useLatestShoes();
  const { data: latestSetsData, isLoading: isLoadingLatestSets } = useLatestSets();

  return (
    <main>
      <HeroSection />
      <NewProductsOfBrandSection title="جدیدترین" />
      <BannerSection image={1} text="برای حال خوب لوازم ایروبیک و تناسب اندام بگیر" />
      <div className="mb-15.5">
        <SliderSection products={specialOfferData} isLoading={isLoadingSpecialOffer} text="تخفیفات ویژه" />
        <SliderSection
          products={latestShoesData}
          isLoading={isLoadingLatestShoes}
          className="bg-white"
          text="جدیدترین کفش ها"
        />
      </div>
      <BannerSection image={2} text="برای حال خوب لوازم ایروبیک و تناسب اندام بگیر" />
      <div className="mb-15.5">
        <SliderSection products={latestSetsData} isLoading={isLoadingLatestSets} text="جدیدترین ست ها" />
        <NewProductsOfBrandSection title="محبوب‌ترین" />
      </div>
      <BannerSection image={3} />
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
