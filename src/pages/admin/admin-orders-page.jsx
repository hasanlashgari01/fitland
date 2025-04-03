import { debounce, isSafeInteger } from "lodash";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Dropdown from "../../components/dropdown";
import Empty from "../../components/empty";
import Loading from "../../components/loading";
import Pagination from "../../components/pagination";
import OrderItem from "../../features/admin/components/order-item";
import OrderTableHeader from "../../features/admin/components/order-table-header";
import { useOrders } from "../../hooks/useOrder";
import useTitle from "../../hooks/useTitle";
import { digitsToEnglish } from "../../shared/numbers";

const orderStatus = [
  { id: 1, title: "در انتظار پرداخت", value: "PENDING" },
  { id: 2, title: "تحویل داده", value: "DELIVERED" },
  { id: 3, title: "لغو شده", value: "CANCELLED" },
];

const AdminOrdersPage = () => {
  useTitle("پنل ادمین - سفارشات");
  const [searchParams, setSearchParams] = useSearchParams();
  const [page] = useState(searchParams.get("page") || 1);
  const [status, setStatus] = useState(searchParams.get("status") || null);
  const [trackingCode, setTrackingCode] = useState(searchParams.get("trackingCode") || null);
  const { data, isLoading, refetch } = useOrders({ page: searchParams.get("page") ?? 1, status, trackingCode });

  const debouncedRefetch = debounce(() => {
    refetch();
  }, 1000);

  useEffect(() => {
    const newParams = new URLSearchParams();

    if (page) newParams.set("page", page);
    if (status) newParams.set("status", status);
    if (trackingCode) newParams.set("trackingCode", trackingCode);

    setSearchParams(newParams);
    debouncedRefetch();
  }, [page, trackingCode, status]);

  useEffect(() => {}, [page, status]);

  if (isLoading) {
    return <Loading />;
  }

  const searchHandler = (e) => {
    let { value } = e.target;

    if (value) value = digitsToEnglish(value);
    if (isSafeInteger(Number(value))) setTrackingCode(value);
    if (value.length > 0) debouncedRefetch();
  };

  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-y-2">
        <Dropdown data={orderStatus} status={status} setStatus={setStatus} />
        <input
          type="text"
          name="trackingCode"
          inputMode="numeric"
          placeholder="کد"
          value={trackingCode}
          onChange={searchHandler}
          className="rounded bg-gray-50 px-4 py-1 outline-none placeholder:text-gray-400 dark:bg-gray-700"
        />
      </div>

      <div className="mt-5 min-h-132 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-700">
        <OrderTableHeader />
        <div className="divide-y-2 divide-gray-100 dark:divide-gray-800">
          {data.count == 0 ? (
            <Empty text="سفارش یافت نشد" isShowLink={false} isBorder={false} />
          ) : (
            data.data?.map((order) => <OrderItem key={order._id} {...order} />)
          )}
        </div>
      </div>
      <Pagination data={data} />
    </div>
  );
};

export default AdminOrdersPage;
