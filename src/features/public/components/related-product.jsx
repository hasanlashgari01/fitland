import { HiHandThumbUp } from "react-icons/hi2";
import { useRelatedProduct } from "../../../hooks/useProduct";
import TopSection from "./top-section";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./product";

const RelatedProduct = ({ productId }) => {
  const { data, isLoading } = useRelatedProduct({ productId });
  console.log("🚀 ~ RelatedProduct ~ data:", data);

  return (
    <div className="mt-20 border-t border-gray-300 py-5">
      <TopSection text="محصولات مرتبط" icon={<HiHandThumbUp className="size-9.5 text-orange-500" />} />
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
          data.products.map((product) => (
            <SwiperSlide key={product._id}>
              <Product {...product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default RelatedProduct;
