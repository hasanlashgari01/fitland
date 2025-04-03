import Loading from "../../components/loading";
import Modal from "../../components/modal";
import Pagination from "../../components/pagination";
import { usePage } from "../../context/admin-page-context";
import BanList from "../../features/admin/ban-list";
import useTitle from "../../hooks/useTitle";
import { useBanUsers, useToggleBanUser } from "../../hooks/useUser";

const AdminBansPage = () => {
  useTitle("پنل ادمین - کاربران بن شده");
  const { page, selectedItem, isModal, deleteHandler, cancelHandler } = usePage();
  const { data, isLoading, refetch } = useBanUsers(page);
  const { mutate } = useToggleBanUser();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <BanList data={data} />
      <Pagination data={data} />
      <Modal title="بن" body="آیا از بن کاربر اطمینان دارید؟" isOpen={isModal} cancelHandler={cancelHandler}>
        <button className="btn" onClick={cancelHandler}>
          انصراف
        </button>
        <button className="delete-btn" onClick={() => deleteHandler({ mutate: () => mutate(selectedItem), refetch })}>
          بن
        </button>
      </Modal>
    </div>
  );
};
export default AdminBansPage;
