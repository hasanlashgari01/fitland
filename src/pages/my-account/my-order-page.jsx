import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";
import { useOrder } from "../../hooks/useOrder";
import { transformDateWithPersianMonth } from "../../shared/date";
import Loading from "../../components/loading";
import Image from "../../components/image";

const MyOrderPage = () => {
  const { trackingCode } = useParams();
  const { data, isLoading, error } = useOrder(trackingCode);
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && error) {
    toast.error(error.response.data.message);
    navigate("/404");
  }

  return (
    <div>
      <div>
        <h2 className="text-3xl">اطلاعات سفارش</h2>
      </div>
      <div className="mt-4.5 flex flex-wrap gap-3 rounded-3xl text-xs max-sm:bg-white max-sm:py-6 sm:text-sm md:gap-6 md:text-base xl:gap-10">
        <div className="flex-1 basis-64 space-y-3 rounded-3xl bg-white px-8 sm:py-6 md:space-y-6">
          <h4>کد پیگیری : {trackingCode}</h4>
          <h4>تاریخ ثبت سفارش : {transformDateWithPersianMonth(data?.createdAt)}</h4>
          <h4>
            وضعیت سفارش :
            <>
              {data.status === "PENDING" && <span className="text-gray-500"> در انتظار پرداخت</span>}
              {data.status === "DELIVERED" && <span className="text-green-500"> تحویل داده شد</span>}
              {data.status === "CANCELLED" && <span className="text-red-500"> لغو شد</span>}
            </>
          </h4>
        </div>
        <div className="flex-1 basis-64 space-y-3 rounded-3xl bg-white px-8 sm:py-6 md:space-y-6">
          <h4>تحویل گیرنده : {data?.user.fullName}</h4>
          <h4>شماره تماس : {data?.user.mobile}</h4>
        </div>
        <div className="flex-1 basis-64 space-y-3 rounded-3xl bg-white px-8 sm:py-6 md:space-y-6">
          <h4>مبلغ : {data.price.toLocaleString()} تومان</h4>
          <h4>سود شما از خرید : {data.discount.toLocaleString()} تومان</h4>
          <h4>هزینه ارسال : {Number(50000).toLocaleString()} تومان</h4>
          <h4>پرداخت درب منزل</h4>
        </div>
      </div>

      <div className="mt-6 mb-12 grid grid-cols-1 gap-6 xl:grid-cols-2">
        {data.items.map(({ price, quantity, discount, product }) => (
          <div key={product._id} className="xs:flex-row flex flex-col gap-4 rounded-2xl bg-gray-50 p-6 lg:gap-6">
            <div className="mx-auto size-28 shrink-0 overflow-hidden rounded-2xl bg-white lg:size-40">
              <Image cover={product.cover} />
            </div>
            <div className="flex flex-1 items-start justify-between max-xs:mx-auto text-xs leading-relaxed sm:text-sm lg:py-4 md:text-base">
              <div className="flex h-full flex-col justify-between max-sm:gap-2">
                <Link to={`/product/${product.slug}`} className="line-clamp-2 h-10 flex-1 overflow-hidden">
                  {product.name}
                </Link>
                <div className="flex flex-row-reverse justify-between">
                  <h4>{price.toLocaleString()} تومان</h4>
                  <h4>{quantity} عدد</h4>
                </div>
                {discount != 0 && <h4 className="empty:hidden">{discount?.toLocaleString()}</h4>}
              </div>
              {/* <div>
                {data.status === "DELIVERED" && (
                  <button className="border-primary text-primary hover:bg-primary cursor-pointer rounded border px-6 py-2 transition-colors duration-300 hover:text-white">
                    ثبت دیدگاه
                  </button>
                )}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrderPage;
