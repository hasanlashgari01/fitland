import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../../../shared/cn";
import Product from "./product";
import SectionHeader from "./section-header";

const SliderSection = ({ products, isLoading, className, text, linkText }) => {
  return (
    <section className={cn("bg-pink-100 py-8 md:py-20 lg:py-28", className)}>
      <SectionHeader text={text} linkText={linkText} />
      <div className="xs:pr-4 mx-auto pr-6 lg:pr-16 xl:px-27">
        <Swiper
          slidesPerView={1.4}
          spaceBetween={20}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {!isLoading &&
            products.map((product) => (
              <SwiperSlide key={product._id}>
                <Product {...product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSection;
