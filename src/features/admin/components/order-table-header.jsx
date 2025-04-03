const OrderTableHeader = () => {
  return (
    <div className="hidden items-center gap-x-3 bg-gray-50 px-3.5 py-2.5 text-xs text-gray-500 lg:flex lg:gap-x-10 lg:px-8 lg:py-4 lg:text-sm dark:bg-gray-900 dark:text-gray-400">
      <p className="w-14 lg:w-20">کد</p>
      <p className="w-24 lg:w-36">نام</p>
      <p className="w-24 lg:w-36">موبایل</p>
      <p className="w-12 lg:w-24">مبلغ</p>
      <div className="hidden w-44">تاریخ</div>
      <div className="w-12 lg:w-36">وضعیت</div>
      <div>عملیات</div>
    </div>
  );
};

export default OrderTableHeader;
