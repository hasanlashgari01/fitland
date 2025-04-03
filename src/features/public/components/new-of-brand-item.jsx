import { Link } from "react-router";

const NewOfBrandItem = ({ href, brand, brandPersian, percent }) => {
  return (
    <Link
      to={href ?? `/brand/${brand}`}
      className="relative h-72 flex-1 basis-40.75 overflow-hidden rounded-lg bg-gray-200 max-sm:basis-72 md:h-96"
    >
      <div className="mx-auto h-full w-fit">
        <img src={`/public/images/brand/${brand}.png`} alt="" className="h-full object-cover" />
      </div>
      <div className="brand-card text-tiny xs:text-xs/relaxed absolute inset-x-0 bottom-0 mx-1 flex h-21 flex-col justify-end rounded-lg bg-blue-950 p-3.5 text-white md:h-28 md:text-base">
        <h4>جدیدترین تخفیفات فصل برند {brandPersian}</h4>
        <h4>
          <span>{percent}٪</span> تخفیف روی تمام محصولات
        </h4>
      </div>
    </Link>
  );
};

export default NewOfBrandItem;
