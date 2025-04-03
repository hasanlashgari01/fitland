import { useLayoutEffect, useRef } from "react";
import { useMyOrdersCount } from "../../../hooks/useMyAccount";
import TabItem from "../components/tab-item";

const Tabs = ({ activeTab }) => {
  const { data, isLoading } = useMyOrdersCount(activeTab);

  const tabRef = useRef(null);

  useLayoutEffect(() => {
    if (activeTab) {
      document.querySelector(".tab--active")?.classList.remove("tab--active");

      Array.from(tabRef.current.children).forEach((tab) => {
        const { param } = tab.dataset;

        if (activeTab === param) tab.classList.add("tab--active");
        return null;
      });
    }
  }, [activeTab]);

  return (
    <ul
      className="flex w-full gap-3 overflow-x-auto border-b border-gray-300 px-3 *:cursor-pointer lg:gap-6.5 lg:px-7"
      ref={tabRef}
    >
      <TabItem param="PENDING" count={data?.countPending} text="جاری" isLoading={isLoading} defaultActive />
      <TabItem param="DELIVERED" count={data?.countDelivered} text="تحویل شده" isLoading={isLoading} />
      <TabItem param="CANCELLED" count={data?.countCancelled} text="لغو شده" isLoading={isLoading} />
    </ul>
  );
};

export default Tabs;
