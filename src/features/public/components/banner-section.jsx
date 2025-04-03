const BannerSection = ({ image, text }) => {
  return (
    <section className="relative">
      <div className="xs:h-full h-44 w-full">
        <img src={`/public/images/banner/${image}.png`} alt="" className="size-full object-cover" />
      </div>
      {text && (
        <div className="text-tiny xs:text-sm absolute top-9.5 right-6 w-36 leading-relaxed sm:w-52 md:top-1/3 md:right-24 md:-translate-y-1/2 md:text-base lg:right-20 lg:w-74 lg:text-2xl">
          {text}
        </div>
      )}
    </section>
  );
};

export default BannerSection;
