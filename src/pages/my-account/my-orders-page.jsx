import { useSearchParams } from "react-router";
import Empty from "../../components/empty";
import Loading from "../../components/loading";
import Tabs from "../../features/my-account/components/tabs";
import { useMyOrders } from "../../hooks/useMyAccount";
import useTitle from "../../hooks/useTitle";
import OrderItem from "../../features/my-account/components/order-item";

const MyOrdersPage = () => {
  useTitle("پنل ادمین - سفارشات");
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("activeTab");
  const { data, isLoading } = useMyOrders(activeTab);

  return (
    <div className="rounded-2xl h-[80dvh] overflow-hidden border border-gray-300 bg-white pt-1">
      <Tabs activeTab={activeTab} />
      <div className="my-7">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data.length == 0 ? (
              <Empty isShowLink={false} isBorder={false} isRounded={false} />
            ) : (
              <div className="space-y-6 pb-10 overflow-y-auto px-3 lg:gap-6.5 lg:px-7 h-[70dvh]">
                {data.map((order) => (
                  <OrderItem key={order._id} {...order} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyOrdersPage;
